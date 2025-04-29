document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    burger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
            }
        });
    });
    
    // Auction countdown timer (example)
    function updateCountdown() {
        const countdownElements = document.querySelectorAll('.countdown');
        
        countdownElements.forEach(element => {
            const endTime = element.getAttribute('data-end');
            const endDate = new Date(endTime).getTime();
            const now = new Date().getTime();
            const distance = endDate - now;
            
            if (distance < 0) {
                element.innerHTML = "Auction ended";
                return;
            }
            
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            element.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        });
    }
    
    // Initialize countdown if elements exist
    if (document.querySelector('.countdown')) {
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
    
    // Simulate live bid updates (for demo purposes)
    function simulateBidUpdates() {
        const bidElements = document.querySelectorAll('.bid-amount');
        
        bidElements.forEach(element => {
            // Only update if the auction hasn't ended
            if (!element.closest('.auction-card').querySelector('.countdown') || 
                !element.closest('.auction-card').querySelector('.countdown').innerHTML.includes("ended")) {
                const currentBid = parseFloat(element.textContent.replace(/[^0-9.]/g, ''));
                const randomIncrement = Math.floor(Math.random() * 100) + 50;
                const newBid = currentBid + randomIncrement;
                element.textContent = `R ${newBid.toLocaleString()}`;
                
                // Add animation
                element.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    element.style.transform = 'scale(1)';
                }, 300);
            }
        });
    }
    
    // Only run bid simulation if we're on a page with auctions
    if (document.querySelector('.auction-card')) {
        setInterval(simulateBidUpdates, 10000);
    }
    
    // Form submission handling (example)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Form submitted! In a real implementation, this would send data to your server.');
        });
    });
});