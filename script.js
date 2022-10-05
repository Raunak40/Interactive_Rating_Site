const container = document.getElementById("container")
const thankYouContainer = document.getElementById("thank-you-container")
const numberClicked = document.querySelectorAll(".number")
const submitBtn = document.getElementById("submit-btn")
let numberToBeDisplayed = document.getElementById("rating")


numberClicked.forEach(function numberPressed(oneNumberClicked){
    oneNumberClicked.addEventListener('click',function(){
        numberToBeDisplayed.innerText = oneNumberClicked.innerText
    })
})

submitBtn.addEventListener('click', function(){
    container.style.display = 'none'
    thankYouContainer.style.display = 'block'
})