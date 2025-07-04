// Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
    }
});

// FAQ Toggle Functionality
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const isActive = faqItem.classList.contains('active');
        
        // Close all FAQ items
        document.querySelectorAll('.faq-item').forEach(item => {
            item.classList.remove('active');
        });
        
        // Open clicked item if it wasn't active
        if (!isActive) {
            faqItem.classList.add('active');
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    animateOnScroll.observe(card);
});

// Add animation to plan cards
document.querySelectorAll('.plan-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    animateOnScroll.observe(card);
});

// Add animation to provider cards
document.querySelectorAll('.provider-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    animateOnScroll.observe(card);
});

// Contact form submission
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const name = formData.get('name');
        const phone = formData.get('phone');
        const service = formData.get('service');
        const zipcode = formData.get('zipcode');
        
        // Simple form validation
        if (!name || !phone || !service || !zipcode) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Phone validation (basic)
        const phoneRegex = /^[\d\s\-\(\)\+]+$/;
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number');
            return;
        }
        
        // ZIP code validation
        const zipRegex = /^\d{5}(-\d{4})?$/;
        if (!zipRegex.test(zipcode)) {
            alert('Please enter a valid ZIP code');
            return;
        }
        
        // Simulate form submission
        const submitBtn = e.target.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Processing Request...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            alert('Thank you for your interest! A Universal Space Consultant representative will contact you at ' + phone + ' within 24 hours to discuss your connectivity needs and provide a personalized quote.');
            e.target.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Add hover effect to plan cards
document.querySelectorAll('.plan-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });
    
    card.addEventListener('mouseleave', () => {
        if (!card.classList.contains('featured')) {
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.2}px)`;
    }
});

// Add scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 70px;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #1e40af, #3b82f6);
    z-index: 1001;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
});

// Add loading animation to images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', () => {
            img.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
    });
    
    // Add click tracking for analytics (simulation)
    document.querySelectorAll('button, .plan-btn, .cta-button, .service-btn, .provider-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            console.log(`Button clicked: ${e.target.textContent}`);
            // Here you would typically send analytics data
        });
    });
});

// Provider logos animation
const providerLogos = document.querySelector('.providers-logos');
if (providerLogos) {
    let scrollAmount = 0;
    const scrollStep = 1;
    const scrollDelay = 50;
    
    function autoScroll() {
        if (providerLogos.scrollWidth > providerLogos.clientWidth) {
            scrollAmount += scrollStep;
            if (scrollAmount >= providerLogos.scrollWidth - providerLogos.clientWidth) {
                scrollAmount = 0;
            }
            providerLogos.scrollLeft = scrollAmount;
        }
    }
    
    // Auto-scroll providers on larger screens
    if (window.innerWidth > 768) {
        setInterval(autoScroll, scrollDelay);
    }
}

// Service area checker simulation
function checkServiceArea(zipCode) {
    // Simulate service area check with 90% coverage
    const serviceable = Math.random() > 0.1;
    return serviceable;
}

// Add interactive phone number formatting
document.querySelectorAll('input[type="tel"]').forEach(input => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length >= 6) {
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
        } else if (value.length >= 3) {
            value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
        }
        e.target.value = value;
    });
});

// Add ZIP code formatting
document.querySelectorAll('input[name="zipcode"]').forEach(input => {
    input.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 5) {
            value = value.replace(/(\d{5})(\d{0,4})/, '$1-$2');
        }
        e.target.value = value;
    });
});