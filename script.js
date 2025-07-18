// Product data organized by brands
const productsByBrand = {
    nivea: [
        {
            id: 1,
            name: "ALOE & HYDRATION BODY LOTION",
            description: "Gently hydrates and soothes dry skin with aloe vera. Fast-absorbing and perfect for daily use.",
            price: 12.90,
            image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/e/8/6/1b882381fb354b098df8a38de5706b1f-web_1010x1180_transparent_png.webp?mw=259&hash=0795A25D8177160908884114C6A473D7",
            brand: "nivea"
        },
        {
            id: 2,
            name: "SHEA SMOOTH BODY MILK",
            description: "Deeply moisturizes and softens skin with shea butter. Lightweight, smooth, and perfect for daily nourishment.",
            price: 8.99,
            image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/a/5/7/212435-web_1010x1180_transparent_png.webp?mw=259&hash=F0762EF9106C702F13AFF63751C266DC",
            brand: "nivea"
        },
        {
            id: 3,
            name: "NIVEA PERFECT & RADIANT EVEN TONE DAY CREAM SPF15",
            description: "Evens skin tone, hydrates, and protects against sun damage with SPF15 for a natural, radiant glow.",
            price: 15.99,
            image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/b/9/1/858326a77f224d6fbfc26631ac27992b-screen.webp?mw=259&hash=905573E9565F19B9169F164299D7DA97",
            brand: "nivea"
        },
        {
           id: 4,
            name: "ANTI DARK MARKS SERUM",
            description: "Targets dark spots and evens skin tone for a clearer, brighter complexion. Fast-absorbing and gentle on skin.",
            price: 15.99,
            image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/5/1/0/7b18a679d3c743efa860b511f2d15cbe-web_1010x1180_transparent_png.webp?mw=259&hash=F0625B9ED2A15CA6BDDBD3F57C129C4E",
            brand: "nivea" 
        },
        {
           id: 5,
            name: "NIVEA EVENTONE LIGHT MOISTURIZER",
            description: "Lightweight moisturizer that hydrates and brightens skin, reducing the appearance of dark spots.",
            price: 15.99,
            image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/0/f/0/8756637050c84c5fbaa7fb003aa082e9-web_1010x1180_transparent_png.webp?mw=259&hash=160EF0CCB05D4E6959B853459FFAC623",
            brand: "nivea" 
        },
        {
           id: 6,
            name: "NIVEA PREFECT & RADIANT 3 IN 1 CLEANSER",
            description: "Gentle cleanser that removes impurities, brightens skin, and prepares it for further skincare steps.",
            price: 15.99,
            image: "https://img.nivea.com/-/media/miscellaneous/media-center-items/b/2/f/62b2a8c34bbe4717a1c199c54f701a5d-screen.webp?mw=259&hash=F6510F22EA21575B12ABE5D30CA2F739",
            brand: "nivea" 
        }
    ],
    cerave: [
        {
            id: 7,
            name: "CeraVe SMOOTHING CLEANSER",
            description: "Exfoliating cleanser with salicylic acid to smooth rough skin and prevent breakouts. Non-irritating formula.",
            price: 16.99,
            image: "https://www.cerave.co.uk/-/media/project/loreal/brand-sites/cerave/emea/uk/products/sa-smoothing-cleanser-236ml/sa-smoothing-cleanser-473ml-2-lg.jpg?rev=-1?w=130&hash=46E36ADEE5D13444F7BFD197CAE67A4A",
            brand: "cerave"
        },
        {
            id: 8,
            name: "CeraVe FACIAL MOISTURIZING LOTION",
            description: "Lightweight moisturizer with hyaluronic acid and niacinamide to hydrate and restore the skin barrier.",
            price: 18.99,
            image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/2025/resized-packshots/700x875/pm-50-facial-moisturizing-lotion-clp-resize-700x785-v1.jpg?rev=c2cd70fac8fa41ea99bb3e84fb0113bb&w=500&hash=01C9FA43AF135D3BA84B14200C7F6E25",
            brand: "cerave"
        },
        {
            id: 9,
            name: "CeraVe SKIN RENEWING NIGHT CREAM",
            description: "Intensive night cream with peptides and niacinamide to restore skin overnight and improve texture.",
            price: 24.99,
            image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/skincare/2025/packshots/700x875/night-cream-resize-700x875-v1.jpg?rev=c048d9fc3a9b411c8b0487a4db4884a6",
            brand: "cerave"
        },
        {
            id: 10,
            name: "CeraVe CREAM MOISTURIZING",
            description: "Intensive moisturizing cream with ceramides and hyaluronic acid for dry to very dry skin. Non-greasy and fast-absorbing.",
            price: 24.99,
            image: "https://www.cerave.com/-/media/project/loreal/brand-sites/cerave/americas/us/products-v4/moisturizing-cream/cerave_moisturizing_cream_16oz_jar_front-700x875-v4.jpg?rev=db6e3c22250e4928bc749dd2c207de5b&w=500&hash=D85F888749CB3F9C74FBBBF73EFA6D40",
            brand: "cerave"
        },
        {
            id: 11,
            name: "CeraVe MOISTURIZING LOTION",
            description: "Lightweight lotion with essential ceramides and hyaluronic acid for all-day hydration. Suitable for face and body.",
            price: 24.99,
            image: "https://www.cerave.co.uk/-/media/project/loreal/brand-sites/cerave/emea/uk/products/moisturising-lotion/moisturising-lotion-236ml/moisturising-lotion-236ml-1-lg.jpg?rev=2e319b57342041fc887e84b06e0053bb?w=130&hash=09391AFBC686B65B0483FAB17255D899",
            brand: "cerave"
        },
        {
            id: 12,
            name: "CeraVe FACE MOISTURISER SPF 30 ",
            description: "Daily moisturizer with SPF 30 to protect against UV damage while hydrating and restoring the skin barrier.",
            price: 24.99,
            image: "http://t0.gstatic.com/images?q=tbn:ANd9GcQcmWlljYNr30qtCy_TAtIAAJnKtrIsoZi_RyQa5cVXmK2XOT_Z",
            brand: "cerave"
        }
    ],
    simple: [
        {
            id: 13,
            name: "SIMPLE SMOOTHING FACIAL SCRUB",
            description: "Gently exfoliates to remove dead skin cells, leaving skin smooth, clean, and refreshed — with no harsh chemicals.",
            price: 6.99,
            image: "https://assets.unileversolutions.com/v1/1880161.png?im=Resize,width=1200,height=12000",
            brand: "simple"
        },
        {
            id: 14,
            name: "SIMPLE REPLENISHING MOISTURIZER",
            description: "Deeply hydrates and nourishes skin for 12 hours. Kind to sensitive skin with no artificial perfumes or colors.",
            price: 9.99,
            image: "https://assets.unileversolutions.com/v1/55673823.png?im=Resize,width=351,height=351",
            brand: "simple"
        },
        {
            id: 15,
            name: "SIMPLE FACIAL TONER",
            description: "Refreshes and tones skin while helping to balance pH. Alcohol-free and gentle on sensitive skin.",
            price: 9.99,
            image: "https://assets.unileversolutions.com/v1/76574235.png?im=Resize,width=351,height=351",
            brand: "simple"
        },
        {
            id: 16,
            name: "SIMPLE FACIAL WASH",
            description: "Cleanses thoroughly without drying. Perfect for removing dirt and oil while keeping skin soft and smooth.",
            price: 9.99,
            image: "https://assets.unileversolutions.com/v1/56499587.png?im=Resize,width=351,height=351",
            brand: "simple"
        },
    ],
    skinaqua: [
        {
            id: 17,
            name: "Skin Aqua UV Super Moisture Milk SPF50+",
            description: "Lightweight, hydrating milk with hyaluronic acid for daily sun protection.",
            price: 14.99,
            image: "https://rhemabeautyshop.com/wp-content/uploads/2023/04/AQUA-140G.webp",
            brand: "skinaqua"
        },
        {
            id: 18,
            name: "Skin Aqua UV Super Moisture Gel SPF50+",
            description: "Water-based UV gel with amino acids that provides invisible protection without white cast.",
            price: 16.99,
            image: "https://rhemabeautyshop.com/wp-content/uploads/2023/04/skin-aqua-uv-super-moisture-gel-spf50.jpg",
            brand: "skinaqua"
        },
        {
            id: 19,
            name: "Skin Aqua Tone Up UV Essence SPF50+",
            description: "Color-correcting sunscreen essence that brightens skin tone while providing UV protection.",
            price: 18.99,
            image: "https://cdn.shopify.com/s/files/1/0695/5712/5440/files/Rohto-Skin-Aqua-Sunscreen-Super-Moisture-UV-Essence-SPF50_-80g-2-2024-03-18T07_55_10.565Z.jpg?v=1743435209",
            brand: "skinaqua"
        },
        {
            id: 20,
            name: "Skin Aqua Super Moisture UV Essence ",
            description: "Sweat and water-resistant sunscreen essence perfect for active lifestyles and sports.",
            price: 17.99,
            image: "https://beautybellbd.com/wp-content/uploads/2024/01/63cec525.jpg",
            brand: "skinaqua"
        }
    ]
};


