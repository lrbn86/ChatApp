const messageInput = document.querySelector("#messageInput");
const messageButton = document.querySelector("#messageButton");
const messagesBox = document.querySelector("#messagesBox");
const loginButton = document.querySelector("#loginButton");
const usernameInput = document.querySelector("#usernameInput");
const loginModal = document.getElementById("loginModal");
usernameInput.value = "";
usernameInput.focus();

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
  username = usernameInput.value;
  const message = document.createElement("p");
  message.textContent = username + " has connected to the chat.";
  messagesBox.appendChild(message);
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

loginButton.addEventListener('click', function() {
  loginUser();
  loginModal.style.display = "none";
  messageInput.focus();
});

usernameInput.addEventListener('keypress', function(ev) {
  if (ev.key == "Enter") {
    loginUser();
    loginModal.style.display = "none";
    messageInput.focus();
  }
})