// Basic app logic: login -> chat, message append, sidebar, gallery upload
document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const loginSection = document.getElementById('loginSection');
  const chatSection = document.getElementById('chatSection');
  const avatarRow = document.getElementById('avatarRow');
  const loginInput = document.getElementById('loginInput');
  const loginBtn = document.getElementById('loginBtn');

  const chatContainer = document.getElementById('chatContainer');
  const userInput = document.getElementById('userInput');
  const sendBtn = document.getElementById('sendBtn');
  const micBtn = document.getElementById('micBtn');

  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const sidebar = document.getElementById('sidebar');
  const newChatBtn = document.getElementById('newChatBtn');
  const galleryBtn = document.getElementById('galleryBtn');
  const fileInput = document.getElementById('fileInput');
  const sidebarAvatar = document.getElementById('sidebarAvatar');
  const sidebarName = document.getElementById('sidebarName');

  let selectedAvatar = null;
  let currentUser = null;

  /* ---------- Avatar selection ---------- */
  avatarRow.addEventListener('click', (e) => {
    const av = e.target.closest('.avatar');
    if (!av) return;
    // deselect others
    document.querySelectorAll('.avatar').forEach(a => a.classList.remove('selected'));
    av.classList.add('selected');
    selectedAvatar = av.dataset.avatar || av.textContent.trim();
  });

  /* ---------- Login flow ---------- */
  loginBtn.addEventListener('click', () => {
    const name = loginInput.value.trim();
    if (!name) {
      alert('Enter an email or nickname to continue.');
      return;
    }
    currentUser = name;
    // Save to localStorage (simple)
    localStorage.setItem('apex_user', JSON.stringify({ name: currentUser, avatar: selectedAvatar }));
    // update sidebar profile display
    sidebarAvatar.textContent = (selectedAvatar && selectedAvatar[0]) ? selectedAvatar[0].toUpperCase() : currentUser[0].toUpperCase();
    sidebarName.textContent = currentUser;
    // switch screens
    loginSection.classList.add('hidden');
    chatSection.classList.remove('hidden');
  });

  /* ---------- Simple message add & scrolling ---------- */
  function scrollToBottom() {
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }

  function addMessage(text, who='ai', isHtml=false) {
    const div = document.createElement('div');
    div.classList.add('message', who);
    if (isHtml) div.innerHTML = text;
    else div.textContent = text;
    chatContainer.appendChild(div);
    scrollToBottom();
  }

  /* ---------- Send button behavior ---------- */
  sendBtn.addEventListener('click', () => {
    const txt = userInput.value.trim();
    if (!txt) return;
    // append user message first (right)
    addMessage(txt, 'user');
    userInput.value = '';
    // simulate AI (replace with your real API call)
    setTimeout(() => {
      addMessage("AI: I got — " + txt, 'ai');
    }, 600);
  });

  // Enter key sends
  userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendBtn.click();
      e.preventDefault();
    }
  });

  /* ---------- Hamburger / Sidebar toggle ---------- */
  hamburgerBtn.addEventListener('click', () => {
    sidebar.classList.toggle('visible');
  });

  // New chat clears container
  newChatBtn.addEventListener('click', () => {
    if (!confirm('Start a new chat? This will clear current messages on screen.')) return;
    chatContainer.innerHTML = '';
  });

  /* ---------- Gallery upload flow ---------- */
  galleryBtn.addEventListener('click', () => {
    fileInput.click();
  });

  fileInput.addEventListener('change', (ev) => {
    const f = ev.target.files[0];
    if (!f) return;
    const reader = new FileReader();
    reader.onload = function(evt) {
      // show image in chat as user message bubble
      const imgHtml = `<img src="${evt.target.result}" alt="uploaded image">`;
      addMessage(imgHtml, 'user', true);
      // optional: send the image data (base64) to your AI api if it supports images
    };
    reader.readAsDataURL(f);
    // reset input
    fileInput.value = '';
  });

  /* ---------- Simple mic (web speech) ---------- */
  let recognition = null;
  if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRec();
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      userInput.value = text;
    };

    recognition.onerror = (e) => { console.log('Speech error', e); };
  } else {
    // browser doesn't support; disable mic
    micBtn.style.opacity = 0.6;
    micBtn.title = 'Voice not supported in this browser';
  }

  micBtn.addEventListener('click', () => {
    if (!recognition) {
      alert('Voice input not supported on this browser.');
      return;
    }
    recognition.start();
  });

  /* ---------- Load saved user if any ---------- */
  (function loadUser() {
    const saved = localStorage.getItem('apex_user');
    if (!saved) return;
    try {
      const obj = JSON.parse(saved);
      if (!obj) return;
      // if you want to auto-login uncomment below:
      // currentUser = obj.name; loginSection.classList.add('hidden'); chatSection.classList.remove('hidden');
      // update UI placeholders
      // sidebarAvatar.textContent = obj.avatar ? obj.avatar[0].toUpperCase() : (obj.name ? obj.name[0].toUpperCase() : 'A');
      // sidebarName.textContent = obj.name || 'You';
    } catch (e) {
      console.warn('Load user failed', e);
    }
  })();

});
