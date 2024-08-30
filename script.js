document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function() {
        confettiShooter();
    });
});
function confettiShooter() {
    const inputs = document.querySelectorAll('#form input[required]'); 
    let isValid = true;
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === "") {
            isValid = false;
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
                    $(".desc, .follow-btn, .shoot, input").addClass('active');
                    document.querySelector('.waitlist-btn').innerHTML = "Follow for Updates";
                    document.querySelector('.waitlist-btn').style.maxWidth = "230px";
                }
            });
        }
    }
}
