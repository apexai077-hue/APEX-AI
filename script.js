const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// focus input when loaded
window.addEventListener('load', () => userInput.focus());

function scrollToBottom() {
  chatBox.scrollTop = chatBox.scrollHeight;
}

function createMessage(text, sender) {
  const msg = document.createElement('div');
  msg.className = 'message ' + sender;
  msg.textContent = text;
  return msg;
}

function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // user message
  const userMsg = createMessage(text, 'user');
  chatBox.appendChild(userMsg);
  scrollToBottom();
  userInput.value = '';

  // fake AI reply
  setTimeout(() => {
    const aiMsg = createMessage("Apex AI reply: " + text, 'ai');
    chatBox.appendChild(aiMsg);
    scrollToBottom();
  }, 600);
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});
