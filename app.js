/*Váriaveis*/
var nome = "Gi"
let sobrenome = "Leite" // vamos utilizar essa forma
nomedomeio = "Martins"

let n1 = 2
let n2 = 9.5
let comida = 'maçã'
let fumante = false

console.log(n1, n2, comida, fumante)

/*Tipos de dados */
console.log(typeof n1) //number
console.log(typeof n2) // 9.5 é number
console.log(typeof comida) //'maçã' é string
console.log(typeof fumante) // false é boolean

let veiculos = ['carro', 'moto', 'avião'] // array
console.log(typeof veiculos) //todo array é do tipo objeti em js

let salvar = function () {

}
console.log(typeof salvar) // salvar é do tipo function

/* Estruturas de decisão */
/*
if (condição) {
    valor se a condição for verdadeiro
} else {
    valor se a condição for falso 
}
*/
let numero = 10
if (nota >= 5) {
    console.log("Passou")
} else {
    console.log("Reprovou")
}

if (nota >= 5) { //if sem else
    console.log("Parabéns, está aprovado")
}
if (nota >= 7) { // if com + condições
    console.log("Aprovado")
}
else if (nota >= 5) {
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}

let dia = 2
switch (dia) {
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("Sábado")
        break
    case 8:
        console.log("Domingo")
        break
    default:
        console.log("Dia inválido")
               }

/* Estrutura de repetição */
let contador = 1
while (contador <= 10) {
console.log(contador)
contador++ //contador = contador + 1
}

for(let contador2 = 10; contador2<=20; contador2++) {
    console.log (contador2)

}

/* 
while(condição){
    código do laço de repetição
}

for (inicialização; condição; incremento) {
    código do laço de repetição
}
*/
