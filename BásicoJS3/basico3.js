console.log(`-----------------------------------OBJETOS----------------------------------------------------`);

let personagem = {
  nome: `Gabriel`,
  idade: 22,
  pais: `Brasil`,
  olhosCor: ['Preto', 'Vermelho'],
  atributos: {
    forca: 20,
    magia: 20,
    destreza: 70,
    vitalidade: 30,
  },
};
console.log(personagem);
console.log(personagem.nome); //escolhendo oq mostrar dentro de um objeto
console.log(personagem.atributos.destreza); //mostrando um objeto dentro de outro objeto
console.log(personagem.olhosCor[0]); //mostrando um array dentro de um objeto

console.log(
  //utilizando os conceitos acima
  `${personagem.nome} tem ${personagem.idade} anos, mora em ${personagem.pais}, tem uma destreza de ${personagem.atributos.destreza}, e seu olho esquerdo é ${personagem.olhosCor[0]}`
);

console.log(`--------------------------------ACESSANDO E ALTERANDO OBJETOS-------------------------------------------`);

personagem.idade = 30; //mudei a idade para 30
personagem.atributos.destreza += 5; //adicionei 5 de destreza, += significa incrementar 5
personagem.olhosCor.push(`verde`); //adicionei verde aos olhos

console.log(personagem.idade); //30 no console
console.log(personagem.atributos.destreza); //75 no console
console.log(personagem.olhosCor); //preto,vermelho,verde no console

console.log(`--------------------------------ACESSANDO E ALTERANDO OBJETOS2------------------------------------------`);

let personagem2 = {
  nome: 'Gabriel',
  idade: 22,
  carros: [
    //carros é um array com 2  itens, e dentro de cada item eu tenho um objeto com 2 propiedades
    {
      modelo: 'Fiat',
      cor: 'azul',
    },
    {
      modelo: 'Ferrari',
      cor: 'vermelho',
    },
  ],
};
console.log(personagem2.carros[0].modelo); //acessando o modelo do primeiro objeto do array

console.log(`--------------------------------FUNCAO DENTRO DE OBJETO------------------------------------------`);

let pessoa = {
  nome: `Gabriel`,
  sobrenome: `Paiva`,
  idade: 90,
  //A FUNCAO ARROW NAO TEM ACESSO AOS DADOS DO OBJETO
  nomeCompleto: () => {
    return 'blablabla';
  },
};
console.log(`${pessoa.nome} ${pessoa.sobrenome}`);

console.log(pessoa.nomeCompleto()); //chamando uma funcao que esta dentro de um objeto

console.log('--------------------------------------------------------------------------------------------');

let pessoa2 = {
  nome: 'Gabriel',
  sobrenome: 'Paiva',
  idade: 90,
  //ESSA FUNCAO EU TENHO ACESSO AOS DADOS DO OBJETO USANDO O THIS
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};
console.log(pessoa2.nomeCompleto()); //chamando uma funcao que esta dentro de um objeto

console.log('--------------------------------------LOOP FOR------------------------------------------------------');

// index = 10 é o contador inicial, ou seja o loop começa no numero 0, index<10 é ate onde esse contador vai, enquanto for menor que 10, vai se repetir, index++ vai incrementar o contador uma vez a cada repetição
for (let index = 0; index <= 10; index++) {
  console.log(index);
  console.log('Gabriel'); //vai exibir gabriel 10 vezes
}

console.log('--------------------------------------LOOP EM ARRAY-----------------------------------------------------');

let lista = ['preto', 'branco', 'azul', 'vermelho'];
lista.push('verde');

for (let n = 0; n < lista.length; n++) {
  console.log(lista[n]);
}

console.log('--------------------------------------LOOP EM ARRAY DO JEITO CERTO--------------------------------------');

let cores = ['azul', 'preto', 'vermelho', 'verde'];
cores.push('rosa');

for (let count in cores) {
  //o console.log dentro do loop
  console.log(cores[count]); //crio a variavel count e uso o "in" no array, depois mostro na tela
}

console.log('--------------------------------------LOOP EM ARRAY DO JEITO CERTO2------------------------------------');
for (let cor of cores) {
  console.log(cor); //crio a variavel cor e uso o "of" no array, e pra exibir é assim
}

console.log('--------------------------------------LOOP EM ARRAY DO JEITO CERTO3------------------------------------');

let cores2 = [
  { cor: 'azul', qt: 5 },
  { cor: 'verde', qt: 4 },
  { cor: 'vermelho', qt: 7 },
];
for (let cor2 of cores2) {
  console.log(cor2.cor.toUpperCase()); //usando o for of para acessar objetos de um array
  console.log(cor2.qt);
}
console.log('--------------------------------------------------------------------------');

for (let cor3 in cores2) {
  console.log(cores2[cor3].cor.toUpperCase()); //usando o for in para acessar os objetos de uma string
}
// O In seria o índice (posição) de cada cor sendo: 0, 1, 2...
// percebe q quando você for no console, vai lhe mostrar a cor e o indice(posição) daquela cor. Então, em caso de vc estiver
// trabalhando com um Array muito grande e queira fazer a manipulação de posições, acredito que o mais adequado seria o IN
//--------------------------------------------------------------------------------------------------------------------------------------
// o OF é usado quando queira somente os valores dos arrays/objetos. (sem índice)

console.log('------------------------------------LOOP WHILE---------------------------------------------------------');

let numero = 0;

while (numero < 10) {
  console.log(`O numero da vez é ${numero}`);
  numero++;
}
//while precisa de criar a variavel antes de usar, e usar o "numero++" dentro do codigo

console.log('------------------------EXERCICIO LOOP-----------------------------');

//faça um loop que mostre todas as frutas
let fruits = ['Maça', 'Uva', 'Banana'];

for (let fruit of fruits) {
  console.log(fruit);
}
console.log('-------------------------------------');
for (let fruit2 in fruits) {
  console.log(fruits[fruit2]);
}

console.log('---------------------------------------------------------------------');

//conte de 1 até 10 através de um while
let count2 = 1;

while (count2 <= 10) {
  console.log(count2);
  count2++;
}

console.log('----------------------------ORDENAÇÃO DE ARRAY-----------------------------------------');

let fruits3 = ['Maçã', 'Uva', 'Laranja', 'Banana'];
fruits3.sort(); //o sort ordenou a lista em ordem alfábetica, meu item 0 agora é banana
fruits3.reverse(); //o reverse inverte o array, combinando com o sort, vai inverter a ordem alfabetica
console.log(fruits3);

console.log('--------------------------------------------------');
