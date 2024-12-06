// scripts.js

// Chatbot functionality
function sendMessage() {
    const chatInput = document.getElementById('chat-input');
    const chatBox = document.getElementById('chat-box');
    const message = chatInput.value;
    if (message) {
        const userMessage = document.createElement('div');
        userMessage.textContent = "You: " + message;
        chatBox.appendChild(userMessage);
        chatInput.value = '';

        // Simulate bot response
        const botMessage = document.createElement('div');
        botMessage.textContent = "Bot: I'm here to help!";
        setTimeout(() => chatBox.appendChild(botMessage), 500);
    }
}

// Image Recognizer functionality
function recognizeImage() {
    alert("This is where the image recognition would happen.");
}


// scripts.js

// scripts.js

document.addEventListener("mousemove", function (event) {
    const eyes = document.querySelectorAll(".eye");
    const leftEyebrow = document.querySelector(".left-eyebrow");
    const rightEyebrow = document.querySelector(".right-eyebrow");
    const mouth = document.querySelector(".mouth");

    eyes.forEach((eye) => {
        const eyeRect = eye.getBoundingClientRect();
        const angle = Math.atan2(
            event.clientY - (eyeRect.top + eyeRect.height / 2),
            event.clientX - (eyeRect.left + eyeRect.width / 2)
        );
        const offsetX = Math.cos(angle) * 5;
        const offsetY = Math.sin(angle) * 5;
        eye.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
    });

    // Raise eyebrows when the cursor is high
    if (event.clientY < window.innerHeight / 2) {
        leftEyebrow.style.transform = "rotate(20deg)";
        rightEyebrow.style.transform = "rotate(-20deg)";
    } else {
        leftEyebrow.style.transform = "rotate(10deg)";
        rightEyebrow.style.transform = "rotate(-10deg)";
    }

    // Smile or frown based on horizontal cursor position
    if (event.clientX < window.innerWidth / 2) {
        mouth.style.transform = "scale(1, 1.2)";
    } else {
        mouth.style.transform = "scale(1, 0.8)";
    }
});