// Flatten all products for easy access
const allProducts = Object.values(productsByBrand).flat();

// Shopping cart
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// User authentication
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
let users = JSON.parse(localStorage.getItem('users')) || [];

// Carousel state
let currentSlide = 0;
const totalSlides = 5;

// DOM elements
const cartBtn = document.querySelector('.cart-btn');
const cartCount = document.querySelector('.cart-count');
const cartModal = document.getElementById('cart-modal');
const productModal = document.getElementById('product-modal');
const profileModal = document.getElementById('profile-modal');
const profileBtn = document.querySelector('.profile-btn');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    renderProductsByBrand();
    updateCartUI();
    updateProfileUI();
    setupEventListeners();
    initializeCarousel();
});

// Render products by brand
function renderProductsByBrand() {
    Object.keys(productsByBrand).forEach(brand => {
        const container = document.getElementById(`${brand}-products`);
        if (container) {
            container.innerHTML = productsByBrand[brand].map(product => `
                <div class="product-card" data-product-id="${product.id}">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                    <div class="product-info">
                        <h3 class="product-name">${product.name}</h3>
                        <p class="product-description">${product.description}</p>
                        <div class="product-price">$${product.price.toFixed(2)}</div>
                        <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `).join('');
        }
    });
}

// Initialize carousel
function initializeCarousel() {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // Auto-play carousel
    setInterval(() => {
        nextSlide();
    }, 5000);

    // Navigation buttons
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Indicator clicks
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateCarousel();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateCarousel();
    }

    function goToSlide(index) {
        currentSlide = index;
        updateCarousel();
    }

    function updateCarousel() {
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentSlide);
        });
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentSlide);
        });
    }
}


