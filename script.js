document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission
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
        $.ajax({
            url: "https://api.apispreadsheets.com/data/AOCHVWMwYoHFIYyk/",
            type: "post",
            body: JSON.stringify({"data": {"Name":"value","Email":"value"}, "query": "select * from AOCHVWMwYoHFIYyk where Name='value'"}),
            data: $("#form").serializeArray(),
        });
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
