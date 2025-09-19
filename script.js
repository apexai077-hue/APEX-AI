const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");

function addMessage(text, sender) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text) {
    addMessage(text, "user");
    userInput.value = "";

    // Dummy AI response (later you can add API)
    setTimeout(() => {
      addMessage("Hello! I am Apex AI 🔥", "bot");
    }, 500);
  }
});