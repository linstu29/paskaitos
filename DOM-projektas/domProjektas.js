window.addEventListener("load", () => {
    let calculateButton = document.getElementById('calculate')
    calculateButton.addEventListener('click', function () {
        console.log('clicked');
        let creamPrice = document.getElementById('kremo-kaina').valueAsNumber;
        let availableQuantity = document.getElementById('turimas-kiekis').valueAsNumber;
        let orderCount = document.getElementById('order-count').valueAsNumber;


        let arPavyks = availableQuantity >= orderCount;
        let priceTotal = creamPrice * orderCount;


        let results = document.getElementById('results');

        results.innerHTML = `<p><strong>Gaunamos pajamos:</strong> ${orderCount * creamPrice}€</p>`
        results.innerHTML += `<p><strong>Ar uzteks kremu?</strong> ${arPavyks ? 'Taip' : 'Ne'}</p>`
        results.innerHTML += `<p><strong>Likutis</strong> ${availableQuantity - orderCount}</p>`
    })


    document.getElementById('kremo-kaina').addEventListener('keyup', function (event) {
        let inputValue = event.target.valueAsNumber
        if (inputValue < 5) {
            event.target.nextElementSibling.classList.add('show')
        } else {
            event.target.nextElementSibling.classList.remove('show')
        }
    })

    document.getElementById('turimas-kiekis').addEventListener('keyup', function (event) {
        let inputValue = event.target.valueAsNumber
        if (inputValue < 5) {
            event.target.nextElementSibling.classList.add('show')
        } else {
            event.target.nextElementSibling.classList.remove('show')
        }
    })

    document.getElementById('order-count').addEventListener('keyup', function (event) {
        let inputValue = event.target.valueAsNumber
        if (inputValue < 2) {
            event.target.nextElementSibling.classList.add('show')
        } else {
            event.target.nextElementSibling.classList.remove('show')
        }
    })

    document.getElementById('reset').addEventListener('click', function () {
        document.getElementById('kremo-kaina').valueAsNumber = 0
        document.getElementById('turimas-kiekis').valueAsNumber = 0
        document.getElementById('order-count').valueAsNumber = 0
        document.getElementById('results').innerHTML = '<p>Kol kas nieko nėra.</p>'
    })
})