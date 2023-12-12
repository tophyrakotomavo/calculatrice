let num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var result = document.getElementById('result');
var plus = document.getElementById('plus');
var moins = document.getElementById('moins');
var div = document.getElementById('div');
var fois = document.getElementById('fois');
let ajout = function () {
    var v1 = (num1 === null || num1 === void 0 ? void 0 : num1.value) || '0';
    var v2 = (num2 === null || num2 === void 0 ? void 0 : num2.value) || '0';
    var response = parseFloat(v1) + parseFloat(v2);
    if (result) {
        result.value = String(response);
    }
};
plus === null || plus === void 0 ? void 0 : plus.addEventListener('click', ajout);
var soustraction = function () {
    var v1 = (num1 === null || num1 === void 0 ? void 0 : num1.value) || '0';
    var v2 = (num2 === null || num2 === void 0 ? void 0 : num2.value) || '0';
    var response = parseFloat(v1) - parseFloat(v2);
    if (result) {
        result.value = String(response);
    }
};
moins === null || moins === void 0 ? void 0 : moins.addEventListener('click', soustraction);
var divison = function () {
    var v1 = (num1 === null || num1 === void 0 ? void 0 : num1.value) || '0';
    var v2 = (num2 === null || num2 === void 0 ? void 0 : num2.value) || '0';
    var response = parseFloat(v1) / parseFloat(v2);
    if (result) {
        result.value = String(response);
    }
};
div === null || div === void 0 ? void 0 : div.addEventListener('click', divison);
var multiplication = function () {
    var v1 = (num1 === null || num1 === void 0 ? void 0 : num1.value) || '0';
    var v2 = (num2 === null || num2 === void 0 ? void 0 : num2.value) || '0';
    var response = parseFloat(v1) * parseFloat(v2);
    if (result) {
        result.value = String(response);
    }
};
fois === null || fois === void 0 ? void 0 : fois.addEventListener('click', multiplication);
