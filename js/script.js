document.addEventListener("DOMContentLoaded", function() {
    // Monthly/Yearly
    const toggle = document.querySelector(".toggle")
    const ball = document.querySelector(".toggle-ball")
    const monthly = document.querySelector(".pricing-monthly")
    const yearly = document.querySelector(".pricing-yearly")
    const mtext = document.querySelector(".monthly-text")
    const ytext = document.querySelector(".yearly-text")

    toggle.addEventListener("click", function() {
        ball.classList.toggle("active")

        monthly.classList.toggle("hidden")
        yearly.classList.toggle("hidden")
        
        mtext.classList.toggle("opacity")
        ytext.classList.toggle("opacity")

    });
    // Frequently Asked Questions Accordion
    document.querySelectorAll(".accordion").forEach(accordion => {
        accordion.addEventListener('click', () => {
            const panel =accordion.nextElementSibling;
            panel.classList.toggle('open');
        });
    });
    
    document.querySelectorAll(".dropdown-footer-line").forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            const list = dropdown.parentElement.children[1];
            list.classList.toggle('open')
        })
    })

   


})