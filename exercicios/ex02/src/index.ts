// Entrada de Dados //
//const dadosUser = document.getElementById("");

// Interface
interface Usuario {
    id: number,
    name: string,
    idade: number,
    logar(): void,
}

function Interface() {
    const dadosUser: Usuario = {
        id: 1,
        name: "Lucas",
        idade: 10,
        logar: () => console.log(`Logado`),   
    }

    dadosUser.logar()
    console.log(dadosUser)
}
// Class
function Class() {
    console.log("Esse é Orientado á Objeto. PARE")
}

// Enum
function Enum() {
    enum Direcao {
        Norte = "NORTE",
        Sul = "SUL",
        Leste = "LESTE",
        Oeste = "OESTE",
    }

    const options = Object.values(Direcao)

    const sort = Math.floor(Math.random() * options.length)

    console.log(options[sort]);
}

// Array
/* colocar "[ ]" declara que é array, recebe so daquele tipo */
function Vava() {
    let numbers: number[] = [20, 30, 40]

    let numeros: Array<number> = [20, 30, 40]

    let numAsString: Array<number | string> = [20, 30, 40, "Lucas", "Bruno"]

    let num: (number|string)[] = [20, 30, 40, "Lucas"]

    numbers.push(50) //add atras
    numbers.unshift(10) //add na frente

    numbers.pop() //remove o ultimo
    numeros.shift() //remove o primeiro

    console.log(numbers)

    // Esse array (Read Only) não é possivel add nem remover:
    let num_ro: ReadonlyArray <number> = [200, 300, 400]

    console.log(num_ro)
}

//Tuple
let Tupla: [string, string, number];

Tupla = ['Lucas', 'Ronaldo', 25];

//Object (Tipos de objetos em TypeScript)
/* Opcional geralmente usado para diferenciar 2 interfaces (igual interface) */
enum Gen {
    Male,
    Famele,
}

enum Mod {
    Adm,
    Oper,
    UserComun,
}

type User = { // "Ei voçê pode me usar como tipagem também"
    name: string,
    age: number,
    gen: string,
    mod: string,
}