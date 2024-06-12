document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('form');
  
  form.addEventListener('submit', function(event) {
    // Get the input values
    const name = document.getElementById('name').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    
    // Initialize an empty errors array
    let errors = [];

    // Validate the Name field
    if (name === '') {
      errors.push('Name is required.');
    }

    // Validate the Subject field
    if (subject === '') {
      errors.push('Subject is required.');
    }

    // Validate the Message field
    if (message === '') {
      errors.push('Message is required.');
    }

    // If there are errors, prevent form submission and show alert
    if (errors.length > 0) {
      event.preventDefault(); // Prevent form submission
      alert(errors.join('\n'));
    }
  });
});
