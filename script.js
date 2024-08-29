document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        confettiShooter();
    });
});
function confettiShooter() {
    const inputs = document.querySelectorAll('#form input[required]'); // Select all required inputs in the form
    let isValid = true; // Initialize isValid to true

    // Check if all required inputs are filled
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            isValid = false; // Mark as invalid if any required input is empty
            break; // Exit the loop early if validation fails
        }
    }
    if (isValid) {
        const element = document.getElementById('e0DQ82qcIov1');
        if (element) {
            element.svgatorPlayer.ready(function() {
                const player = element.svgatorPlayer;
                if (player && player.play) {
                    player.play();
                    // Set form action and target attributes
                    $(".desc, .follow-btn, .shoot, input").addClass('active');
                    document.querySelector('.waitlist-btn').innerHTML = "Follow for Updates";
                    document.querySelector('.waitlist-btn').style.maxWidth = "230px";
                    // $('#form').attr('action', 'https://www.instagram.com/').attr('target', '_blank');
                }
            });
        }
    }
}