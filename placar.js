const names = [
    {
        name: "Carlos",
        ranking: 1,
        border: "gold",
        img: "https://image.flaticon.com/icons/svg/3153/3153108.svg",
        tries: 0
    },
    {
        name: "Jorge",
        ranking: 2,
        border: "silver",
        img: "https://image.flaticon.com/icons/svg/3153/3153103.svg",
        tries: 7
    },
    {
        name: "Yan",
        ranking: 3,
        border: "bronze",
        img: "https://image.flaticon.com/icons/svg/3153/3153106.svg",
        tries: 8
    },
    {
        name: "Moraes",
        ranking: 4,
        border: "none",
        img: "https://image.flaticon.com/icons/svg/3100/3100234.svg",
        tries: 8
    }
]

const ul = document.querySelector('.placar ul')
// const triesUl = document.querySelector('.tries-table ul')

// Popula a lista de placares com o array de objetos 'names'
for(let i = 0; i <= names.length; i++) {
    let li = document.createElement('li')
    let img = document.createElement('img')
  
    li.innerHTML = `${names[i].ranking}º - `
    li.innerHTML += names[i].name
  
    if (names[i].border == "gold") {
        img.src = names[i].img
        img.classList.add('js-img')

        renderAttributes(li, 'rgb(247, 247, 39)', '255, 255, 0, 0.26', '255, 255, 0, 0.623')

    } else if (names[i].border == "silver") {
        img.src = names[i].img
        img.classList.add('js-img')

        renderAttributes(li, 'gray', '128, 128, 128, 0.100', '128, 128, 128, 0.363')

        

    } else if (names[i].border == "bronze") {
        img.src = names[i].img
        img.classList.add('js-img')

        renderAttributes(li, 'brown', '165, 42, 42, 0.100', '165, 42, 42, 0.233')

        

    } else {
        img.src = names[i].img
        img.classList.add('js-img')

        renderAttributes(li, '', '0, 0, 0, 0.05', '0, 0, 0, 0.103') 

    }


    li.appendChild(img)
    ul.appendChild(li)  
}



function renderAttributes(li, border, bgcolor, boxshadow) {
    li.style.border = `2px solid ${border}`
    li.style.backgroundColor = `rgba(${bgcolor})`
    li.style.boxShadow = `3px 3px 3px rgba(${boxshadow})`
}



// º