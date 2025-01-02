let nome = 'Gabriel'; //uma variavel string
let idade = 20; //uma variavel number
let logado = true; //uma variavel boolean
let lista = ['Ovo', 'Massa', 'Corante', 20]; //um array com 3 string e 1 number
let nomeCompleto = { nome: 'Pedro', idade: 20 }; //um object especificando variaveis dele
console.log(nome); //mostrar no console a variavel string
console.log(idade); //mostrar no console a variavel number
console.log(logado); //mostrar no console a variavel boolean
console.log(lista); //mostrar no console o array
console.log(nomeCompleto.nome); //mostrar no console a variavel (nome) que ta dentro de um objeto
console.log(nomeCompleto); //mostrar no console todo o objeto e suas variaveis

console.log('-------------------------------------EXERCICIO-----------------------------------------------------');

let carro = 'Ferrari';
console.log('O nome do carro é ' + carro);

let precoBolo = 19.99;
console.log('O preço do bolo é ' + precoBolo);

let cidade = 'São Paulo';
console.log('O nome da cidade é ' + cidade);

console.log('-------------------------------------FORMA VARIAVEIS----------------------------------------------');

let nome1 = 'Arroz'; //a variavel (let) permite que a gente mude o valor dela, como no exemplo abaixo que mudei para feijao
console.log(nome1);
nome1 = 'Feijão';
console.log(nome1);

const idade1 = 20; //a variavel (const) nao permite que eu mude o valor dela
console.log(idade1);
//idade1 = 30; //isso aqui daria um erro

console.log('-------------------------------------OPERAÇÕES VARIAVEIS--------------------------------------------');

let x = 2;
x = x + 8;
console.log(x); //uma operação matemática só acontece quando trabalhamos com number

let n1 = 20;
let n2 = 30;
let n3 = 50;
let resultado = (n1 + n2) * 3; //matematica basica, entre parenteses primeiro
console.log(resultado);

console.log('-------------------------------------TEMPLATE STRING-----------------------------------------------');

let nome2 = 'Gabriel';
let sobrenome2 = 'Paiva';
let nomeCompleto2 = `${nome2} ${sobrenome2} Brazil`; //o jeito certo de concatenar = Gabriel Paiva Brazil
console.log(nomeCompleto2);

console.log('-------------------------------------CONDICIONAL If / else-------------------------------------------');

let idade3 = 90;

if (idade3 >= 18) {
  //se (idade3) for maior ou igual a 18
  console.log(`voce é maior de idade`);
} else {
  console.log(`voce é menor de idade`);
}

// <  menor
// >  maior
// ==  igual
// <=  menor ou igual
// >=  maior ou igual
// !=  diferente
// ===  igual mas de um jeito rigoroso, precisa ser o mesmo valor e o mesmo tipo
// &&  E,and
// ||  OU

//exemplo do uso do ===

let idade4 = 20;

if (idade4 === 20) {
  idade4 = idade4 + 5;
  console.log(`A sua idade agora é de ${idade4} anos`);
} else {
  console.log(`A idade precisa ser 20`);
}

console.log('-------------------------------------Multi-condicionais (&& e ||)---------------------------------------');

//exemplo do uso de && e ||

let idade5 = 80;
if (idade5 >= 18 && idade5 < 60) {
  //se (idade5) dor maior ou igual a 18 E(&&) menor que 60, executa abaixo, se tivesse(||), seria OU
  console.log(`Sua idade é de ${idade5} e voce é adulto`);
} else if (idade5 < 18) {
  console.log(`Sua idade é de ${idade5} e voce é menor de idade`);
} else {
  console.log(`Sua idade é de ${idade5} e voce é idoso`);
}

console.log('-------------------------------------Desmistificando o IF---------------------------------------');

let idade6 = 25;

let idoso = idade6 >= 60;
let crianca = idade6 <= 17;
let adulto = idade6 >= 18; //essa variavel é redundante, pois eu nao a utilizei no codigo abaixo

if (idoso) {
  console.log('voce é idoso');
} else if (crianca) {
  console.log('voce é criança');
} else {
  console.log('voce é adulto');
}

console.log('-------------------------------------Exercício de condicional #2---------------------------------------');

//resultado precisa ser (true)
let x1 = 10;
let y1 = 5;
console.log(x1 > y1);

//resultado precisa ser (false)
let w1 = '10';
let z1 = 10;
console.log(w1 === z1);

//resultado precisa ser (true)
let a1 = 10;
let b1 = 5;
console.log(x1 != y1);

//condicional se o preço da carne ta caro ou barato, ate 45 ta barato
let preco = 40.3;
let precoCaro = preco > 45; //nesse caso nao preciso declarar uma variavel de (precoBarato), pois seria redundante

if (precoCaro) {
  console.log(`O preço é de ${preco}$ e está caro`);
} else {
  console.log(`O preço é de ${preco}$ e está barato`);
}
