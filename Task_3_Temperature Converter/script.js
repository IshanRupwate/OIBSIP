function convertToCelsius() {
    let temp = document.getElementById("inputFahren").value;
    let celsius = (temp - 32) * 5 / 9;
    document.getElementById("result").innerHTML = celsius.toFixed(2) + " &#8451;";
}

function convertToFahrenheit() {
    let temp = document.getElementById("inputCelci").value;
    let fahrenheit = (temp * 9 / 5) + 32;
    document.getElementById("result").innerHTML = fahrenheit.toFixed(2) + " &#8457;";
}
