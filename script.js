
                // Project data for modals
        const projectData = {
            'ecommerce': {
                title: 'E-Commerce Platform',
                description: 'A comprehensive full-stack e-commerce solution featuring user authentication, shopping cart functionality, payment gateway integration, inventory management, and a complete admin dashboard. Built with modern technologies to ensure scalability and performance.',
                images: [
                    { src: 'Homepage Design', alt: 'Homepage' },
                    { src: 'Product Catalog', alt: 'Product Page' },
                    { src: 'Shopping Cart', alt: 'Cart' },
                    { src: 'Admin Dashboard', alt: 'Dashboard' },
                    { src: 'User Profile', alt: 'Profile' },
                    { src: 'Payment Gateway', alt: 'Payment' }
                ],
                techTags: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Stripe API', 'JWT', 'CSS3']
            },
            'mobile-app': {
                title: 'Mobile App Design',
                description: 'Complete UI/UX design for a fitness tracking mobile application featuring workout planning, progress tracking, social features, and personalized recommendations. Designed with user-centered approach and modern mobile design principles.',
                images: [
                    { src: 'App Interface', alt: 'Main Interface' },
                    { src: 'Workout Screen', alt: 'Workout' },
                    { src: 'Progress Tracking', alt: 'Progress' },
                    { src: 'User Profile', alt: 'Profile' },
                    { src: 'Social Feed', alt: 'Social' },
                    { src: 'Settings Panel', alt: 'Settings' }
                ],
                techTags: ['Figma', 'Adobe XD', 'Prototyping', 'User Research', 'Wireframing', 'UI/UX']
            },
            'dashboard': {
                title: 'Dashboard Analytics',
                description: 'Interactive business intelligence dashboard with real-time data visualization, custom reporting, and advanced analytics. Features include drag-and-drop widgets, exportable reports, and responsive design for all devices.',
                images: [
                    { src: 'Main Dashboard', alt: 'Dashboard' },
                    { src: 'Charts & Graphs', alt: 'Analytics' },
                    { src: 'Data Tables', alt: 'Tables' },
                    { src: 'Report Builder', alt: 'Reports' },
                    { src: 'Settings Panel', alt: 'Settings' },
                    { src: 'Mobile View', alt: 'Mobile' }
                ],
                techTags: ['React.js', 'D3.js', 'Chart.js', 'Node.js', 'PostgreSQL', 'WebSocket']
            },
            'brand-identity': {
                title: 'Brand Identity Design',
                description: 'Complete brand identity package for a tech startup including logo design, color palette, typography guidelines, business cards, letterheads, and brand manual. Created cohesive visual identity that reflects innovation and professionalism.',
                images: [
                    { src: 'Logo Design', alt: 'Logo' },
                    { src: 'Color Palette', alt: 'Colors' },
                    { src: 'Typography', alt: 'Fonts' },
                    { src: 'Business Cards', alt: 'Cards' },
                    { src: 'Letterhead', alt: 'Letterhead' },
                    { src: 'Brand Guidelines', alt: 'Guidelines' }
                ],
                techTags: ['Adobe Illustrator', 'Photoshop', 'Brand Strategy', 'Logo Design', 'Print Design']
            },
            'portfolio': {
                title: 'Portfolio Website',
                description: 'Modern, responsive portfolio website featuring smooth animations, interactive elements, and optimized performance. Built with vanilla JavaScript and modern CSS techniques for fast loading and excellent user experience.',
                images: [
                    { src: 'Homepage Hero', alt: 'Homepage' },
                    { src: 'Projects Gallery', alt: 'Projects' },
                    { src: 'About Section', alt: 'About' },
                    { src: 'Contact Form', alt: 'Contact' },
                    { src: 'Mobile Design', alt: 'Mobile' },
                    { src: 'Animations', alt: 'Animations' }
                ],
                techTags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP', 'Responsive Design', 'SEO']
            },
            'api-dev': {
                title: 'API Development',
                description: 'RESTful API for social media platform with comprehensive features including user authentication, post management, real-time messaging, file uploads, and advanced security measures. Built for scalability and performance.',
                images: [
                    { src: 'API Documentation', alt: 'Documentation' },
                    { src: 'Authentication Flow', alt: 'Auth' },
                    { src: 'Database Schema', alt: 'Database' },
                    { src: 'Testing Suite', alt: 'Testing' },
                    { src: 'Performance Metrics', alt: 'Performance' },
                    { src: 'Security Features', alt: 'Security' }
                ],
                techTags: ['Node.js', 'Express', 'MongoDB', 'JWT', 'Socket.io', 'Jest', 'Docker']
            }
        };

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

        // Modal functions
        function openModal(projectId) {
            const modal = document.getElementById('projectModal');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const imageGallery = document.getElementById('imageGallery');
            const modalTechTags = document.getElementById('modalTechTags');
            
            const project = projectData[projectId];
            
            if (project) {
                modalTitle.textContent = project.title;
                modalDescription.textContent = project.description;
                
                // Clear existing content
                imageGallery.innerHTML = '';
                modalTechTags.innerHTML = '';
                
                // Populate images
                project.images.forEach((img, index) => {
                    const imageDiv = document.createElement('div');
                    imageDiv.className = 'gallery-image';
                    imageDiv.innerHTML = `<div style="color: #666; font-size: 0.9rem; transition: all 0.3s ease;">${img.src}</div>`;
                    
                    // Enhanced hover effects
                    imageDiv.addEventListener('mouseenter', () => {
                        imageDiv.style.background = '#e0e0e0';
                        const textDiv = imageDiv.querySelector('div');
                        textDiv.style.color = '#333';
                        textDiv.style.fontWeight = '600';
                    });
                    
                    imageDiv.addEventListener('mouseleave', () => {
                        imageDiv.style.background = '#f0f0f0';
                        const textDiv = imageDiv.querySelector('div');
                        textDiv.style.color = '#666';
                        textDiv.style.fontWeight = 'normal';
                    });
                    
                    imageGallery.appendChild(imageDiv);
                });
                
                // Populate tech tags
                project.techTags.forEach(tag => {
                    const tagDiv = document.createElement('div');
                    tagDiv.className = 'tech-tag';
                    tagDiv.textContent = tag;
                    modalTechTags.appendChild(tagDiv);
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }

        function closeModal() {
            const modal = document.getElementById('projectModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside
        window.addEventListener('click', function(event) {
            const modal = document.getElementById('projectModal');
            if (event.target === modal) {
                closeModal();
            }
        });

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

        // Contact form submission
        function submitForm(event) {
            event.preventDefault();
            
            const formData = new FormData(event.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Create mailto link
            const mailtoLink = `mailto:florenz525lustre@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
            )}`;
            
            // Open email client
            window.location.href = mailtoLink;
            
            // Reset form
            event.target.reset();
            
            // Show success message
            alert('Email client opened! Please send the email to complete your message.');
        }

        // CV Download
        function downloadCV() {
            alert('CV download would be implemented here. Please add your CV file and update the link.');
        }

        // See more projects
        function showMoreProjects() {
            alert('This would show more projects or navigate to a projects page.');
        }

        // Initialize page
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

            // Close modal with escape key
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeModal();
                }
            });
        });
