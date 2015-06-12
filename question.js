var submitButton = document.getElementById('submit');
var messages = document.getElementById('logs');

var addComment = function() {
  debugger
 
  var message = document.getElementById('message').value;
  var sentence = message;
  var listItem = document.createElement("p");
  listItem.textContent = message;
  messages.appendChild(listItem);

};

submitButton.onclick = addComment;