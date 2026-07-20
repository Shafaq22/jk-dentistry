// Treatmenst & Services Data
const servicesData = [
    {
        title: "RCT (Root Canal)",
        category: "treatment",
        desc: "Advanced endodontic procedures to save and restore infected or damaged teeth with minimal discomfort.",
        icon: '<svg viewBox="0 0 24 24"><path d="M7 3C5.5 5 4 8 4 12c0 5 4.5 9 8 9s8-4 8-9c0-4-1.5-7-3-9-1 1.5-2.5 2-5 2S9.5 4.5 7 3z" fill="currentColor"/></svg>',
        image: "images/rct.jpg"
    },
    {
        title: "Dental Braces Fixing",
        category: "procedures",
        desc: "Orthodontic braces (ceramic, metal, or clear aligners) to correct crowding, misalignment, and bite issues.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="currentColor"/></svg>',
        image: "images/braces.jpg"
    },
    {
        title: "Dental Implant Fixing",
        category: "treatment",
        desc: "Restore missing teeth with premium titanium implants designed to look, feel, and function like natural teeth.",
        icon: '<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fill="currentColor"/></svg>',
        image: "images/implants.jpg"
    },
    {
        title: "Laser Dentistry & Laser RCT",
        category: "procedures",
        desc: "High-precision laser technology for pain-free surgeries, faster healing, and sterilizing root canals.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z" fill="currentColor"/></svg>',
        image: "images/laser.jpg"
    },
    {
        title: "Cosmetic & Facial Surgery",
        category: "surgery",
        desc: "Aesthetic facial reconstructive surgery, chin adjustments, and cosmetic gum leveling to enhance your features.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" fill="currentColor"/></svg>',
        image: "images/cosmetic.jpg"
    },
    {
        title: "FUE Hair Transplant",
        category: "surgery",
        desc: "Follicular Unit Extraction clinic procedure for natural-looking, permanent hair restoration.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.22 19.58 10.57 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="currentColor"/></svg>',
        image: "images/hair.jpg"
    },
    {
        title: "Ceramic Crowns & Bridges",
        category: "procedures",
        desc: "Durable, high-aesthetic ceramic crowns to restore fractured teeth and form dental bridges.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17h2v2h-2V5zm-4 0h2v2H9V5zm-2 4h10v2H7V9zm0 4h10v2H7v-2z" fill="currentColor"/></svg>',
        image: "images/crowns.jpg"
    },
    {
        title: "Wisdom Tooth Extraction",
        category: "treatment",
        desc: "Surgical extraction of impacted or painful third molars using advanced, minimally invasive techniques.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" fill="currentColor"/></svg>',
        image: "images/extraction.jpg"
    },
    {
        title: "Oral Rehabilitation & BPS Dentures",
        category: "treatment",
        desc: "Complete mouth rehabilitation and premium precision-fitting BPS dentures for superior function.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" fill="currentColor"/></svg>',
        image: "images/dentures.jpg"
    },
    {
        title: "Dental & Implant Clinic",
        category: "facilities",
        desc: "Dedicated clinical operation equipped with advanced 3D scanning, Wi-Fi waiting area, and sterilization bays.",
        icon: '<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-6h2v6zm0-8h-2V7h2v4z" fill="currentColor"/></svg>',
        image: "images/clinic.jpg"
    }
];

