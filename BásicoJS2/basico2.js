console.log('-------------------------------------FUNÇÕES-----------------------------------------------------');

function somar(n1, n2) {
  //criei uma funcao, e dei duas variaveis a ela
  return n1 + n2; //aqui eu usei as variaveis que criei acima, para por exemplo somar elas, encerra a função
}
let soma1 = somar(20, 30); //criei uma variavel para usar minha funcao, e dei o valor dos parametros de 20 e 30, como meu return é uma soma delas, o console.log vai ser 50
let soma2 = somar(50, 50); //criei outra variavel para usar minha funcao, e dei o valor dos parametros de 50 e 50, como meu return é uma soma delas, o console.log vai ser 100
console.log(soma1, soma2); // resultado das minhas variaveis

console.log('-------------------------------------FUNÇÃO COM RETORNO CONDICIONAL-------------------------------------');

function maiorDeIdade(idade) {
  if (idade >= 18) {
    return true;
  } else {
    return false;
  }
}
let idade = 18; //essa variavel idade é possivel pois a variavel que esta na funcao so funciona na funcao
let minhaIdade = maiorDeIdade(idade);
console.log(minhaIdade);

console.log('-------------------------------------EXERCICIO FUNCAO-------------------------------------');

function calcPct(x, y) {
  return (x * y) / 100;
}

let numero = 100;
let porcentagen = 10;
let resultado = calcPct(numero, porcentagen);
console.log(resultado);

console.log('-------------------------------------EXERCICIO FUNCAO2-------------------------------------');
function calcPreco(quartos, metragem) {
  m2 = 3000; //o preço do m2 é 3000
  let preco = metragem * m2; //criei a variavel preco e coloquei o valor do m2
  if (quartos === 1) {
    preco = metragem * (m2 * 1); //se for um quarto, é o valor padrao
  } else if (quartos === 2) {
    preco = metragem * (m2 * 1.2); //se for dois, é o valor(3000) vezes  1.2
  } else if (quartos === 3) {
    preco = metragem * (m2 * 1.5); //e se for tres, é vezes 1.5
  }
  return preco; //o resuldado da função, me retornando o preco
}

let metragem = 123; //aqui eu criei outra variavel, pois esta fora da função
let quartos = 3; //outra variavel, mostrando o numero de quartos

let preco = calcPreco(3, 123); //e aqui calculando o resultado
console.log(preco);

console.log('-------------------------------------EXERCICIO FUNCAO3-------------------------------------');

function validarUserPass(user, pass) {
  let nome = 'Pedro';
  let senha = 123;
  if (user === nome && pass === senha) {
    return 'Acesso concedido';
  } else {
    return 'Acesso negado';
  }
}
let meuNome = 'Pedro';
let minhaSenha = 123;

let validacao = validarUserPass(meuNome, minhaSenha);
console.log(validacao);

console.log('-------------------------------------ARROW FUNCTION-------------------------------------');

const media = (n1, n2) => {
  let resultado = (n1 + n2) / 2; //calculando a média de dois itens
  return resultado;
};
const n1 = 20;
const n2 = 60;

const media7 = media(n1, n2);
console.log(media7);

console.log('-------------------------------------CALCULADORA-------------------------------------');

const calculadoraa = (n1, n2, operador) => {
  if (operador === '+') {
    return n1 + n2;
  } else if (operador === '-') {
    return n1 - n2;
  } else if (operador === '*') {
    return n1 * n2;
  } else if (operador === '/') {
    return n1 / n2;
  } else {
    return 'Digite um operador válido';
  }
};

// let calcn1 = Number(prompt('Digite um número'));
// let calcn2 = Number(prompt('Digite outro número'));
// let calcoperador = prompt('Digite o operador');

// let calcs = calculadoraa(calcn1, calcn2, calcoperador);
// console.log(calcs);

console.log('-------------------------------------FUNCAO 1 LINHA-------------------------------------');

const somar5 = (n11, n22) => n11 + n22; //isso é uma funcao que so funciona em 1 linha
console.log(somar5(5, 6)); //estou mandando pro console a soma de 5+6(n11+n22)

console.log('-------------------------------------FUNCAO SIMPLES SOBRENOME-------------------------------------');

function sobrenome1(sob) {
  return 'Gabriel ' + sob;
}
console.log(sobrenome1('Paiva'));

console.log('-------------------------------------FUNCAO ADD 1-------------------------------------');

function add() {
  let numeroAdd = 0;
  numeroAdd++; //isso aqui é o mesmo que (numeroAdd = numeroAdd+1)
  return numeroAdd; //esta retornando o 0 da varuavel com o incremento de 1 (numeroAdd++)
}
let resultadoAdd = add();
console.log(resultadoAdd);

console.log('-------------------------------------FUNCAO DENTRO DE FUNCAO-------------------------------------');
function addSquare(n1, n2) {
  //funcao para pegar duas raiz quadrada e somar
  const square = (num) => {
    //uma arrow function dentro de uma function que calcula o valor da raiz quadrada e joga no (num)
    return num * num; //retornando num*num que é a raiz quadrada do numero e finalizando a arrow funcao
  };

  let square1 = square(n1); //usando a arrow function para calcular a raiz quadrada da primeira funcao(n1)
  let square2 = square(n2); //usando a arrow function para calcular a raiz quadrada da primeira funcao(n2)
  return square1 + square2; //retornando o valor que eu quero, que é a soma das raizes e finalizando a funcao
}
console.log(addSquare(2, 3));

console.log('-------------------------------------Array-------------------------------------');

let colors = ['blue', 'red', 'green'];
console.log(colors);
