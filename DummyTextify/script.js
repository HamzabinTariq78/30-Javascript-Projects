let text=[
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...',
    
    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper...',
    
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum...',
    
    'Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris...',
    
    'Suspendisse nec arcu nisl. Sed cursus elit quis tortor. Integer eget augue nec dolor mollis venenatis. Sed vel tellus non nunc viverra tristique ac vel lectus...'
];
// Function to generate placeholder text
function textGenerate(e) {
    // Get the value from the input field
    let value = document.querySelector('.input').value;
    // Array to store generated text
    let loremtext = [];

    // Prevent the default form submission
    e.preventDefault();

    // Check if the input value is not between 1 and 5 or is not a number
    if (value > 5 || value < 1 || isNaN(value)) {
        // Generate random text if conditions are not met
        let random = Math.floor(Math.random() * text.length);
        loremtext.push(`<p>${text[random]}</p>`);
    } else {
        // Generate text based on the input value
        for (i = 0; i < value; i++) {
            loremtext.push(`<p>${text[i]}</p>`);
        }
    }

    // Join the generated text and display it in the box
    loremtext = loremtext.join('');
    document.querySelector('.box').innerHTML = loremtext;
}

// End of code