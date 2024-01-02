function projectShow() {
    // Show the project by adding the 'show' class to the project element
    document.querySelector('.project').classList.add('show');
  
    // Show the modal by changing the display property to 'block'
    document.querySelector('.model').style.display = 'block';
  
    // Add a click event listener to the 'i' element (close button)
    document.querySelector('i').addEventListener('click', function () {
      // Remove the 'show' class from the project element to hide it
      document.querySelector('.project').classList.remove('show');
  
      // Hide the modal by changing the display property to 'none'
      document.querySelector('.model').style.display = 'none';
    });
  }
  