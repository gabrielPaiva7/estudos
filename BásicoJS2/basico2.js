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

let colors = ['blue', 'red', 'green']; //um array simples mostrando uma lista de cores
console.log(colors[1]); //mostrando no console o item 1 do array, que é o 'red', pois se começa com 0
console.log(colors);

let idades = [10, 20, 30, 15, 12, 14]; //array com numbers
console.log(idades);

let listaCoisas = ['arroz', 30, true]; //array com varios tipos de dados
console.log(listaCoisas);

let listaGrande = ['feijão', listaCoisas]; //to colocando um array dentro de outro array
console.log(listaGrande);

let listaCoisas2 = ['carne', [20, 30, 50, 'óleo'], true]; //ABRINDO um array dentro de outro array
console.log(listaCoisas2);
console.log(listaCoisas2[1]); //esta exibindo no console o array que eu criei dentro desse outro array
console.log(listaCoisas2[1][3]); // to exibindo o item 3 "óleo" do array dentro do array
let itemOleo = listaCoisas2[1][3]; //armazenando numa variavel, pois assim pode reaproveitar
console.log(itemOleo);

console.log('-------------------------------------OPERAÇÕES BÁSICAS DE ARRAY-------------------------------------');

let ingredientesBolo = ['agua', 'farinha', 'ovo', 'corante', 'cola', 'sal'];

ingredientesBolo.push('cebola'); //esta funcao adiciona um item ao final do array
ingredientesBolo.unshift('alho'); //esta funcao adiciona um item no começo da array
ingredientesBolo.shift(); //esta funcao remove o primeiro item de um array (removeu alho)
ingredientesBolo.pop(); //esta funcao remove o ultimo item de um array (removeu cebola)

console.log(`total de ingredientes: ${ingredientesBolo.length}`); //o .length me mostra o numero total de itens nessa string
console.log(ingredientesBolo);

console.log('-------------------------------------EXERCICIO ARRAY-------------------------------------');

//1. No array abaixo, qual o numero que pega a Ferrari?
let carros = [`BMW`, `Ferrari`, `Mercedes`];
let numFerrari = 1;
console.log(`1. ${carros[1]}`);

//2. Troque a Ferrari por Audi
carros[1] = 'Audi';
console.log(`2. Lista com Audi:`);
console.log(carros);

//3. Adiciona o Volvo na lista
carros.push(`Volvo`);
console.log(`3. Lista com Volvo:`);
console.log(carros);

//4.Exiba quantos itens tem no array
console.log(`4. Itens no array: ${carros.length}`);
