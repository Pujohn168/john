
const hamburger = document.querySelector(".hamburger");
const navBar = document.querySelector(".nav-bar");


hamburger.addEventListener("click", () => {
 
  navBar.classList.toggle("active");
});

const autoWriteElement = document.getElementById("autoWrite");
const phrases = [
  "Digital Design",
  "Front-end developer",
  "Sale Department",
  "Stock Keeper",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function autoWrite() {
  const currentPhrase = phrases[phraseIndex];

  if (isDeleting) {
    charIndex--; // Remove characters
  } else {
    charIndex++; // Add characters
  }

  autoWriteElement.textContent = currentPhrase.substring(0, charIndex);

  if (!isDeleting && charIndex === currentPhrase.length) {
    // Pause at the end of the phrase
    isDeleting = true;
    setTimeout(autoWrite, 1000); // Pause before deleting
  } else if (isDeleting && charIndex === 0) {
    // Move to the next phrase
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length; // Loop through phrases
    setTimeout(autoWrite, 500); // Pause before typing the next phrase
  } else {
    setTimeout(autoWrite, isDeleting ? 50 : 100); // Typing and deleting speed
  }
}
autoWrite();


document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Display the SweetAlert success message
    Swal.fire({
      title: "Successful!",
      text: "Thank you for reaching out. We will get back to you soon.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Optionally, reset the form after submission
    contactForm.reset();
  });
});
const toggleButton = document.getElementById("dark-mode-toggle");
const body = document.body;

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if(window.scrollY > 50) {
    header.classList.add("scrolled");
  }else {
    header.classList.remove("scrolled");
  }
});