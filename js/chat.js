
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');

if(menuBtn && mobileMenu){

menuBtn.addEventListener('click', ()=>{

mobileMenu.classList.toggle('active');

});

}

const sendBtn = document.getElementById('sendBtn');
const userInput = document.getElementById('userInput');
const chatBox = document.getElementById('chatBox');

if(sendBtn){

sendBtn.addEventListener('click', ()=>{

const text = userInput.value.trim();

if(!text) return;

const userMessage = document.createElement('div');

userMessage.className = 'user-message';

userMessage.textContent = text;

chatBox.appendChild(userMessage);

userInput.value = '';

const botMessage = document.createElement('div');

botMessage.className = 'bot-message';

botMessage.textContent =
'FRAM supports sustainable local farming and reusable packaging systems.';

chatBox.appendChild(botMessage);

});

}

