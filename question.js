var submitButton = document.getElementById('submit');
var messages = document.getElementById('comments');
var myDataRef = new Firebase('https://rjmxjqj45hk.firebaseio-demo.com/');

var addComment = function() {
 
  var message = document.getElementById('message').value;
  myDataRef.push({message: message});
  
};
  
myDataRef.on('child_added', function(data) {
  debugger
  var message = data.val();
  displayComments(message.message);
});
  
function displayComments(message){
  
  var listItem = document.createElement("p");
  listItem.textContent = message;
  messages.appendChild(listItem);

}

submitButton.onclick = addComment;