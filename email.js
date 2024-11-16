// email.js

// Initialize EmailJS with your user ID (make sure this matches your actual EmailJS user ID)
(function() {
    emailjs.init('vX1KWHa4CDQe_DFEW');  // Replace with your EmailJS user ID
})();

// Function to send email using EmailJS
function sendEmail(event, songName, teamName) {
    event.preventDefault();

    // Get the user's email address
    const userEmail = document.getElementById('user-email').value;

    // Send email using EmailJS service and template
    emailjs.send('service_aw271mi', 'template_ziy0d7g', {
        user_email: userEmail,
        song_name: songName,
        team_name: teamName
    }).then(() => {
        alert('Email sent successfully!');
        document.getElementById('email-form').reset(); // Reset the form after submission
    }).catch((error) => {
        alert('Failed to send email. Please try again.');
        console.error('Error:', error);
    });
}
