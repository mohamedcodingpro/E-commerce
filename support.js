document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navMenu = document.getElementById('nav-menu');
    
    burger.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
    
    // Search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchInput = searchBar.querySelector('input');
    const searchButton = searchBar.querySelector('button');
    
    searchButton.addEventListener('click', function(e) {
        e.preventDefault();
        const query = searchInput.value.trim();
        
        if (query) {
            // In a real app, this would search your knowledge base
            console.log(`Searching for: ${query}`);
            alert(`Search functionality would show results for "${query}"`);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            searchButton.click();
        }
    });
    
    // Contact form validation
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.style.borderColor = 'var(--danger-color)';
                    isValid = false;
                } else {
                    field.style.borderColor = '#ddd';
                }
            });
            
            const agreeTerms = document.getElementById('contact-terms');
            if (!agreeTerms.checked) {
                agreeTerms.nextElementSibling.style.color = 'var(--danger-color)';
                isValid = false;
            } else {
                agreeTerms.nextElementSibling.style.color = '';
            }
            
            if (isValid) {
                // In a real app, this would submit to your backend
                console.log('Contact form submitted successfully');
                alert('Thank you for your message! Our team will respond within 24 hours.');
                this.reset();
            } else {
                alert('Please fill in all required fields');
            }
        });
    }
    
    // Reset form field styles on input
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form select, .contact-form textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
            
            if (this.id === 'contact-terms') {
                this.nextElementSibling.style.color = '';
            }
        });
    });
    
    // Live chat button
    const startChatBtn = document.querySelector('.start-chat');
    if (startChatBtn) {
        startChatBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Live chat functionality would open a chat window with our support team');
        });
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});