        // Project filtering
        function filterProjects(category) {
            const cards = document.querySelectorAll('.project-card');
            const buttons = document.querySelectorAll('.filter-btn');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            cards.forEach(card => {
                if (category === 'all' || card.classList.contains(category)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        // About slides
        let currentSlide = 0;
        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
            const dots = document.querySelectorAll('.nav-dot');
            
            slides.forEach((slide, i) => {
                slide.classList.toggle('active', i === index);
            });
            
            dots.forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            currentSlide = index;
        }

        // Auto slide
        setInterval(() => {
            showSlide((currentSlide + 1) % 2);
        }, 5000);

        // CV Download
        function downloadCV() {
            alert('CV download would be implemented here. Please add your CV file and update the link.');
        }

        // See more projects
        function showMoreProjects() {
            alert('This would show more projects or navigate to a projects page.');
        }

        // Smooth scrolling for navigation
        document.addEventListener('DOMContentLoaded', function() {
            // Add smooth scrolling behavior
            document.documentElement.style.scrollBehavior = 'smooth';
            
            // Header scroll effect
            const header = document.getElementById('header');
            const navLinks = document.querySelectorAll('.nav-link');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
                
                // Update active nav link based on scroll position
                updateActiveNavLink();
            });
            
            // Mobile menu toggle
            const mobileMenu = document.getElementById('mobileMenu');
            const navMenu = document.getElementById('navMenu');
            
            mobileMenu.addEventListener('click', () => {
                navMenu.classList.toggle('mobile-active');
            });
            
            // Close mobile menu when clicking on nav links
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    navMenu.classList.remove('mobile-active');
                });
            });
            
            // Update active nav link based on scroll position
            function updateActiveNavLink() {
                const sections = document.querySelectorAll('section');
                const scrollPos = window.scrollY + 100;
                
                sections.forEach(section => {
                    const top = section.offsetTop;
                    const bottom = top + section.offsetHeight;
                    const id = section.getAttribute('id');
                    const navLink = document.querySelector(`.nav-link[href="#${id}"]`);
                    
                    if (scrollPos >= top && scrollPos < bottom) {
                        navLinks.forEach(link => link.classList.remove('active'));
                        if (navLink) navLink.classList.add('active');
                    }
                });
            }
            
            // Pause carousel animation on hover
            const carousel = document.getElementById('carousel');
            carousel.addEventListener('mouseenter', () => {
                carousel.style.animationPlayState = 'paused';
            });
            
            carousel.addEventListener('mouseleave', () => {
                carousel.style.animationPlayState = 'running';
            });

        });