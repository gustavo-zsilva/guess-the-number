const darkBtn = document.querySelector('.dark button')
const main = document.querySelector('.container')

darkBtn.addEventListener('click', () => {
    
    if (darkBtn.innerHTML == 'Dark Mode') {
        darkBtn.innerHTML = 'Light Mode'

        // Disable Light Mode class
        document.body.classList.remove('bodylightmode')
        main.classList.remove('mainlightmode')

        // Enable Dark Mode class
        document.body.classList.add('bodydarkmode')
        main.classList.add('maindarkmode')
    } else {
        darkBtn.innerHTML = 'Dark Mode'

        // Disable Dark Mode class
        document.body.classList.remove('bodydarkmode')
        main.classList.remove('maindarkmode')

        // Enable Light Mode class
        document.body.classList.add('bodylightmode')
        main.classList.add('mainlightmode')

    }
})