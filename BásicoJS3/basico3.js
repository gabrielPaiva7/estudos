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
  console.log(cores[count]);
}

console.log('--------------------------------------LOOP EM ARRAY DO JEITO CERTO2------------------------------------');
