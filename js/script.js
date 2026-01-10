document.addEventListener("DOMContentLoaded", function() {
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

    })

})