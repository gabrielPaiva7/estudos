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
