// Простая "база данных" в памяти
let users = [];
let currentUser = null;

// Регистрация
function registerUser() {
  const username = document.getElementById("reg-username").value;
  const email = document.getElementById("reg-email").value;
  const password = document.getElementById("reg-password").value;
  
  if(username && email && password){
    users.push({ username, email, password });
    alert("Регистрация успешна!");
    window.location.href = "login.html";
  } else {
    alert("Заполните все поля!");
  }
}

// Авторизация
function loginUser() {
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  
  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    currentUser = user;
    window.location.href = "index.html";
  } else {
    alert("Неверные данные!");
  }
}

// Отображение профиля
function showProfile() {
  if(currentUser){
    document.getElementById("profile-username").innerText = currentUser.username;
    document.getElementById("profile-email").innerText = currentUser.email;
  }
}

// Настройки (пример)
function changeUsername() {
  const newName = prompt("Введите новый ник:");
  if(newName){
    currentUser.username = newName;
    alert("Ник обновлён!");
    showProfile();
  }
}

// Чат
let messages = [];

function sendMessage() {
  const msgInput = document.getElementById("msg-input");
  const msg = msgInput.value;
  if(msg){
    messages.push({ user: currentUser.username, text: msg });
    renderMessages();
    msgInput.value = "";
  }
}

function renderMessages() {
  const chatList = document.getElementById("chat-list");
  chatList.innerHTML = "";
  messages.forEach(m => {
    const li = document.createElement("li");
    li.textContent = `${m.user}: ${m.text}`;
    chatList.appendChild(li);
  });
}
