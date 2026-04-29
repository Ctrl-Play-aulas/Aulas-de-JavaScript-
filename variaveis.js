//Variáveis 
// O que é uma variavel?
// São espaços na memoria do pc usados para armazenar dados 

let nome = "Bredon"; // variável de tipo de texto (String)
let idade = 26; // Variável de tipo Numerico (Number)
let carteiraDeMotorista = false; // Variável de tipo Booleano (Boollean)
//alterando o valor da variavel 
idade = 27;

const anoDeNascimento = 1999; //const (constante) não pode ser alterado o valor como no let 

//anoDeNascimento = 2000; ----> NÃO PODE FAZER ISSO

//imprimeindo tipos de variáveis
console.log( typeof nome);
console.log( typeof idade);
console.log( typeof carteiraDeMotorista)

// imprimindo os valores das variaveis 
console.log("Olá meu nome é "+nome);
console.log("Eu tenho "+idade+" anos");
console.log("Eu nasci no ano de "+ anoDeNascimento)


//Fazendo calculos simples com JS

console.log("10"+10)
console.log("20"-10)

