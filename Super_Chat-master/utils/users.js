const users= []; 

// Join user to chat
//BASICALLY FOR ALL MULTIPLE USERS
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// Get current user
//FOR THAT PARTICULAR CHATTING USER
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}


// User leaves chat...IF USER LEAVES FROM 1 ROOM IT SHOULD NOT REFLECT IN OTHER ROOM

function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];//0 index for 1 user not complete array
  }
}

// Get room users 
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}


module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
};