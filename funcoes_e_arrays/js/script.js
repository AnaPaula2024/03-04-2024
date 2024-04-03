// function minhaFuncao(){
//     console.log("Testando")
// }

// minhaFuncao()
// minhaFuncao()
// minhaFuncao()
// minhaFuncao()


// const minhaFuncaoEmvariavel = function(txt){
//     console.log(`Imprimindo: ${txt}`)
// }

// minhaFuncaoEmvariavel("sapato")
// minhaFuncaoEmvariavel("colher")
// minhaFuncaoEmvariavel(5+5)

// const a = 10;
// const b = 20;
// const c = 30;
// const d = 40;

// function soma(n1, n2){
// console.log(`A soma entre ${n1}} + ${n2} é = ${n1 + n2}`)
// console.log(`A sub entre ${n1}} - ${n2} é = ${n1 - n2}`)
// console.log(`A div entre ${n1}} / ${n2} é = ${n1 / n2}`)
// console.log(`A mult entre ${n1}} * ${n2} é = ${n1 * n2}`)

// }

// soma(a,b)
// soma(c,b)
// soma(d,b)

// function raizQuadrada (numero){
//    console.log(numero * numero)
// }

// raizQuadrada (2)

// function raizQuadrada (numero){
//    return numero * numero
// }

// console.log(raizQuadrada(4))


// const raizquadrada = (numero) => {
//    return numero * numero
// }

// console.log(raizQuadrada(4))


// Função anônima

// const testeArrow = () =>{
//     console.log("Essa é uma arrow function")
// }

// testeArrow()

// const parOuImpar = (n) => {
//     if(n % 2 === 0){
//         console.log(`${n} é par`)
//         return
//     }
//     console.log("Impar")
// }

// parOuImpar(2)

const lista = [1, 2, 3, 4, 5]

console.log(lista)
console.log(typeof lista)
console.log(lista[1])
console.log(lista[0])
// console.log(lista[6])       undefined
console.log(lista.length)

// lista todas as variaves sempre começando do 0, primeira posição

const lista2 = ["Fusca", "variant", "Chevete", "Golf", "Opala", "Brasilia"]
for (let i = 0; i < list.length; i++){
    console.log(`Elemento da lista: ${lista[i]}`)
}

// for seria onde a variavel começa onde termina e como se repete a  variavel

// quantos elementos tem na lista o tipo de dado é Array

// sempre começa a contar do 0 a Array
// length: ele é o cumprimento de quantas posições tem que começa do 0, mas tem 5 elementos.

// por exemplo são 6 posições com 5 elementos que começa a partir do 0


// Escreve uma array chamado cores, dentro dessa array escreva, azul, amarelo, verde, vermelho, branca. Escreva uma estrutura de repetição laço para retornar todos os elementos da array.

// const cores = ["Azul", "Amarelo", "Vermelho", "Verde", "Branco"]
//     for(let i = 0; i < cores.length; i++){
//      console.log(`Essas são as cores da lista: ${cores[i]}`)
//     }

// const nuns = [1, 2, 3, 4, 5]

// nums.forEach((n) =>{
//     console.log(`O número atual é: ${n}`)
// })

// const numbers = [5, 12, 4, 22];
// const otherNumbers = [1, 2, 3];
// const allNumbers = numbers.concat(otherNumbers)
// console.log(allNumbers);

// const text = "algum texto";
// const text2 = "EITA JOVEM";
// console.log(text.toUpperCase());
// console.log(text2.toLocaleLowerCase());

// const array = ["a", "b", "c"];

// array.push("d");

// console.log(array);
// console.log(array.length);


// array.pop();
// const itemRemovido = array.pop();

// console.log(itemRemovido);
// console.log(array);
// console.log(array.length);

// array.push("Dá", "Para", "Inserir", "vários");

// console.log(array);

const letters = ["a", "b", "c"];

const letter = letters.shift();

console.log(leter);
console.log(letters);

letters.unshift("z", "x", "y");
letters.unshift("p");
console.log(letters);

