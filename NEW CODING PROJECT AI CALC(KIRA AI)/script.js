async function sendMessage() {
  const input = document.getElementById('userInput');
  const message = input.value;
  input.value = '';

  const chatbox = document.getElementById('chatbox');
  chatbox.innerHTML += `<div><strong>You:</strong> ${message}</div>`;

  const res = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message }),
  });

  const data = await res.json();
  chatbox.innerHTML += `<div><strong>Bot:</strong> ${data.reply}</div>`;
  chatbox.scrollTop = chatbox.scrollHeight;
}