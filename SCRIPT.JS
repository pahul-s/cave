const userInput = document.getElementById('user-input');
const chatMessages = document.getElementById('chat-messages');
let userTries = 0;
let isFirstMessage = true; // Track if it's the first message from the user
let chatLog = ''; // To store the chat messages

function addMessage(text, senderClass) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);

    // Update the chatLog with the new message
    chatLog += `${text}\n`;
}

function handleUserInput() {
    const userText = userInput.value;

    if (isFirstMessage) {
        isFirstMessage = false;
    } else {
        addMessage(`You: ${userText}`, 'user');
        userInput.value = '';

        userTries++;
        if (userTries === 6) {
            // After 6 tries, the Voice asks, "Are you an echo?"
            setTimeout(() => {
                addMessage('Voice 1: Are you an echo?', 'voice1');
            }, 1000);
        } else {
            // Simulate AI response (In this case, repeat what the user entered)
            setTimeout(() => {
                addMessage(`Voice 1: ${userText}`, 'voice1');
            }, 1000);
        }
    }
}

userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserInput();
    }
});
