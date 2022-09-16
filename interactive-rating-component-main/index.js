const ratePage = document.querySelector(".rating-state")
const thankyouPage = document.querySelector(".thankyou-state")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rate")
const rates = document.querySelectorAll(".btn-numbers")


submitButton.addEventListener("click", () => {
    thankyouPage.classList.remove("hidden")
    ratePage.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})