// Setup event listeners
function setupEventListeners() {
    // Product card clicks (open product modal)
    document.addEventListener('click', function(e) {
        const productCard = e.target.closest('.product-card');
        if (productCard && !e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(productCard.dataset.productId);
            openProductModal(productId);
        }
    });

    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        }
    });

    // Cart button
    cartBtn.addEventListener('click', openCartModal);

    // Profile button
    profileBtn.addEventListener('click', openProfileModal);

    // Modal close buttons
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', closeModals);
    });

    // Modal background clicks
    [cartModal, productModal, profileModal].forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModals();
            }
        });
    });

    // Clear cart button
    document.getElementById('clear-cart').addEventListener('click', clearCart);

    // Checkout button
    document.getElementById('checkout').addEventListener('click', checkout);

    // Product modal quantity controls
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const action = this.dataset.action;
            const quantityInput = document.getElementById('quantity');
            let quantity = parseInt(quantityInput.value);
            
            if (action === 'increase' && quantity < 10) {
                quantity++;
            } else if (action === 'decrease' && quantity > 1) {
                quantity--;
            }
            
            quantityInput.value = quantity;
        });
    });

    // Add to cart from modal
    document.querySelector('.add-to-cart-modal').addEventListener('click', function() {
        const productId = parseInt(this.dataset.productId);
        const quantity = parseInt(document.getElementById('quantity').value);
        addToCart(productId, quantity);
        closeModals();
    });

    // Newsletter form
    document.querySelector('.newsletter-form').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        alert(`Thank you for subscribing with email: ${email}`);
        this.reset();
    });

    // CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function() {
            document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Authentication forms
    setupAuthenticationListeners();

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup search functionality
function setupSearchListeners() {
    const searchInput = document.getElementById('search-input');
    const searchSubmit = document.getElementById('search-submit');
    const searchResults = document.getElementById('search-results');

    // Search on input
    searchInput.addEventListener('input', function() {
        const query = this.value.trim();
        if (query.length > 0) {
            performSearch(query);
        } else {
            searchResults.innerHTML = '<p class="search-placeholder">Start typing to search for products...</p>';
        }
    });

    // Search on button click
    searchSubmit.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query.length > 0) {
            performSearch(query);
        }
    });

    // Search on Enter key
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query.length > 0) {
                performSearch(query);
            }
        }
    });
}

