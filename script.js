const sendBtn = document.getElementById("sendBtn");
const userInput = document.getElementById("userInput");
const chatContainer = document.getElementById("chatContainer");

sendBtn.addEventListener("click", sendMessage);
userInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text === "") return;

  // User message (right side)
  const userMsg = document.createElement("div");
  userMsg.className = "message user-message";
  userMsg.innerText = text;
  chatContainer.appendChild(userMsg);

  // Clear input
  userInput.value = "";

  // Fake AI reply (left side)
  setTimeout(() => {
    const aiMsg = document.createElement("div");
    aiMsg.className = "message ai-message";
    aiMsg.innerText = "AI: " + text;
    chatContainer.appendChild(aiMsg);

    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 600);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}
