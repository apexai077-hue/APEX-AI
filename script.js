// Minimal chat logic for Apex AI demo
// Make sure this file is saved exactly as "script.js" (case-sensitive)

const chatBox = document.getElementById('chatBox');
const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');

// Helper: create and append a message bubble
function appendMessage(text, who) {
  const el = document.createElement('div');
  el.className = `message ${who}`;
  el.textContent = text;
  chatBox.appendChild(el);
  // keep focus/visible
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Send handler
function sendMessage() {
  const txt = userInput.value.trim();
  if (!txt) return;
  appendMessage(txt, 'user');
  userInput.value = '';
  // demo AI reply (replace with real API call if needed)
  setTimeout(() => {
    appendMessage("Apex AI reply: " + (txt.length > 80 ? txt.slice(0,80)+'...' : txt.split('').reverse().join('')), 'ai');
  }, 650);
}

// Events
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});

// Small accessibility: focus text input on load
window.addEventListener('load', () => userInput.focus());
