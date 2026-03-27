//Simply said Each socket emits its msg to a server(io is an instance of server) 
//and server, in turn, emits it to all connected 
//sockets. That is how msg sent by any user is displayed to all users.

  
const chatForm = document.getElementById('chat-form');
//The querySelector() method only returns 
//the first element that matches the specified selectors
const chatMessages= document.querySelector('.chat-messages');

//THESE ARE BROUGHT AS JAVASCRIPT ELEMENTS FROM CHAT.HTML
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');

// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true
});

const socket= io();//As soon As runs connects and send server message of arrival of new user

//Join chatroom
//Sending to the server catch it there
socket.emit('joinRoom',{username,room});

    //GET ROOM AND USERS
    socket.on('roomUsers', ({ room, users }) => {
      outputRoomName(room);
      outputUsers(users);
    });



//Message from Server to the user who just loged in 
socket.on('message',message=>{
  console.log(message);
  outputMessage(message);

  //Automatic scroll down
  chatMessages.scrollTop=chatMessages.scrollHeight;
});

//Submit msg on chat-form in html page
chatForm.addEventListener('submit',e=>{
  //avoid saving msg in a file
  e.preventDefault();
  //get msg text
  const msg=e.target.elements.msg.value;//msg is the id in chat-form
  //emit message to server : "from html file to server"
  socket.emit('chatMessage', msg);

  //clear input on sender box
  e.target.elements.msg.value='';
  e.target.elements.msg.focus();
});


// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML = `<p class="meta">${ message.username }<span>${ message.time }</span></p>
  <p class="text">
    ${message.text}
  </p>`;
  document.querySelector('.chat-messages').appendChild(div);
}

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
//did'nt got much idea
function outputUsers(users) {
  userList.innerHTML = `
    ${users.map(user => `<li>${user.username}</li>`).join('')}
  `;
}