// Perform product search
function performSearch(query) {
    const searchResults = document.getElementById('search-results');
    const results = allProducts.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.description.toLowerCase().includes(query.toLowerCase()) ||
        product.brand.toLowerCase().includes(query.toLowerCase())
    );

    if (results.length === 0) {
        searchResults.innerHTML = '<p class="no-results">No products found matching your search.</p>';
        return;
    }

    searchResults.innerHTML = results.map(product => `
        <div class="search-result-item" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}" class="search-result-image">
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-brand">${product.brand}</div>
                <div class="search-result-price">$${product.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');

    // Add click handlers to search results
    searchResults.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', function() {
            const productId = parseInt(this.dataset.productId);
            closeModals();
            openProductModal(productId);
        });
    });
}

// Open search modal
function openSearchModal() {
    const searchModal = document.getElementById('search-modal');
    searchModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Focus on search input
    setTimeout(() => {
        document.getElementById('search-input').focus();
    }, 100);
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('contact-name').value;
        const email = document.getElementById('contact-email').value;
        const subject = document.getElementById('contact-subject').value;
        const message = document.getElementById('contact-message').value;
        
        // Simulate form submission
        showNotification(`Thank you ${name}! Your message has been sent. We'll get back to you soon.`);
        
        // Reset form
        contactForm.reset();
    });
}


// Setup authentication event listeners
function setupAuthenticationListeners() {
    // Show signup form
    document.getElementById('show-signup').addEventListener('click', function(e) {
        e.preventDefault();
        showSignupForm();
    });

    // Show login form
    document.getElementById('show-login').addEventListener('click', function(e) {
        e.preventDefault();
        showLoginForm();
    });

    // Login form submission
    document.getElementById('login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleLogin();
    });

    // Signup form submission
    document.getElementById('signup-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleSignup();
    });

    // Edit profile
    document.getElementById('edit-profile').addEventListener('click', function() {
        showEditProfileForm();
    });

    // Cancel edit profile
    document.getElementById('cancel-edit').addEventListener('click', function() {
        showProfileDashboard();
    });

    // Edit profile form submission
    document.getElementById('edit-profile-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleEditProfile();
    });

    // Change password
    document.getElementById('change-password').addEventListener('click', function() {
        showChangePasswordForm();
    });

    // Cancel change password
    document.getElementById('cancel-password').addEventListener('click', function() {
        showProfileDashboard();
    });

    // Change password form submission
    document.getElementById('change-password-form').addEventListener('submit', function(e) {
        e.preventDefault();
        handleChangePassword();
    });

    // Logout
    document.getElementById('logout-btn').addEventListener('click', function() {
        handleLogout();
    });

    // Preferences
    document.getElementById('email-notifications').addEventListener('change', function() {
        updateUserPreferences();
    });

    document.getElementById('marketing-emails').addEventListener('change', function() {
        updateUserPreferences();
    });
}

