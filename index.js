function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min) + min;
}

// magic 8 ball sayings
const sayings = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",  
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",   
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
];

// Random number generator function
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Function to get a random saying
function getRandomSaying() {
    const input = document.getElementById("clear");
    const responseElement = document.getElementById("response");
    const ball = document.querySelector(".ball");

    // Check if input is empty
    if (input.value.trim() === "") {
        alert("Please ask a question!");
        return;
    }

    // Add shake animation
    ball.style.animation = "shake 0.5s, bounce 1s";

    // Temporarily change response
    responseElement.innerHTML = sayings[randomNumberGenerator(0, sayings.length - 1)];
    responseElement.style.fontSize = "18px";

    // Reset after 4 seconds
    setTimeout(() => {
        responseElement.innerHTML = "8";
        responseElement.style.fontSize = "120px";
        input.value = "";
        responseElement.style.animation = "zoom 1s ease-in-out";
        responseElement.style.textShadow = "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff, 0 0 50px #fff, 0 0 60px #fff, 0 0 70px #fff";
        ball.style.animation = ""; // Reset ball animation
    }, 4000);
}

// Add event listeners after DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const askButton = document.getElementById('askme');
    const input = document.getElementById('clear');

    // Add click event to button
    askButton.addEventListener('click', getRandomSaying);

    // Add enter key event to input
    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            getRandomSaying();
        }
    });
});