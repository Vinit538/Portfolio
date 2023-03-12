var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}


const navbarToggle = document.getElementById("navbar-toggle");
const navbarLinks = document.getElementById("navbar-links");
// const navbar = document.querySelector(".navbar");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 0) {
//     navbar.classList.add("navbar-scrolled");
//   } else {
//     navbar.classList.remove("navbar-scrolled");
//   }
// });


const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/xgebypnp');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      alert('Thank you for your message!');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  };
  xhr.send(JSON.stringify({
    name: name,
    email: email,
    message: message
  }));
});
