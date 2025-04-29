document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navMenu = document.getElementById('nav-menu');
    
    burger.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !isExpanded);
        navMenu.classList.toggle('active');
    });
    
    // FAQ accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            
            if (this.classList.contains('active')) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = '0';
            }
            
            // Close other open FAQs
            faqQuestions.forEach(q => {
                if (q !== this && q.classList.contains('active')) {
                    q.classList.remove('active');
                    q.nextElementSibling.style.maxHeight = '0';
                }
            });
        });
    });
    
    // Supplier form validation
    const supplierForm = document.querySelector('.supplier-application');
    
    if (supplierForm) {
        supplierForm.addEventListener('submit', function(e) {
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
            
            const agreeTerms = document.getElementById('agree-terms');
            if (!agreeTerms.checked) {
                agreeTerms.nextElementSibling.style.color = 'var(--danger-color)';
                isValid = false;
            } else {
                agreeTerms.nextElementSibling.style.color = '';
            }
            
            if (isValid) {
                // In a real app, this would submit to your backend
                console.log('Form submitted successfully');
                alert('Thank you for your application! Our team will contact you within 24 hours.');
                this.reset();
                
                // Scroll to top
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            } else {
                alert('Please fill in all required fields');
            }
        });
    }
    
    // Reset form field styles on input
    const formInputs = document.querySelectorAll('.supplier-application input, .supplier-application select, .supplier-application textarea');
    formInputs.forEach(input => {
        input.addEventListener('input', function() {
            this.style.borderColor = '#ddd';
            
            if (this.id === 'agree-terms') {
                this.nextElementSibling.style.color = '';
            }
        });
    });
    
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