
const sendBtn = document.getElementById('sendBtn');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

sendBtn.addEventListener('click', async () => {

const text = input.value.trim();

if(!text) return;

const userDiv = document.createElement('div');
userDiv.className = 'user-message';
userDiv.textContent = text;
messages.appendChild(userDiv);

input.value = '';

const loading = document.createElement('div');
loading.className = 'bot-message';
loading.textContent = 'Loading...';
messages.appendChild(loading);

try {

const response = await fetch('https://api.openai.com/v1/chat/completions', {
method:'POST',
headers:{
'Content-Type':'application/json',
'Authorization':'Bearer YOUR_API_KEY'
},
body:JSON.stringify({
model:'gpt-3.5-turbo',
messages:[{role:'user',content:text}]
})
});

if(!response.ok){
throw new Error('Failed to connect');
}

const data = await response.json();

loading.remove();

const botDiv = document.createElement('div');
botDiv.className = 'bot-message';
botDiv.textContent = data.choices[0].message.content;
messages.appendChild(botDiv);

}catch(error){

loading.textContent = 'Failed to connect. Wait and try again later.';
}

});
