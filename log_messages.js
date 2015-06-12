debugger
var submitButton = document.getElementById('submit');
var messages = document.getElementById('logs');

var me = function() {
  debugger
  var message = document.getElementById('message').value;

  var sentence = message;
  debugger
  var listItem = document.createElement("li","h1");
  listItem.textContent = message;
  messages.appendChild(listItem);

}

submitButton.onclick = me;