document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.animated-section');
    const options = {
        threshold: 0.1
    };

    const revealOnScroll = new IntersectionObserver((entries, revealOnScroll) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('visible');
            revealOnScroll.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        revealOnScroll.observe(section);
    });
});

// Create cursor element
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Update cursor position on mouse move
document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
});

