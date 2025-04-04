const navLinks = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const pageId = link.dataset.page;

        pages.forEach(page => {
            page.classList.remove('active');
        });

        document.getElementById(pageId).classList.add('active');
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple validation (you can add more robust validation)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate pop effect before showing success message
    const button = document.querySelector('button');
    button.style.transform = 'scale(1.1)';  // Trigger pop effect

    // After the pop effect, show a confirmation alert and reset the form
    setTimeout(() => {
        alert('Form submitted successfully!');
        document.getElementById('contactForm').reset();
        button.style.transform = 'scale(1)';  // Reset the button size after the pop effect
    }, 200);  // 200ms to match the pop effect timing
});