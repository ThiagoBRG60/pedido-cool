const buttons = document.querySelectorAll(".buttons button")

function switchWords() {
   buttons.forEach(button => {
      button.addEventListener("click", (e) => {
         buttons.forEach(otherButton => {
            if (otherButton !== button) {
               otherButton.textContent = "Não"
            }
         })

         if (button.textContent === "Sim") {
            goToAnswerPage()
         }
   
         if (button.textContent === "Não") {
            button.textContent = "Sim"
         }
      })
   })
}
switchWords()

function goToAnswerPage() {
   window.location.href = "https://thiagobrg60.github.io/pedido-cool/answer.html"
}