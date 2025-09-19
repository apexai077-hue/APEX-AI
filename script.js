// Avatar selection logic
const selectedAvatar = document.getElementById('selected-avatar');
const avatarSelection = document.getElementById('avatar-selection');
const avatarOptions = document.querySelectorAll('.avatar-option');

selectedAvatar.addEventListener('click', () => {
    avatarSelection.style.display = avatarSelection.style.display === 'flex' ? 'none' : 'flex';
});

avatarOptions.forEach(avatar => {
    avatar.addEventListener('click', () => {
        selectedAvatar.src = avatar.src;
        avatarSelection.style.display = 'none';
    });
});

// Login logic
const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');

loginBtn.addEventListener('click', () => {
    const usernameInput = document.getElementById('username').value.trim();
    if(usernameInput === '') {
        alert('Please enter a username');
        return;
    }
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
