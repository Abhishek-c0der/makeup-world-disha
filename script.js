 // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });

                // Update active nav
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            });
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            document.querySelector('header').style.background =
                window.scrollY > 100 ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)';
        });

        // Animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

        // Contact Form (EmailJS - Replace with your credentials)
        emailjs.init("YOUR_PUBLIC_KEY"); // Get from emailjs.com

        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();

            const formData = new FormData(this);
            const message = document.getElementById('message');
            const btn = this.querySelector('button[type="submit"]');

            btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Booking...';
            btn.disabled = true;

            // Simulate booking (replace with EmailJS)
            setTimeout(() => {
                message.className = 'message success';
                message.textContent = '✅ Appointment booked successfully! We\'ll confirm via WhatsApp within 1 hour.';
                message.style.display = 'block';

                this.reset();
                btn.innerHTML = '<i class="fas fa-calendar-check"></i> Book Appointment';
                btn.disabled = false;

                // Scroll to message
                message.scrollIntoView({ behavior: 'smooth' });
            }, 1500);
        });

        // Auto-format phone
        document.querySelector('input[name="phone"]').addEventListener('input', function () {
            let val = this.value.replace(/\D/g, '').slice(0, 10);
            this.value = val;
        });