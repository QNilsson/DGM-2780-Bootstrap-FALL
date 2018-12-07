//js form validation
/*$(document).ready(function () {

    $('#contact-form').validate({
        rules: {
            exampleName: {
                minlength: 2,
                required: true
            },
            exampleInputEmail1: {
                minlength: 2,
                required: true,
                email: true
            }
        },
        highlight: function (element) {
            $(element).closest('.col-4').removeClass('success').addClass('error');
        },
        success: function (element) {
            element.text('OK!').addClass('valid')
                .closest('.col-4').removeClass('error').addClass('success');
        }
    });

});
 */

// Run function when DOM Content has loaded
document.addEventListener('DOMContentLoaded', init);

// Function to run when DOM Content has loaded
function init(event) {

	// Get registration form and keep in global scope
	regForm = document.forms['contact-form'];

	// Listen for form submit
	regForm['submit-me'].onclick = validateForm; 
}

// Function to validate form elements
/*function validateForm(event) {

	// Array to contain all error messages
	var errorMessages = Array();

	// If username is empty
	if(!regForm['exampleInputEmail1'].value) {
		errorMessages.push('* Please enter Username');
    }}*/
    

    (function() {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needsValidation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })();