// Login logic
const loginBtn = document.getElementById('login-btn');
const loginContainer = document.getElementById('login-container');
const chatWrapper = document.getElementById('chat-wrapper');
const displayUsername = document.getElementById('display-username');

loginBtn.addEventListener('click', () => {
    const usernameInput = document.getElementById('username').value.trim();
    if(usernameInput === '') {
        alert('Please enter a username');
        return;
    }
    displayUsername.textContent = usernameInput;
    loginContainer.style.display = 'none';
    chatWrapper.style.display = 'flex';
});

// Sidebar toggle
const sidebarToggle = document.getElementById('sidebar-toggle');
const sidebar = document.getElementById('sidebar');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
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

// Sidebar buttons
document.getElementById('new-chat').addEventListener('click', () => {
    messages.innerHTML = '';
});

document.getElementById('photo-upload').addEventListener('click', () => {
    alert('Photo upload clicked!');
});
