let cart = [
    {
        image: "img/Group 14.png"
    },
    {
        image: "img/Group 15.png"
    },
    {
        image: "img/Group 16.png"
    },
    {
        image: "img/Group 17.png"
    }
]

let visa = document.querySelector('.visa')
for (let i of cart) {
    let img = document.createElement('img')
    img.classList.add('img')
    img.src = i.image
    visa.append(img)
}
let thead = document.querySelector('tbody')
for (let f = 0; f < 7; f++) {
    let tr = document.createElement('tr')
    let num = document.createElement('td')
    let bilet = document.createElement('td')
    let auto = document.createElement('td')
    let sum = document.createElement('td')
    let day = document.createElement('td')

    num.innerHTML = '1232312'
    bilet.innerHTML = 'VISA'
    auto.innerHTML = 'Автомобиль'
    sum.innerHTML = '414,000,000'
    day.innerHTML = '4 дня назад'

    thead.append(tr)
    tr.append(num, bilet, auto, sum, day)
}

console.log(visa);
