// Selecting the element with class 'count' from the HTML
let countNumber = document.querySelector('.count');

// Initializing the counter variable
let counter = 0;

// Function to increase the counter
function IncreaseNumber() {
    counter++;
    ColorChange(); // Call function to update color and display
    console.log(counter); // Log counter value to the console
}

// Function to decrease the counter
function DecreaseNumber() {
    counter--;
    ColorChange(); // Call function to update color and display
    console.log(counter); // Log counter value to the console
}

// Function to reset the counter
function ResetNumber() {
    counter = 0;
    ColorChange(); // Call function to update color and display
    console.log('reset'); // Log reset message to the console
}

// Function to update color and display based on the counter value
function ColorChange() {
    if (counter > 0) {
        countNumber.style.color = 'green';
    } else if (counter < 0) {
        countNumber.style.color = 'red';
    } else if (counter == 0) {
        countNumber.style.color = 'white';
    }
    countNumber.innerHTML = counter; // Update the displayed counter value
}
