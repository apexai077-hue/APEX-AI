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

async function sendMessage() {
  const text = userInput.value.trim();
  if (!text) return;

  // show user message
  const userMsg = createMessage(text, 'user');
  chatBox.appendChild(userMsg);
  scrollToBottom();
  userInput.value = '';

  // call Netlify function for AI reply
  try {
    const res = await fetch('/.netlify/functions/gemini', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();

    const aiReply = data.reply || "⚠️ No reply from AI.";
    const aiMsg = createMessage(aiReply, 'ai');
    chatBox.appendChild(aiMsg);
    scrollToBottom();

  } catch (err) {
    const errorMsg = createMessage("❌ Error: " + err.message, 'ai');
    chatBox.appendChild(errorMsg);
    scrollToBottom();
  }
}

sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    sendMessage();
  }
});
