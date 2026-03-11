
// Volunteer Form Message

document.getElementById("volunteerForm").addEventListener("submit", function(e){

e.preventDefault();

document.getElementById("message").innerHTML =
"🙏 Thank you for registering as a volunteer! Maa Durga bless you.";

document.getElementById("message").style.color="green";

});


// Smooth Scrolling for Navigation

document.querySelectorAll("nav a").forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});


// Welcome Popup

window.onload = function(){

setTimeout(function(){

alert("🙏 Welcome to Shree Durga Temple Website 🙏");

},1000);

};