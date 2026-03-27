const moment = require('moment');//for updated time

//Every message that is being sent is in this format
function formatMessage(username, text) {
  return {
    username ,
    text ,
    time: moment().format('h:mm a')
  };
}

module.exports = formatMessage;