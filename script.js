// Set the date we're counting down to

var countDownDate = new Date("Jun 16, 2022 14:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime()

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo").innerHTML = days + " DAGEN "+ hours + " UREN "
        + minutes + " MINUTEN " + seconds+ " SECONDEN";

    // If the count down is over, write some text      
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);

function block(){
    document.getElementById("karte").src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.837502461104!2d13.37350081601199!3d52.51827977981377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851bf334f7e59%3A0xaad3547f29a9ddbd!2sDeutscher+Bundestag!5e0!3m2!1sde!2sde!4v1531565598584";
  document.getElementById("bild").style.display = "none";
  document.getElementById("karte").style.display = "block";
}