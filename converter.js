function weightConverter(source,valNum) {
    valNum = parseFloat(valNum);
    var inputSqm = document.getElementById("inputSqm");
    var inputRai = document.getElementById("inputRai");
    var inputNgan = document.getElementById("inputNgan");
    var inputWah = document.getElementById("inputWah");
    var inputTotalWah = document.getElementById("inputTotalWah");
    var inputPrice = document.getElementById("inputPrice");
    var inputPricePerRai = document.getElementById("inputPricePerRai");

    if (source == "inputSqm") {
        inputTotalWah.value = (valNum/4).toFixed(2)
        inputRai.value = Math.floor(valNum/1600)
        valNum = valNum - (inputRai.value*1600)
        inputNgan.value = Math.floor(valNum/400)
        valNum = valNum - (inputNgan.value*400)
        inputWah.value = (valNum/4).toFixed(2)
        inputPricePerRai.value = (inputPrice.value/inputTotalWah.value*400).toFixed(2)
    }

    if (source == "inputRai") {
        inputTotalWah.value = (valNum*400) + (inputNgan.value*100) + (inputWah.value*1)
        inputSqm.value = (inputTotalWah.value*4)
        inputPricePerRai.value = (inputPrice.value/inputTotalWah.value*400).toFixed(2)
    }

    if (source == "inputNgan") {
        inputTotalWah.value = (inputRai.value*400) + (valNum*100) + (inputWah.value*1)
        inputSqm.value = (inputTotalWah.value*4)
        inputPricePerRai.value = (inputPrice.value/inputTotalWah.value*400).toFixed(2)
    }

    if (source == "inputWah") {
        inputTotalWah.value = (inputRai.value*400) + (inputNgan.value*100) + (valNum*1)
        inputSqm.value = (inputTotalWah.value*4)
        inputPricePerRai.value = (inputPrice.value/inputTotalWah.value*400).toFixed(2)
    }

    if (source == "inputTotalWah") {
        inputSqm.value = (valNum*4).toFixed(2)
        inputRai.value = Math.floor(valNum/400)
        valNum = valNum - (inputRai.value*400)
        inputNgan.value = Math.floor(valNum/100)
        valNum = valNum - (inputNgan.value*100)
        inputWah.value = (valNum).toFixed(2)
        inputPricePerRai.value = (inputPrice.value/valNum.value*400).toFixed(2)
    }

    if (source == "inputPrice") {
        inputPricePerRai.value = (valNum/inputTotalWah.value*400).toFixed(2)
    }

    if (source == "inputPricePerRai") {
        inputPrice.value = (valNum/400*inputTotalWah.value).toFixed(2)
    }
}

