"use strict";
// Entrada de Dados //
//const dadosUser = document.getElementById("");
Object.defineProperty(exports, "__esModule", { value: true });
function Interface() {
    const dadosUser = {
        id: 1,
        name: "Lucas",
        idade: 10,
        logar: () => console.log(`Logado`),
    };
    dadosUser.logar();
    console.log(dadosUser);
}
// Class
function Class() {
    console.log("Esse é Orientado á Objeto. PARE");
}
// Enum
function Enum() {
    let Direcao;
    (function (Direcao) {
        Direcao["Norte"] = "NORTE";
        Direcao["Sul"] = "SUL";
        Direcao["Leste"] = "LESTE";
        Direcao["Oeste"] = "OESTE";
    })(Direcao || (Direcao = {}));
    const options = Object.values(Direcao);
    const sort = Math.floor(Math.random() * options.length);
    console.log(options[sort]);
}
// Array
/* colocar "[ ]" declara que é array, recebe so daquele tipo */
function Vava() {
    let numbers = [20, 30, 40];
    let numeros = [20, 30, 40];
    let numAsString = [20, 30, 40, "Lucas", "Bruno"];
    let num = [20, 30, 40, "Lucas"];
    numbers.push(50); //add atras
    numbers.unshift(10); //add na frente
    numbers.pop(); //remove o ultimo
    numeros.shift(); //remove o primeiro
    console.log(numbers);
    // Esse array (Read Only) não é possivel add nem remover:
    let num_ro = [200, 300, 400];
    console.log(num_ro);
}
//Tuple
//Object