// Load and Filter Services
function renderServices(filter = "all") {
    const grid = document.getElementById("servicesGrid");
    if (!grid) return;
    grid.innerHTML = "";
    
    const filtered = filter === "all" ? servicesData : servicesData.filter(s => s.category === filter);
    
    filtered.forEach(service => {
        const card = document.createElement("div");
        card.className = "service-card";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.overflow = "hidden";
        card.style.padding = "0";
        card.innerHTML = `
            <div class="service-image-wrapper" style="width: 100%; height: 180px; overflow: hidden; position: relative;">
                <img src="${service.image}" alt="${service.title}" class="service-card-image" style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition);">
            </div>
            <div class="service-card-content" style="padding: 2rem;">
                <div class="service-icon" style="margin-top: -3.5rem; position: relative; z-index: 1; border: 4px solid var(--surface); box-shadow: var(--shadow-sm);">${service.icon}</div>
                <h3 style="margin-top: 0.5rem; margin-bottom: 0.8rem; font-size: 1.25rem;">${service.title}</h3>
                <p style="color: var(--text-muted); font-size: 0.95rem;">${service.desc}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Interactive Tabs for Services
document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
        document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        renderServices(btn.dataset.tab);
    });
});

// Dynamic Live Status Indicator (9:30 AM - 9:30 PM Open Hours)
function checkLiveStatus() {
    const liveBadge = document.getElementById("liveBadge");
    const liveBadgeText = document.getElementById("liveBadgeText");
    if (!liveBadge || !liveBadgeText) return;

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const currentTimeInMinutes = hours * 60 + minutes;

    const openTimeInMinutes = 9 * 60 + 30; // 9:30 AM
    const closeTimeInMinutes = 21 * 60 + 30; // 9:30 PM

    if (currentTimeInMinutes >= openTimeInMinutes && currentTimeInMinutes < closeTimeInMinutes) {
        liveBadge.className = "clinic-badge badge-open";
        liveBadgeText.textContent = "Open Now";
    } else {
        liveBadge.className = "clinic-badge badge-closed";
        liveBadgeText.textContent = "Closed Now (Opens 9:30 AM)";
    }
}

// Testimonials Slider
let currentSlide = 0;
const slidesContainer = document.getElementById("reviewSlides");
const slides = document.querySelectorAll(".slide");

function updateSlider() {
    if (!slidesContainer || slides.length === 0) return;
    slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.getElementById("prevSlide")?.addEventListener("click", () => {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
    updateSlider();
});

document.getElementById("nextSlide")?.addEventListener("click", () => {
    currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
    updateSlider();
});

// Appointment Booking Handler
const bookingForm = document.getElementById("appointmentForm");
const successModal = document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

if (bookingForm) {
    // Set minimum date to today
    const dateInput = document.getElementById("bookDate");
    if (dateInput) {
        const today = new Date().toISOString().split("T")[0];
        dateInput.min = today;
        dateInput.value = today;
    }

    bookingForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("fullName").value;
        const phone = document.getElementById("phoneNumber").value;
        const date = document.getElementById("bookDate").value;
        const time = document.getElementById("bookTime").value;
        const service = document.getElementById("serviceType").value;

        // Save appointment detail to localStorage
        const appointments = JSON.parse(localStorage.getItem("appointments") || "[]");
        appointments.push({ name, phone, date, time, service, bookedAt: new Date().toISOString() });
        localStorage.setItem("appointments", JSON.stringify(appointments));

        // Populate Confirmation Modal
        document.getElementById("confName").textContent = name;
        document.getElementById("confTime").textContent = time;
        document.getElementById("confDate").textContent = date;
        document.getElementById("confPhone").textContent = phone;

        // Show Modal
        successModal.classList.add("active");
        bookingForm.reset();
    });
}

if (closeModal && successModal) {
    closeModal.addEventListener("click", () => {
        successModal.classList.remove("active");
    });
    
    // Close modal when clicking outside contents
    successModal.addEventListener("click", (e) => {
        if (e.target === successModal) {
            successModal.classList.remove("active");
        }
    });
}

// Dark/Light Theme Handler
const themeToggle = document.getElementById("themeToggle");
const currentTheme = localStorage.getItem("theme") || "light";

document.documentElement.setAttribute("data-theme", currentTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        let theme = document.documentElement.getAttribute("data-theme");
        let newTheme = theme === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
    });
}

// Mobile Nav Menu Handler
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Close mobile nav when clicking a link
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// Live Counter Animation
function initCounters() {
    const counters = document.querySelectorAll(".stat-counter");
    const duration = 1500; // 1.5 seconds animation time

    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute("data-target"));
        const start = parseFloat(counter.getAttribute("data-start") || 0);
        const suffix = counter.getAttribute("data-suffix") || "";
        const decimals = parseInt(counter.getAttribute("data-decimals") || 0);
        
        const startTime = performance.now();
        
        const animate = (currentTime) => {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            
            // Easing out quadratic function
            const easeProgress = progress * (2 - progress);
            const currentValue = start + (target - start) * easeProgress;
            
            counter.innerText = currentValue.toFixed(decimals) + suffix;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                counter.innerText = target.toFixed(decimals) + suffix;
                
                // Live real-time fluctuation effect
                setInterval(() => {
                    if (target === 4.8) {
                        // Rating fluctuates slightly between 4.78 and 4.82
                        let val = 4.78 + Math.random() * 0.04;
                        counter.innerText = val.toFixed( decimals ) + suffix;
                    } else if (target === 40) {
                        // Reviews occasionally tick up by 1-3 temporarily to mimic live activity
                        let extra = Math.floor(Math.random() * 4);
                        counter.innerText = (target + extra) + suffix;
                    } else if (target === 100) {
                        // Satisfaction fluctuates slightly between 99.8% and 100%
                        let val = 99.8 + Math.random() * 0.2;
                        counter.innerText = val.toFixed(1) + suffix;
                    }
                }, 2000 + Math.random() * 2000);
            }
        };
        requestAnimationFrame(animate);
    });
}

// Init Setup
document.addEventListener("DOMContentLoaded", () => {
    renderServices();
    checkLiveStatus();
    initCounters();
    // Re-check status every 60 seconds
    setInterval(checkLiveStatus, 60000);

    // FAQ Accordion Handler
    document.querySelectorAll(".faq-question").forEach(question => {
        question.addEventListener("click", () => {
            const item = question.parentElement;
            const answer = item.querySelector(".faq-answer");
            const icon = item.querySelector(".faq-icon");
            const isOpen = answer.style.maxHeight && answer.style.maxHeight !== "0px";

            // Close all open FAQs
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.maxHeight = "0px");
            document.querySelectorAll(".faq-icon").forEach(ico => ico.textContent = "+");

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                icon.textContent = "-";
            }
        });
    });
});
