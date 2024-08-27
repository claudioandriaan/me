document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Prepare the email parameters
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
    };

    // Send email using EmailJS
    emailjs.send('service_uderhuj', 'template_r5djqlf', templateParams)
        .then(function(response) {
            console.log('Email sent successfully!', response.status, response.text);
            document.getElementById('responseMessage').innerText = 'Your message has been sent successfully!';
            // Wait for a short period (optional) before refreshing
            setTimeout(() => {
                window.location.reload(); // Refresh the page
            }, 2000); // Refresh the page after 2 seconds (adjust as needed)
            
        }, function(error) {
            console.error('Failed to send email:', error);
            document.getElementById('responseMessage').innerText = 'Failed to send the message. Please try again later!';
        });
});

