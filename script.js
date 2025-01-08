// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Highlight active link on scroll
const sections = document.querySelectorAll('main section');
const navLinks = document.querySelectorAll('nav ul li a');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        if (scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// Trigger .toggle-btn click when navbar link is clicked
document.querySelectorAll('.navbar a').forEach(navLink => {
    navLink.addEventListener('click', event => {
        event.preventDefault(); // Prevent default anchor behavior

        const targetId = navLink.getAttribute('href').substring(1); // Extract section ID
        const section = document.getElementById(targetId); // Find the target section

        // Scroll to the section smoothly
        section.scrollIntoView({ behavior: 'smooth' });

        // Find the .toggle-btn within the section and trigger its click
        const toggleButton = section.querySelector('.toggle-btn');
        if (toggleButton) {
            toggleButton.click(); // Programmatically trigger the toggle button's click
        }
    });
});


function toggleSection(button) {
    // Find the parent section of the button
    const section = button.closest("section");

    // Toggle the 'expanded' class on the section
    section.classList.toggle("expanded");

    // Update button icon or text
    button.textContent = section.classList.contains("expanded") ? "▼" : "►";
}

// On page load, initialize sections
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("section").forEach(section => {
        // Skip sections with the 'active' class
        if (!section.classList.contains("active")) {
            section.classList.remove("expanded");
            const button = section.querySelector(".toggle-btn");
            if (button) {
                button.textContent = "►";
            }
        }
    });
});


// Scroll to Top Button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.textContent = '↑';
scrollToTopBtn.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopBtn);

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Download CV Button
const downloadCvBtn = document.querySelector('.download-cv');
downloadCvBtn.addEventListener('click', () => {
    const link = document.createElement('a');
    link.href = 'path-to-your-cv.pdf'; // Replace with your CV path
    link.download = 'Your_Name_CV.pdf';
    link.click();
});