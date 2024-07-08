let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navlinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

navlinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent the default link behavior (scrolling to the anchor)
        event.preventDefault();

        // Remove the 'active' class from all links
        navlinks.forEach(navlink => {
            navlink.classList.remove('active');
            navlink.style.color = ''; // Reset color for all links
        });

        // Add the 'active' class to the clicked link
        link.classList.add('active');
        link.style.color = 'orangered'; // Change color to #0ef

        // Scroll to the section corresponding to the clicked link
        let targetId = link.getAttribute('href').substring(1); // Remove the '#' character
        let targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust this value as needed
                behavior: 'smooth', // Smooth scrolling
            });
        }

        // Close the mobile menu
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x'); // Remove the 'bx-x' class
    });
});

// Handle scroll events to update the active link and color
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY;
    navlinks.forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (
            section &&
            section.offsetTop - 50 <= fromTop &&
            section.offsetTop + section.offsetHeight - 50 > fromTop
        ) {
            // Only one link should have the 'active' class at a time
            navlinks.forEach(navlink => {
                navlink.classList.remove('active');
                navlink.style.color = ''; // Reset color for all links
            });

            link.classList.add('active');
            link.style.color = 'orangered'; // Change color to #0ef
        } else {
            link.classList.remove('active');
            link.style.color = ''; // Reset color
        }
    });
});





// Initial state: reset colors
navlinks.forEach(link => {
    if (link.classList.contains('active')) {
        link.style.color = 'orangered'; // Set color to #0ef for the active link
    } else {
        link.style.color = ''; // Reset color for other links
    }
});


// =======================================================

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
ScrollReveal().reveal('.home-img,.services-container,.portfolio-box,.contact form',{origin:'bottom'});
ScrollReveal().reveal('.home-content h1,.about-img',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});