// Authentication functions
function showLoginForm() {
    document.getElementById('profile-modal-title').textContent = 'Sign In';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('profile-dashboard').style.display = 'none';
    document.getElementById('edit-profile-form').style.display = 'none';
    document.getElementById('change-password-form').style.display = 'none';
}

function showSignupForm() {
    document.getElementById('profile-modal-title').textContent = 'Create Account';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
    document.getElementById('profile-dashboard').style.display = 'none';
    document.getElementById('edit-profile-form').style.display = 'none';
    document.getElementById('change-password-form').style.display = 'none';
}

function showProfileDashboard() {
    document.getElementById('profile-modal-title').textContent = 'My Profile';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('profile-dashboard').style.display = 'block';
    document.getElementById('edit-profile-form').style.display = 'none';
    document.getElementById('change-password-form').style.display = 'none';
}

function showEditProfileForm() {
    document.getElementById('profile-modal-title').textContent = 'Edit Profile';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('profile-dashboard').style.display = 'none';
    document.getElementById('edit-profile-form').style.display = 'block';
    document.getElementById('change-password-form').style.display = 'none';
    
    // Populate form with current user data
    document.getElementById('edit-name').value = currentUser.name;
    document.getElementById('edit-email').value = currentUser.email;
    document.getElementById('edit-phone').value = currentUser.phone || '';
}

function showChangePasswordForm() {
    document.getElementById('profile-modal-title').textContent = 'Change Password';
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('profile-dashboard').style.display = 'none';
    document.getElementById('edit-profile-form').style.display = 'none';
    document.getElementById('change-password-form').style.display = 'block';
}

function handleLogin() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        updateProfileUI();
        showProfileDashboard();
        showNotification('Welcome back!');
    } else {
        showNotification('Invalid email or password', 'error');
    }
}

function handleSignup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm').value;
    
    // Validation
    if (password !== confirmPassword) {
        showNotification('Passwords do not match', 'error');
        return;
    }
    
    if (users.find(u => u.email === email)) {
        showNotification('Email already exists', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        id: Date.now(),
        name,
        email,
        password,
        phone: '',
        preferences: {
            emailNotifications: true,
            marketingEmails: false
        },
        orders: [],
        createdAt: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    updateProfileUI();
    showProfileDashboard();
    showNotification('Account created successfully!');
}

function handleEditProfile() {
    const name = document.getElementById('edit-name').value;
    const email = document.getElementById('edit-email').value;
    const phone = document.getElementById('edit-phone').value;
    
    // Check if email is already taken by another user
    const existingUser = users.find(u => u.email === email && u.id !== currentUser.id);
    if (existingUser) {
        showNotification('Email already exists', 'error');
        return;
    }
    
    // Update current user
    currentUser.name = name;
    currentUser.email = email;
    currentUser.phone = phone;
    
    // Update in users array
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    updateProfileUI();
    showProfileDashboard();
    showNotification('Profile updated successfully!');
}

function handleChangePassword() {
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmNewPassword = document.getElementById('confirm-new-password').value;
    
    // Validation
    if (currentPassword !== currentUser.password) {
        showNotification('Current password is incorrect', 'error');
        return;
    }
    
    if (newPassword !== confirmNewPassword) {
        showNotification('New passwords do not match', 'error');
        return;
    }
    
    // Update password
    currentUser.password = newPassword;
    
    // Update in users array
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showProfileDashboard();
    showNotification('Password updated successfully!');
    
    // Clear form
    document.getElementById('change-password-form').reset();
}

function handleLogout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    updateProfileUI();
    closeModals();
    showNotification('Signed out successfully');
}

