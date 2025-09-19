// Login logic with username restrictions
const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');

loginBtn.addEventListener('click', () => {
    const username = document.getElementById('username').value.trim();
    const usernameRegex = /^[A-Za-z0-9_]{3,20}$/; // only letters, numbers, underscore, 3-20 chars

    if (!usernameRegex.test(username)) {
        alert("Username must be 3-20 characters: letters, numbers, or underscore only.");
        return;
    }

    // Proceed to chat
    loginContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
});

// Chat logic
const sendBtn = document.getElementById('send-btn');
const userInput = document.getElementById('user-input');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', () => {
    const text = userInput.value.trim();
    if(text === '') return;
    addMessage(text, 'user');
    userInput.value = '';

    // Example AI response
    setTimeout(() => {
        addMessage('This is Apex AI response.', 'ai');
    }, 500);
});

function addMessage(text, sender) {
    const msgDiv = document.createElement('div');
    msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
    msgDiv.textContent = text;
    messages.appendChild(msgDiv);
    messages.scrollTop = messages.scrollHeight;
}

// Mic button placeholder
document.getElementById('voice-btn').addEventListener('click', () => {
    alert('Voice input clicked!');
});
