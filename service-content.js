// elements
const NextstepButtons = document.querySelectorAll('.next')
const ReturnButtons = document.querySelectorAll('.return')

const content0 = document.getElementById('content0')
const content1 = document.getElementById('content1')
const content2 = document.getElementById('content2')

// EventListener
NextstepButtons.forEach(
    button => {
    button.addEventListener('click', () => {
        const modals = document.querySelectorAll('.modal.active')
        modals.forEach(modal => {
          closeModal(modal)
        })

        var product = document.querySelector('[name=GPT4]:checked')
        if(product.value==1){
            content0.style.display = 'none'
            content1.style.display = 'flex'
        }else if(product.value==2){
            content0.style.display = 'none'
            content2.style.display = 'flex'
        }else{
            return
        }
    })
  })
ReturnButtons.forEach(
    button => {
    button.addEventListener('click', () => {
            content1.style.display = 'none'
            content2.style.display = 'none'
            content0.style.display = 'flex'
    })
  })


// Function
function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
  }