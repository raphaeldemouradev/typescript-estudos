//Boolean
var isTrue = true;
var isFalse = false;
if (isTrue) {
    console.log("O precesso começou.");
}
;
if (isFalse) {
    console.log("Cancelado.");
}
;
//Number
var num1 = 6;
var num2 = 7;
console.log("Resultado entre ".concat(num1, " e ").concat(num2, " \u00E9: ").concat(num1 + num2));
//String
var nameP = "Lucas";
var nameR = "isso é uma string";
console.log("Resultado ".concat(nameP, " \u00E9 ").concat(nameR));
//Void - função returna nada
function noop() {
    return;
}
//Undefined - não me disseram nada } strictNullChecks, deve ser ligado
//Null - não fiz nada              }
function func(x) {
    if (x === null) {
    }
    else {
        console.log('Hello, ' + x);
    }
}
;
