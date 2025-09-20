const chatBox = document.getElementById("chatBox");
const sendBtn = document.getElementById("sendBtn");
const messageInput = document.getElementById("messageInput");

function addMessage(text, sender) {
  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message", sender);
  msgDiv.textContent = text;
  chatBox.appendChild(msgDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // auto scroll
}

function sendMessage() {
  const msg = messageInput.value.trim();
  if (msg) {
    addMessage(msg, "user");
    messageInput.value = "";

    // Simulated AI reply
    setTimeout(() => {
      addMessage("AI: " + msg.split("").reverse().join(""), "ai");
    }, 800);
  }
}

// Event listeners
sendBtn.addEventListener("click", sendMessage);
messageInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault(); // stop form refresh
    sendMessage();
  }
});
