// loader
let load = document.querySelector('.loader');
function closeload() {
    load.style.display = 'none';
}


// menu
let open = document.querySelector('#open');
let close = document.querySelector('#close');
let popup = document.querySelector('.popup');
let flag = false;
open.addEventListener('click', ()=>{
    flag != flag;
    close.style.display = 'block';
    popup.style.display = 'flex';
    open.style.display = 'none';

})
close.addEventListener('click', ()=>{
    flag != flag;
    close.style.display = 'none';
    popup.style.display = 'none';
    open.style.display = 'block';

})




// form
function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "") {
        alert("All fields are required");
        return false;
    }
    
    // Basic email format validation
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }
    
    return true;
}

function redirectToThanksPage() {
    window.location.href = "thanks.html";
}


// typed
var typed = new Typed('#element', {
    strings: ['Programmer.', 'Web Developer.','Freelancer.'],
    typeSpeed: 150,
    backSpeed: 100,
    loop: true,
  });