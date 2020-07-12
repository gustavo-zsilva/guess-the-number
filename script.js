const inputElement = document.querySelector('.game #number')
const submitBtn = document.querySelector('.game button')
const resultsElement = document.querySelector('.results')

let restartBtn = document.querySelector('.results button')

let counter = 0;
let inputValue = Number(inputElement.value)

submitBtn.addEventListener('click', checkValue)

// Variável para setar o número aleatório
let randomNumber = Math.floor(Math.random() * 100) + 1

// Função que checa se os valores do inputElement são válidos;
function checkValue(e) {

    // Previne a página de recarregar
    e.preventDefault()

    if(typeof inputValue == 'number' && inputElement.value.length != 0 && inputElement.value <= 100) {
        checkAnswer()
    } else {
        alert('O valor digitado não é um número. Tente novamente.')
        inputElement.value = ''
        inputElement.focus()
    }
    
}

// Função que processa a resposta e gera a resposta no DOM;
function checkAnswer() {
    
    let msg = document.querySelector('.results p.p1')
    let tries = document.querySelector('.results .tries')
    let allTries = document.querySelector('.results .all-tries')
    
    restartBtn.addEventListener('click', () => resetAll(msg, tries, allTries))

    msg.innerHTML = ''

    // Se o número de tentativas ainda for válido
    if (counter != 9) {

        // Se o palpite for CORRETO
        if (inputElement.value == randomNumber) {
            renderElements(msg, `Você acertou! O número era ${randomNumber}!`, 'green')

            restartBtn.classList.remove('hide')
            inputElement.setAttribute('disabled', true)
        } 

        // Se o palpite for INCORRETO e MAIOR
        else if (randomNumber < inputElement.value) { 
            counter++
            renderElements(msg, 'Você errou. Tente um número menor.', 'red')

            renderAuxiliarElements(tries, allTries)
                
        }

        // Se o palpite for INCORRETO e MENOR
        else if (randomNumber > inputElement.value) {
            counter++
            renderElements(msg, 'Você errou. Tente um número maior.', 'red')

            renderAuxiliarElements(tries, allTries)
            }

    } else {
        inputElement.setAttribute('disabled', true)
        msg.textContent = `Você perdeu. O número era ${randomNumber}!`

        restartBtn.classList.remove('hide')
    }

}

// Função para renderizar os elementos principais;
function renderElements(msg, text, color) {
    msg.textContent = text
    msg.style.backgroundColor = color
    resultsElement.appendChild(msg)
}

// Função para renderizar os elementos auxiliares;
function renderAuxiliarElements(tries, allTries) {
    tries.innerHTML = `Tentativas: ${counter}`
    tries.style.backgroundColor = `rgba(255, 0, 0, 0.1${counter})`
    allTries.innerHTML += ` ${inputElement.value},`

    inputElement.value = ''
    inputElement.focus()
}

// Função para resetar todas váriaveis e 'reiniciar' o jogo;
function resetAll(msg, tries, allTries) {

    randomNumber = Math.floor(Math.random() * 100) + 1

    counter = 0;
    msg.textContent = ''
    msg.style.backgroundColor = ''
    tries.innerHTML = 'Tentativas: '
    tries.style.backgroundColor = ''
    allTries.innerHTML = 'Número Inseridos: '
    inputElement.removeAttribute('disabled')
    
    restartBtn.classList.add('hide')
}