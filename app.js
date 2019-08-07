const messageInput = document.querySelector("#messageInput");
const messageButton = document.querySelector("#messageButton");
const messagesBox = document.querySelector("#messagesBox");

const sendMessage = function() {
  const username = "lrbn86: ";
  const message = document.createElement("p");
  message.textContent = username + messageInput.value;
  messagesBox.appendChild(message);

  // Receiving a new message will scroll to the latest message
  // even during scrolling.
  messagesBox.scrollTop = messagesBox.scrollHeight;
}

messageInput.addEventListener('keypress', function(ev) {
  if (ev.key == "Enter") {
    sendMessage();
    messageInput.value = '';
  }
});

messageButton.addEventListener('click', function() {
  sendMessage();
  messageInput.value = '';
});