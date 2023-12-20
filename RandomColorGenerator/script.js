// Selecting the button and h2 elements from the HTML
let btn = document.querySelector('button');
let colorName = document.querySelector('h2');

// Function to generate a random color and update styles
function ColorGenerator(){
    // Generating a random hexadecimal color code
    let random = `#${(Math.random() * 0xffff * 100000).toString(16).slice(0, 6)}`;
    
    // Updating styles in the HTML and applying the random color
    document.body.style.background = random;
    colorName.innerHTML = random;
    colorName.style.color = random;
    btn.style.background = random;
}

// Calling the ColorGeneroter function to set initial styles
ColorGenerator();
