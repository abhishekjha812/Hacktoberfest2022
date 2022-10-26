const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const app = express();
const server=http.createServer(app);
const io=socketio(server);


//SET STATIC FOLDER
//linking current directory with the public folder to display html pages
app.use(express.static(path.join(__dirname,'public')));


const botName= 'Super Chat Bot  ';

//on take in an event of connection...Run when client connects 
io.on('connection',socket=>{

  socket.on('joinRoom',({username,room})=>{

    //get id from url that is in socker.id
    const user=userJoin(socket.id,username,room);
    //socket has predefined function for joining 
    socket.join(user.room);

    //welcome current user...will send back msg to current user only
    socket.emit('message',formatMessage(botName,`${user.username} welcone to Super Chat`));

    //Broadcast when a user connects...if you want to send message to all but not back to sender
    socket.broadcast
    .to(user.room)//USED TO JOIN SPECIFIC ROOM
    .emit('message',formatMessage(botName,`${user.username} has joined the chat`));

    //SEND USERS AND ROOMS INFO
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });
  });


  //ABOVE LOGIC IS JUST WHAT HAPPENS WHEN A NEW USER ARRIVES
  //BELOW CODES HANDLES THE CHAT MSGS

  //Listen to chat message sent from html page
  socket.on('chatMessage',msg=>{
    //Taking msg from user and deliver it to everyone
    
    //get id from url that is in socker.id
    const user=getCurrentUser(socket.id);

    //SO THAT CHAT MSG IS SEND TO ONE(Particular) CHAT ONLY
    io.to(user.room).emit('message',formatMessage(user.username ,msg ));

    //runs when client disconnects
    socket.on('disconnect', ()=>{
      const user=userLeave(socket.id);

      //will send message to all the client including sender
        if(user){
          io.to(user.room).emit(
            'message',
            formatMessage(botName, `${user.username} has left the chat`)
          );
          //SEND USERS AND ROOMS INFO
          //INSIDE IF(imp)
          io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room)
          });
        }
      });
  });
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));










