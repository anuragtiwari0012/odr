document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    const links = document.querySelectorAll('nav ul li a[href^="#"]');
    for (const link of links) {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    }

    // Form validation
    const form = document.querySelector(".contact-form");
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
        } else {
            alert("Thank you for your message!");
            form.reset();
        }
    });
});
