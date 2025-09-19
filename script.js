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
const chatContainer = document.getElementById('chatContainer'); // Your chat box ID
const userInput = document.getElementById('userInput'); // Your input box ID
const sendBtn = document.getElementById('sendBtn'); // Your send button ID

sendBtn.addEventListener('click', () => {
  const userText = userInput.value.trim();
  if (!userText) return;

  // Add user message
  const userMessage = document.createElement('div');
  userMessage.classList.add('message', 'user');
  userMessage.textContent = userText;
  chatContainer.appendChild(userMessage);

  userInput.value = '';
  chatContainer.scrollTop = chatContainer.scrollHeight;

  // AI response (replace this with your AI API response)
  setTimeout(() => {
    const aiMessage = document.createElement('div');
    aiMessage.classList.add('message', 'ai');
    aiMessage.textContent = "AI says: " + userText; // temporary text
    chatContainer.appendChild(aiMessage);
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 500);
});
// Ensure chat scrolls to bottom after adding messages
function scrollToBottom() {
    const chatContainer = document.getElementById('chatContainer'); // use your chat container ID
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Example: after appending user message
// chatContainer.appendChild(userMessage);
// scrollToBottom();

// Example: after appending AI message
// chatContainer.appendChild(aiMessage);
// scrollToBottom();
