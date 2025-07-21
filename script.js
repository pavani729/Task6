// Automatically highlight the current nav link (optional, dynamic)
const links = document.querySelectorAll('nav a');
const currentUrl = window.location.pathname;

links.forEach(link => {
  if (link.href.includes(`${currentUrl.split('/').pop()}`)) {
    link.classList.add('active');
  }
});



  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Basic Validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const status = document.getElementById("form-status");

    if (!name || !email || !message) {
      status.textContent = "Please fill out all fields.";
      status.style.color = "red";
      return;
    }

    // Simulate sending message
    status.textContent = "Message sent successfully!";
    status.style.color = "green";

    // Reset form
    document.getElementById("contactForm").reset();
  });




