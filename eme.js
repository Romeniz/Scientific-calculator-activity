let display = document.getElementById("display");

function toggleMenu() {

    let menu = document.getElementById("sideMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

function addValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {

    try {
        display.value = eval(display.value);
    }

    catch {
        display.value = "Error";
    }
}

function changeSign() {

    if (display.value !== "") {
        display.value = -Number(display.value);
    }
}

function showStandard() {

    document.querySelector(".standard").style.display = "grid";
    document.querySelector(".scientific").style.display = "none";
    document.getElementById("title").textContent = "Standard";
    document.getElementById("sideMenu").style.display = "none";
}

function showScientific() {

    document.querySelector(".standard").style.display = "none";
    document.querySelector(".scientific").style.display = "grid";
    document.getElementById("title").textContent = "Scientific";
    document.getElementById("sideMenu").style.display = "none";
}

function scientific(type) {

    let number = Number(display.value);

    if (type === "sin") {
        display.value = Math.sin(number * Math.PI / 180);
    }

    if (type === "cos") {
        display.value = Math.cos(number * Math.PI / 180);
    }

    if (type === "tan") {
        display.value = Math.tan(number * Math.PI / 180);
    }

    if (type === "sqrt") {
        display.value = Math.sqrt(number);
    }

    if (type === "square") {
        display.value = number * number;
    }

    if (type === "log") {
        display.value = Math.log10(number);
    }

    if (type === "ln") {
        display.value = Math.log(number);
    }
}