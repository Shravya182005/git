$(document).ready(function() {
  // Handle form submission using AJAX
  $('#registrationForm').submit(function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    var formData = $(this).serialize(); // Serialize form data

    $.ajax({
      type: 'POST',
      url: 'submit.php',
      data: formData,
      success: function(response) {
        // Display the response message
        $('#responseMessage').html(response);
      },
      error: function() {
        $('#responseMessage').html('There was an error submitting your form. Please try again.');
      }
    });
  });
});
