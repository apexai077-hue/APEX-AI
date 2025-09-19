document.addEventListener('DOMContentLoaded', () => {

    const loginBtn = document.getElementById('login-btn');
    const loginContainer = document.getElementById('login-container');
    const chatContainer = document.getElementById('chat-container');
    const usernameInput = document.getElementById('username');

    // Login button click
    loginBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        const regex = /^[A-Za-z0-9_]{3,20}$/;

        if (!regex.test(username)) {
            alert("Username must be 3-20 characters: letters, numbers, or underscore only.");
            return;
        }

        loginContainer.style.display = 'none';
        chatContainer.style.display = 'flex';
    });

    // Enter key submits login
    usernameInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') loginBtn.click();
    });

    // Chat logic
    const sendBtn = document.getElementById('send-btn');
    const userInput = document.getElementById('user-input');
    const messages = document.getElementById('messages');

    function addMessage(text, sender) {
        const msgDiv = document.createElement('div');
        msgDiv.classList.add('message', sender === 'user' ? 'user-message' : 'ai-message');
        msgDiv.textContent = text;
        messages.appendChild(msgDiv);
        messages.scrollTop = messages.scrollHeight;
    }

    sendBtn.addEventListener('click', () => {
        const text = userInput.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        userInput.value = '';

        setTimeout(() => {
            addMessage('This is Apex AI response.', 'ai');
        }, 500);
    });

    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') sendBtn.click();
    });

    // Mic button placeholder
    document.getElementById('voice-btn').addEventListener('click', () => {
        alert('Voice input clicked!');
    });

});
