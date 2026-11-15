// ==========================================================================
// ADRIANA CHIARAMONTE BEAUTY - SCRIPTS
// ==========================================================================

// Welcome message in the browser console (Original feature preserved)
console.log("Welcome to Adri Chiaramonte Beauty!");

// Display the current year in the footer (Original feature preserved & enhanced)
const footer = document.querySelector("footer");

if (footer) {
    const year = new Date().getFullYear();
    // Prioritise copyright paragraph if available, falling back to first p
    const copyrightP = footer.querySelector(".footer-bottom p") || footer.querySelector("p");
    if (copyrightP) {
        copyrightP.textContent = `© ${year} Adriana Chiaramonte Beauty`;
    }
}

// --------------------------------------------------------------------------
// Interactive Enhancements: Mobile Navigation, Sticky Header & Scroll Spy
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("site-header");
    const navToggle = document.getElementById("navToggle");
    const mainNav = document.getElementById("main-nav");
    const navLinks = document.querySelectorAll("nav a.nav-link");
    const sections = document.querySelectorAll("main section[id]");

    // 1. Mobile Menu Toggle
    if (navToggle && mainNav) {
        navToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("open");
            navToggle.classList.toggle("open", isOpen);
            navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
        });

        // Close mobile menu when any navigation link is clicked
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                if (mainNav.classList.contains("open")) {
                    mainNav.classList.remove("open");
                    navToggle.classList.remove("open");
                    navToggle.setAttribute("aria-expanded", "false");
                }
            });
        });
    }

    // 2. Header elevation and shadow on scroll
    const handleScroll = () => {
        if (!header) return;
        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    // 3. Active Navigation Link on Scroll (ScrollSpy)
    const updateActiveNavLink = () => {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute("id");

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    } else {
                        link.classList.remove("active");
                    }
                });
            }
        });
    };

    window.addEventListener("scroll", updateActiveNavLink, { passive: true });
});
