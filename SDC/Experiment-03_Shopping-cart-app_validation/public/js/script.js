// ===== ENHANCED SHOPPING CART APP - EXPERIMENT 03 =====
// Advanced animations, form validation, and interactive features

(function() {
    'use strict';

    // ===== GLOBAL VARIABLES =====
    let cartItems = [];
    let currentToast = null;

    // ===== INITIALIZATION =====
    document.addEventListener('DOMContentLoaded', function() {
        console.log('🚀 404 Collective - Enhanced Shopping Cart App Initialized');
        
        initPageLoad();
        initNavbarScroll();
        initFormValidation();
        initAnimations();
        initToastSystem();
        initProductInteractions();
        initCartInteractions();
        initScrollAnimations();
        updateNavbarActive();
        
        // Add page-specific initializations
        const currentPage = getCurrentPage();
        switch(currentPage) {
            case 'payment':
                initPaymentValidation();
                break;
            case 'cart':
                initCartCalculations();
                break;
            case 'order-history':
                initOrderHistory();
                break;
        }
    });

    // ===== PAGE LOAD ANIMATIONS =====
    function initPageLoad() {
        document.body.classList.add('page-load');
        
        // Add staggered animations to main content
        const mainContent = document.querySelector('main, .container');
        if (mainContent) {
            mainContent.classList.add('content-load');
        }
        
        // Animate hero elements
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroButtons = document.querySelectorAll('.hero-section .btn');
        
        if (heroTitle) {
            heroTitle.style.animationDelay = '0.2s';
        }
        if (heroSubtitle) {
            heroSubtitle.style.animationDelay = '0.4s';
        }
        heroButtons.forEach((btn, index) => {
            btn.style.animationDelay = `${0.6 + index * 0.1}s`;
        });
    }

    // ===== NAVBAR SCROLL EFFECTS =====
    function initNavbarScroll() {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        let lastScrollTop = 0;
        
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // Add scrolled class for background change
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            // Parallax effect for navbar
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.style.transform = 'translateY(-100%)';
            } else {
                navbar.style.transform = 'translateY(0)';
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // ===== ENHANCED FORM VALIDATION =====
    function initFormValidation() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            const inputs = form.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                // Real-time validation
                input.addEventListener('blur', () => validateField(input));
                input.addEventListener('input', () => {
                    if (input.classList.contains('is-invalid')) {
                        clearFieldError(input);
                    }
                });
                
                // Focus animations
                input.addEventListener('focus', () => {
                    input.parentElement.classList.add('focused');
                });
                
                input.addEventListener('blur', () => {
                    input.parentElement.classList.remove('focused');
                });
            });
            
            // Form submission
            form.addEventListener('submit', handleFormSubmit);
        });
    }

    function validateField(field) {
        const value = field.value.trim();
        const type = field.type;
        const name = field.name || field.id;
        
        // Clear previous errors
        clearFieldError(field);
        
        // Required field validation
        if (field.hasAttribute('required') && !value) {
            showFieldError(field, `${getFieldLabel(field)} is required`);
            return false;
        }
        
        // Email validation
        if (type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                showFieldError(field, 'Please enter a valid email address');
                return false;
            }
        }
        
        // Password validation
        if (type === 'password' && value) {
            if (value.length < 6) {
                showFieldError(field, 'Password must be at least 6 characters');
                return false;
            }
        }
        
        // Phone validation
        if (name.includes('phone') && value) {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                showFieldError(field, 'Please enter a valid phone number');
                return false;
            }
        }
        
        return true;
    }

    function showFieldError(field, message) {
        field.classList.add('is-invalid');
        
        // Create or update error message
        let errorDiv = field.parentElement.querySelector('.invalid-feedback');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'invalid-feedback';
            field.parentElement.appendChild(errorDiv);
        }
        
        errorDiv.textContent = message;
        errorDiv.style.animation = 'fadeInUp 0.3s ease-out';
    }

    function clearFieldError(field) {
        field.classList.remove('is-invalid');
        const errorDiv = field.parentElement.querySelector('.invalid-feedback');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    function getFieldLabel(field) {
        const label = field.parentElement.querySelector('label');
        return label ? label.textContent.replace('*', '').trim() : 'This field';
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const inputs = form.querySelectorAll('input, textarea, select');
        let isValid = true;
        
        // Validate all fields
        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (isValid) {
            // Show success animation
            form.style.animation = 'scaleIn 0.3s ease-out';
            
            // Show success toast
            showToast('Form submitted successfully!', 'success');
            
            // Reset form after delay
            setTimeout(() => {
                form.reset();
                form.style.animation = '';
            }, 1000);
        } else {
            showToast('Please fix the errors above', 'error');
        }
    }

    // ===== ENHANCED ANIMATIONS =====
    function initAnimations() {
        // Animate cards on scroll
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, index) => {
            card.style.animationDelay = `${index * 0.1}s`;
            card.classList.add('animate-fade-in');
        });
        
        // Animate buttons
        const buttons = document.querySelectorAll('.btn');
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-3px) scale(1.05)';
            });
            
            btn.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
        
        // Animate product images
        const productImages = document.querySelectorAll('.card-img-top');
        productImages.forEach(img => {
            img.addEventListener('load', function() {
                this.style.animation = 'scaleIn 0.6s ease-out';
            });
        });
    }

    // ===== ENHANCED TOAST SYSTEM =====
    function initToastSystem() {
        // Create toast container if it doesn't exist
        if (!document.getElementById('toast-container')) {
            const toastContainer = document.createElement('div');
            toastContainer.id = 'toast-container';
            toastContainer.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                z-index: 9999;
                pointer-events: none;
            `;
            document.body.appendChild(toastContainer);
        }
    }

    function showToast(message, type = 'info', duration = 3000) {
        // Remove existing toast
        if (currentToast) {
            currentToast.remove();
        }
        
        const toastContainer = document.getElementById('toast-container');
        const toast = document.createElement('div');
        
        const typeConfig = {
            success: { bg: 'linear-gradient(45deg, #28a745, #20c997)', icon: 'bi-check-circle' },
            error: { bg: 'linear-gradient(45deg, #dc3545, #c82333)', icon: 'bi-x-circle' },
            warning: { bg: 'linear-gradient(45deg, #ffc107, #fd7e14)', icon: 'bi-exclamation-triangle' },
            info: { bg: 'linear-gradient(45deg, var(--primary-color), var(--primary-glow))', icon: 'bi-info-circle' }
        };
        
        const config = typeConfig[type] || typeConfig.info;
        
        toast.innerHTML = `
            <div style="
                background: ${config.bg};
                color: white;
                padding: 1rem 1.5rem;
                border-radius: 0.5rem;
                margin-bottom: 0.5rem;
                box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                display: flex;
                align-items: center;
                gap: 0.75rem;
                min-width: 300px;
                pointer-events: auto;
                animation: fadeInRight 0.3s ease-out;
            ">
                <i class="bi ${config.icon}" style="font-size: 1.2rem;"></i>
                <span>${message}</span>
                <button onclick="this.parentElement.remove()" style="
                    background: none;
                    border: none;
                    color: white;
                    margin-left: auto;
                    cursor: pointer;
                    font-size: 1.2rem;
                ">&times;</button>
            </div>
        `;
        
        toastContainer.appendChild(toast);
        currentToast = toast;
        
        // Auto remove after duration
        setTimeout(() => {
            if (toast.parentElement) {
                toast.style.animation = 'fadeInRight 0.3s ease-out reverse';
                setTimeout(() => toast.remove(), 300);
            }
        }, duration);
    }

    // ===== ENHANCED PRODUCT INTERACTIONS =====
    function initProductInteractions() {
        const productCards = document.querySelectorAll('.card');
        
        productCards.forEach(card => {
            // Hover effects
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
                this.style.boxShadow = '0 20px 40px rgba(255, 0, 85, 0.3)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '';
            });
            
            // Add to cart buttons
            const addToCartBtn = card.querySelector('.btn-primary, .btn-danger');
            if (addToCartBtn) {
                addToCartBtn.addEventListener('click', function(e) {
                    e.preventDefault();
                    
                    // Get product info
                    const productName = card.querySelector('.card-title').textContent;
                    const productPrice = card.querySelector('.card-text')?.textContent || '$299.99';
                    
                    // Add to cart animation
                    this.innerHTML = '<i class="bi bi-check"></i> Added!';
                    this.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
                    
                    // Show toast
                    showToast(`${productName} added to cart!`, 'success');
                    
                    // Reset button after delay
                    setTimeout(() => {
                        this.innerHTML = '<i class="bi bi-cart-plus me-2"></i>Add to Cart';
                        this.style.background = '';
                    }, 2000);
                });
            }
        });
    }

    // ===== ENHANCED CART INTERACTIONS =====
    function initCartInteractions() {
        const cartPage = document.querySelector('.table-dark');
        if (!cartPage) return;
        
        // Quantity change handlers
        const quantityInputs = document.querySelectorAll('[data-qty]');
        quantityInputs.forEach(input => {
            input.addEventListener('change', updateCartItem);
        });
        
        // Remove item handlers
        const removeButtons = document.querySelectorAll('[data-remove]');
        removeButtons.forEach(btn => {
            btn.addEventListener('click', removeCartItem);
        });
    }

    function updateCartItem(e) {
        const input = e.target;
        const row = input.closest('tr');
        const price = parseFloat(row.dataset.price);
        const quantity = parseInt(input.value);
        const totalCell = row.querySelector('[data-item-total]');
        
        if (totalCell) {
            const total = (price * quantity).toFixed(2);
            totalCell.textContent = `$${total}`;
            totalCell.style.animation = 'scaleIn 0.3s ease-out';
        }
        
        updateCartSummary();
        showToast('Cart updated!', 'info');
    }

    function removeCartItem(e) {
        const btn = e.target;
        const row = btn.closest('tr');
        const productName = row.dataset.product;
        
        // Fade out animation
        row.style.animation = 'fadeInLeft 0.3s ease-out reverse';
        
        setTimeout(() => {
            row.remove();
            updateCartSummary();
            showToast(`${productName} removed from cart`, 'warning');
        }, 300);
    }

    function updateCartSummary() {
        // Recalculate totals
        const items = document.querySelectorAll('[data-item-total]');
        let subtotal = 0;
        
        items.forEach(item => {
            const price = parseFloat(item.textContent.replace('$', ''));
            subtotal += price;
        });
        
        const shipping = 29.99;
        const tax = subtotal * 0.08;
        const total = subtotal + shipping + tax;
        
        // Update summary display
        const summaryRows = document.querySelectorAll('.summary-row');
        if (summaryRows.length >= 4) {
            summaryRows[0].querySelector('span:last-child').textContent = `$${subtotal.toFixed(2)}`;
            summaryRows[2].querySelector('span:last-child').textContent = `$${tax.toFixed(2)}`;
            summaryRows[3].querySelector('span:last-child').textContent = `$${total.toFixed(2)}`;
        }
    }

    // ===== SCROLL ANIMATIONS =====
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        }, observerOptions);
        
        // Observe elements with scroll-animate class
        const scrollElements = document.querySelectorAll('.scroll-animate');
        scrollElements.forEach(el => observer.observe(el));
        
        // Add scroll-animate class to cards and sections
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.classList.add('scroll-animate');
            observer.observe(card);
        });
    }

    // ===== PAYMENT VALIDATION =====
    function initPaymentValidation() {
        const cardNumber = document.getElementById('cardNumber');
        const expiry = document.getElementById('expiry');
        const cvv = document.getElementById('cvv');
        
        if (cardNumber) {
            cardNumber.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\s/g, '');
                value = value.replace(/\D/g, '');
                value = value.replace(/(\d{4})/g, '$1 ').trim();
                e.target.value = value;
                
                if (value.length >= 19) {
                    if (validateCardNumber(value)) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    } else {
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                    }
                }
            });
        }
        
        if (expiry) {
            expiry.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length >= 2) {
                    value = value.substring(0, 2) + '/' + value.substring(2, 4);
                }
                e.target.value = value;
                
                if (value.length === 5) {
                    if (validateExpiry(value)) {
                        this.classList.remove('is-invalid');
                        this.classList.add('is-valid');
                    } else {
                        this.classList.remove('is-valid');
                        this.classList.add('is-invalid');
                    }
                }
            });
        }
        
        if (cvv) {
            cvv.addEventListener('input', function(e) {
                let value = e.target.value.replace(/\D/g, '');
                e.target.value = value;
                
                if (value.length >= 3) {
                    this.classList.remove('is-invalid');
                    this.classList.add('is-valid');
                }
            });
        }
    }

    function validateCardNumber(num) {
        // Luhn algorithm
        let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
        let lastDigit = arr.splice(0, 1)[0];
        let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
        sum += lastDigit;
        return sum % 10 === 0;
    }

    function validateExpiry(val) {
        const [month, year] = val.split('/');
        const now = new Date();
        const currentYear = now.getFullYear() % 100;
        const currentMonth = now.getMonth() + 1;
        
        const expMonth = parseInt(month);
        const expYear = parseInt(year);
        
        if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
            return false;
        }
        
        return expMonth >= 1 && expMonth <= 12;
    }

    // ===== ORDER HISTORY =====
    function initOrderHistory() {
        const tableRows = document.querySelectorAll('.table-dark tbody tr');
        tableRows.forEach((row, index) => {
            row.style.animationDelay = `${index * 0.1}s`;
            row.classList.add('animate-fade-in');
        });
        
        // Add hover effects to action buttons
        const actionButtons = document.querySelectorAll('.btn-group .btn');
        actionButtons.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const action = this.textContent.trim();
                showToast(`${action} action triggered!`, 'info');
            });
        });
    }

    // ===== CART CALCULATIONS =====
    function initCartCalculations() {
        updateCartSummary();
    }

    // ===== NAVBAR ACTIVE STATE =====
    function updateNavbarActive() {
        const currentPage = getCurrentPage();
        const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href && href.includes(currentPage)) {
                link.classList.add('active');
            }
        });
    }

    function getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop().replace('.html', '');
        return filename || 'index';
    }

    // ===== UTILITY FUNCTIONS =====
    function showSuccessModal() {
        const modal = document.createElement('div');
        modal.className = 'modal fade show';
        modal.style.display = 'block';
        modal.innerHTML = `
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content bg-dark text-light border border-primary">
                    <div class="modal-header border-bottom border-primary">
                        <h5 class="modal-title">
                            <i class="bi bi-check-circle text-success me-2"></i>
                            Success!
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body text-center">
                        <p class="mb-0">Your action was completed successfully!</p>
                    </div>
                    <div class="modal-footer border-top border-primary">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        
        // Auto remove after 3 seconds
        setTimeout(() => {
            modal.remove();
        }, 3000);
    }

    // ===== EXPOSE FUNCTIONS TO GLOBAL SCOPE =====
    window.showToast = showToast;
    window.showSuccessModal = showSuccessModal;

})(); 