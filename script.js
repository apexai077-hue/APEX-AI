const loginPage = document.getElementById("loginPage");
const chatPage = document.getElementById("chatPage");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const userDisplay = document.getElementById("userDisplay");
const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

// ✅ Function to handle login
function login() {
  const username = usernameInput.value.trim();
  if (username) {
    userDisplay.textContent = username;
    loginPage.classList.add("hidden");
    chatPage.classList.remove("hidden");
  } else {
    alert("Please enter a name");
  }
}

// ✅ Function to send chat messages
function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = "You: " + msg;
    chatBox.appendChild(msgDiv);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
}

// Click login button
loginBtn.addEventListener("click", login);

// Press Enter on login input
usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    login();
  }
});

// Click send button
sendBtn.addEventListener("click", sendMessage);

// Press Enter in chat input
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    sendMessage();
  }
});
