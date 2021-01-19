const calcSection = document.querySelector('.calculator-section');
const container = calcSection.querySelector('.container');
const calculate = container.querySelector('.calculate')
const calculateTitle = document.querySelector('.calc-title');
const calcForm = document.querySelector('.choose-package');
const quantityInput = document.querySelector('#quantity');
const quantity = document.querySelector('.quantity');
const months = document.querySelector('.months');
const monthsInput = document.querySelector('#months');
const choosePackage = document.querySelector('.choose-package-dropdown');
const chooseOption = document.querySelector('.choose-option');
const allOptions = chooseOption.querySelectorAll('[data-id="option"]')
const package = document.querySelector('.package-option');
const packageOption = document.querySelector('select');
const checkboxes = document.querySelectorAll('.checkboxes');
const accountingCheckbox = document.querySelectorAll('.checkboxes')[0];
const accountingName = document.querySelector('.accounting-name');
const terminalCheckbox = document.querySelectorAll('.checkboxes')[1];
const consentName = document.querySelector('.consent-name');
const output = document.querySelector('.output');
const prodPrice = document.querySelector('.product-price');
const prodName = prodPrice.querySelector('.name');
const prodCalc = prodPrice.querySelector('.calc');
const prodSum = prodPrice.querySelector('.sum');
const orders = document.querySelector('.product-orders');
const ordersName = orders.querySelector('.name');
const ordersCalc = orders.querySelector('.calc');
const ordersSum = orders.querySelector('.sum');
const packages = document.querySelector('.product-package');
const packagesName = packages.querySelector('.name');
const packagesCalc = packages.querySelector('.calc');
const packagesSum = packages.querySelector('.sum');
const accounting = output.querySelector('.accounting');
const accName = accounting.querySelector('.name');
const accSum = accounting.querySelector('.sum');
const terminal = output.querySelector('.terminal');
const terminalName = terminal.querySelector('.name');
const terminalSum = terminal.querySelector('.sum');
const total = document.querySelector('.total');
const totalName = total.querySelector('.name');
const totalPrice = total.querySelector('.total-price');

let clickCount = 0;
let accChecCount = 0;
let termChecCount = 0;

choosePackage.addEventListener("click", (e) => {
    e.preventDefault();
    clickCount += 1;
    if (clickCount % 2 === 0) {
        chooseOption.style.display = "none";
        calcSection.style.height = "500px";
    } else {
        chooseOption.style.display = "flex";
        calcSection.style.height = "600px";
    }
})

allOptions.forEach(el => {
    el.addEventListener("click", () => {
        choosePackage.innerHTML = el.innerHTML;
        packagesCalc.innerHTML = choosePackage.innerHTML;
        chooseOption.style.display = "none";
        if (packagesCalc.innerHTML === "Basic") {
            packagesSum.innerHTML = '$' + 40;
        } if (packagesCalc.innerHTML === "Professional"){
            packagesSum.innerHTML = '$' + 65;
        } if (packagesCalc.innerHTML === "Premium") {
            packagesSum.innerHTML = '$' + 100;
        }
        sumUp();
    })
})

quantityInput.addEventListener("input", e => {
    prodCalc.innerHTML = quantityInput.value + ' * ' + 2;
    prodSum.innerHTML = '$' + quantityInput.value * 2;
    sumUp();
})

monthsInput.addEventListener("input", e => {
    ordersCalc.innerHTML = monthsInput.value + ' * ' +  1.5;
    ordersSum.innerHTML = '$' + monthsInput.value * 1.5;
    sumUp();
})

accountingCheckbox.addEventListener('change', e => {
    accChecCount += 1;
    console.log(accChecCount);
    if (accChecCount %2 === 0) {
        accSum.innerHTML = '$' + 45;
    } else {
        accSum.innerHTML = '$' + 0;
    }
    sumUp();
});

terminalCheckbox.addEventListener('change', e => {
    termChecCount += 1;
    console.log(accChecCount);
    if (termChecCount %2 === 0) {
        terminalSum.innerHTML = '$ ' + 20;
    } else {
        terminalSum.innerHTML = '$ ' + 0;
    }
    sumUp();
});

function sumUp() {
    const sums = document.querySelectorAll('.sum');
    let final = 0;
    sums.forEach(el => {
        let orderSum = el.innerHTML;
        let orderPrice = parseFloat(orderSum.substr(orderSum.indexOf("$") + 1));
        final = final + orderPrice 
    })
    totalPrice.innerHTML = '$' + final;
}