function updateUserPreferences() {
    if (!currentUser) return;
    
    currentUser.preferences.emailNotifications = document.getElementById('email-notifications').checked;
    currentUser.preferences.marketingEmails = document.getElementById('marketing-emails').checked;
    
    // Update in users array
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showNotification('Preferences updated');
}

function updateProfileUI() {
    if (currentUser) {
        // Update profile info
        document.getElementById('profile-name').textContent = currentUser.name;
        document.getElementById('profile-email').textContent = currentUser.email;
        
        // Update initials
        const initials = currentUser.name.split(' ').map(n => n[0]).join('').toUpperCase();
        document.getElementById('profile-initials').textContent = initials;
        
        // Update preferences
        document.getElementById('email-notifications').checked = currentUser.preferences.emailNotifications;
        document.getElementById('marketing-emails').checked = currentUser.preferences.marketingEmails;
        
        // Update order history
        updateOrderHistory();
    }
}

function updateOrderHistory() {
    const orderHistoryContainer = document.getElementById('order-history');
    
    if (!currentUser || !currentUser.orders || currentUser.orders.length === 0) {
        orderHistoryContainer.innerHTML = '<p class="no-orders">No orders yet. Start shopping to see your order history!</p>';
        return;
    }
    
    orderHistoryContainer.innerHTML = currentUser.orders.map(order => `
        <div class="order-item">
            <div class="order-header">
                <span class="order-id">Order #${order.id}</span>
                <span class="order-date">${new Date(order.date).toLocaleDateString()}</span>
            </div>
            <div class="order-details">
                <span class="order-total">$${order.total.toFixed(2)}</span>
                <span class="order-status status-${order.status}">${order.status}</span>
            </div>
        </div>
    `).join('');
}


// Open profile modal
function openProfileModal() {
    if (currentUser) {
        showProfileDashboard();
    } else {
        showLoginForm();
    }
    profileModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Add product to cart
function addToCart(productId, quantity = 1) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            ...product,
            quantity: quantity
        });
    }

    updateCartUI();
    saveCart();
    showNotification(`${product.name} added to cart!`);
}

// Remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
    saveCart();
}

// Update item quantity in cart
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (newQuantity <= 0) {
            removeFromCart(productId);
        } else {
            item.quantity = newQuantity;
            updateCartUI();
            saveCart();
        }
    }
}

// Update cart UI
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toFixed(2);

    renderCartItems();
}

// Render cart items
function renderCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Your cart is empty</div>';
        return;
    }

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-quantity">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">+</button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
}

// Search button
const searchBtn = document.querySelector('.search-btn');
const searchModal = document.getElementById('search-modal');
searchBtn.addEventListener('click', openSearchModal);

// Add search modal to closeModals function
function closeModals() {
    const cartModal = document.getElementById('cart-modal');
    const productModal = document.getElementById('product-modal');
    const profileModal = document.getElementById('profile-modal');
    const searchModal = document.getElementById('search-modal');
    
    cartModal.style.display = 'none';
    productModal.style.display = 'none';
    profileModal.style.display = 'none';
    searchModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset search
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    if (searchInput) searchInput.value = '';
    if (searchResults) searchResults.innerHTML = '<p class="search-placeholder">Start typing to search for products...</p>';
}

// Call these functions in your DOMContentLoaded event
document.addEventListener('DOMContentLoaded', function() {
    // ... your existing code ...
    setupSearchListeners();
    setupContactForm();
});

