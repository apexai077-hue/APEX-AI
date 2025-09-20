const loginPage = document.getElementById("loginPage");
const chatPage = document.getElementById("chatPage");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const userDisplay = document.getElementById("userDisplay");
const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

// ✅ Login function
function login() {
  const username = usernameInput.value.trim();
  if (username) {
    userDisplay.textContent = username;
    loginPage.classList.add("hidden");  // hides login page
    chatPage.classList.remove("hidden"); // shows chat page
  } else {
    alert("Please enter a name");
  }
}

// ✅ Send message function
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

// Button & Enter key events
loginBtn.addEventListener("click", login);
usernameInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") login();
});
sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
