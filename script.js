document.getElementById("sendBtn").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function(e) {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const input = document.getElementById("userInput");
  const message = input.value.trim();
  if (message === "") return;

  addMessage(message, "userMessage");
  input.value = "";

  setTimeout(() => {
    addMessage("This is a response from Apex AI.", "aiMessage");
  }, 800);
}

function addMessage(text, type) {
  const chatBox = document.getElementById("chatBox");
  const msg = document.createElement("div");
  msg.classList.add("message", type);
  msg.textContent = text;
  chatBox.appendChild(msg);

  chatBox.scrollTop = chatBox.scrollHeight;
}