// Open product modal
function openProductModal(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modal-product-name').textContent = product.name;
    document.getElementById('modal-product-image').src = product.image;
    document.getElementById('modal-product-description').textContent = product.description;
    document.getElementById('modal-product-price').textContent = product.price.toFixed(2);
    document.getElementById('quantity').value = 1;
    document.querySelector('.add-to-cart-modal').dataset.productId = productId;

    productModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Open cart modal
function openCartModal() {
    cartModal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close all modals
function closeModals() {
    cartModal.style.display = 'none';
    productModal.style.display = 'none';
    profileModal.style.display = 'none';
    searchModal.style.display = 'none';
    document.body.style.overflow = 'auto';
    
    // Reset forms
    document.querySelectorAll('.auth-form').forEach(form => form.reset());
}

// Clear cart
function clearCart() {
    cart = [];
    updateCartUI();
    saveCart();
    showNotification('Cart cleared!');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    if (!currentUser) {
        alert('Please sign in to complete your purchase.');
        openProfileModal();
        return;
    }

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Create order
    const order = {
        id: Date.now(),
        date: new Date().toISOString(),
        items: [...cart],
        total: total,
        status: 'processing'
    };
    
    // Add order to user's order history
    if (!currentUser.orders) {
        currentUser.orders = [];
    }
    currentUser.orders.unshift(order);
    
    // Update user in storage
    const userIndex = users.findIndex(u => u.id === currentUser.id);
    if (userIndex !== -1) {
        users[userIndex] = currentUser;
        localStorage.setItem('users', JSON.stringify(users));
    }
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    alert(`Thank you for your purchase, ${currentUser.name}! Total: $${total.toFixed(2)}\n\nOrder #${order.id} has been placed.\n\nThis is a demo - no actual payment was processed.`);
    
    clearCart();
    closeModals();
}

// Save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Show notification
function showNotification(message, type = 'success') {
    // Create notification element
    const notification = document.createElement('div');
    const bgColor = type === 'error' ? '#e74c3c' : '#2c5530';
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    `;
    notification.textContent = message;

    // Add animation keyframes
    if (!document.querySelector('#notification-styles')) {
        const style = document.createElement('style');
        style.id = 'notification-styles';
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `;
        document.head.appendChild(style);
    }

    document.body.appendChild(notification);

    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Mobile menu toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function() {
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-menu').style.display = 'none';
        }
    });
});

// Handle window resize
window.addEventListener('resize', function() {
    if (window.innerWidth > 768) {
        document.querySelector('.nav-menu').style.display = 'flex';
    } else {
        document.querySelector('.nav-menu').style.display = 'none';
    }
});

// Keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModals();
    }
});

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for scroll animations
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.product-card, .feature, .about-text, .brand-section');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

function setupEventListeners() {
    // Search button
    const searchBtn = document.querySelector('.search-btn');
    if (searchBtn) {
        searchBtn.addEventListener('click', openSearchModal);
    }

    // Profile button
    const profileBtn = document.querySelector('.profile-btn');
    if (profileBtn) {
        profileBtn.addEventListener('click', openProfileModal);
    }

    // Cart button
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
        cartBtn.addEventListener('click', openCartModal);
    }

    // Modal close buttons - IMPORTANT: This must run after DOM is loaded
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            closeModals();
        });
    });

    // Modal background clicks
    const modals = ['cart-modal', 'product-modal', 'profile-modal', 'search-modal'];
    modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    closeModals();
                }
            });
        }
    });

    // Product card clicks
    document.addEventListener('click', function(e) {
        const productCard = e.target.closest('.product-card');
        if (productCard && !e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(productCard.dataset.productId);
            openProductModal(productId);
        }
    });

    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            e.stopPropagation();
            const productId = parseInt(e.target.dataset.productId);
            addToCart(productId);
        }
    });

    // Clear cart and checkout buttons
    const clearCartBtn = document.getElementById('clear-cart');
    const checkoutBtn = document.getElementById('checkout');
    
    if (clearCartBtn) clearCartBtn.addEventListener('click', clearCart);
    if (checkoutBtn) checkoutBtn.addEventListener('click', checkout);

    // Setup other functionality
    setupSearchListeners();
    setupContactForm();
    setupAuthenticationListeners();

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}