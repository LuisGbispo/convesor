const convert = document.querySelector(".buttonc")
const currencySelect = document.querySelector("#currency-select")

function convertValues() {
    const inputCurrencyValues = document.querySelector("#input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValue = document.querySelector(".currency-value")


    const dolarToDay = 5.2 //valor exemplo
    const euroToDay = 6.2 //valor exemplo
    const bitcointoday = 600.000
    const libraToday = 7.4

    const convertedVlue = inputCurrencyValues / dolarToDay








    if (currencySelect.value == "dolar") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedVlue)
    }

    if (currencySelect.value == "euro") {
        currencyValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValues / euroToDay)

    }
    if (currencySelect.value == "libra") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValues / libraToday)
    }

    if (currencySelect.value == "bitcoin") {
        currencyValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValues / bitcointoday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValues)



    console.log(convertedVlue)
}

function changeCurrency() {
    const currencyName = document.getElementById("currencyname")
    const currencyImage = document.querySelector(".currencyimg")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }
    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "euro"
        currencyImage.src = "./assets/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImage.src = "./assets/bitcoin.png"
    }
    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()
}

convert.addEventListener("click", convertValues)

currencySelect.addEventListener("change", changeCurrency)



