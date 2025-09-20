const loginPage = document.getElementById("loginPage");
const chatPage = document.getElementById("chatPage");
const loginBtn = document.getElementById("loginBtn");
const usernameInput = document.getElementById("username");
const userDisplay = document.getElementById("userDisplay");
const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();
  if (username) {
    userDisplay.textContent = username;
    loginPage.classList.add("hidden");
    chatPage.classList.remove("hidden");
  } else {
    alert("Please enter a name");
  }
});

sendBtn.addEventListener("click", () => {
  const msg = messageInput.value.trim();
  if (msg) {
    const msgDiv = document.createElement("div");
    msgDiv.textContent = "You: " + msg;
    chatBox.appendChild(msgDiv);
    messageInput.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
  }
});
