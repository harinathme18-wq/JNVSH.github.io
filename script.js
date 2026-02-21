// Smooth scroll navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-menu a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Get form values
        const name = this.querySelector('input[type="text"]:first-of-type').value;
        const email = this.querySelector('input[type="email"]').value;
        const subject = this.querySelector('input[type="text"]:last-of-type').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (name && email && message) {
            // In a real application, you would send this data to a server
            alert(`Thank you ${name}! Your message has been received. We'll contact you at ${email} soon.`);
            this.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Smooth page load animation
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// Add scroll animation to elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service cards and portfolio items
document.querySelectorAll('.service-card, .portfolio-item, .about-content').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// CTA Button click handler
document.querySelector('.cta-button')?.addEventListener('click', () => {
    document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
});
