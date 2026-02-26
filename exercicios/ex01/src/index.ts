//Boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

if (isTrue) {
    console.log("O precesso começou.");
};

if (isFalse) {
    console.log("Cancelado.");
};

//Number
let num1: number = 6;
let num2: number = 7;

console.log(`Resultado entre ${num1} e ${num2} é: ${num1 + num2}`);

//String
const nameP: string = "Lucas";
const nameR: string = "isso é uma string";
console.log(`Resultado ${nameP} é ${nameR}`);

//Void - função returna nada
function noop() {
  return;
}

//Undefined - não me disseram nada } strictNullChecks, deve ser ligado
//Null - não fiz nada              }
function func(x: string | null) {
    if (x === null) {
        
    } else {
        console.log('Hello, ' + x)
    }
};

