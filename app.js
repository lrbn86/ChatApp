const messageInput = document.querySelector("#messageInput");
const messageButton = document.querySelector("#messageButton");
const messagesBox = document.querySelector("#messagesBox");
const loginButton = document.querySelector("#loginButton");
// const loginModal = document.querySelector("#loginModal");

var username = "";

const sendMessage = function() {
  const message = document.createElement("p");
  message.textContent = username + ": " + messageInput.value;
  messagesBox.appendChild(message);

  // Receiving a new message will scroll to the latest message
  // even during scrolling.
  messagesBox.scrollTop = messagesBox.scrollHeight;
}


const loginUser = function() {
  const usernameInput = document.querySelector("#usernameInput");
  username = usernameInput.value;
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

loginButton.addEventListener('click', function() {
  loginUser();
  const loginModal = document.getElementById("loginModal");
  loginModal.style.display = "none";
});