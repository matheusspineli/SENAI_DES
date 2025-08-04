// exercicio 1

var nome = "matheus";
console.log("Olá",nome);
console.log("------------");
//exercicio 2

/*
soma +
subtração -
multiplicação *
divisão /
modulo %
*/

var a = 10;
var b = 10;

console.log("soma = "+ (a+b));
console.log("subtração = "+(a-b));
console.log("multiplicação = " +(a*b));
console.log("divisão = "+(a/b));
console.log("------------");
//exercicio 3

var altura = 10;
var largura = 10;

console.log("Area do retângulo é = "+(altura*largura));
console.log("------------");
//exercicio 4

var nascimento = 1981;
var atual = 2025 - nascimento;


 if(atual >= 18) {
    console.log("Você é maior de idade");
}else {
    console.log("Você é menor de idade");
}
console.log("------------");
//exercicio 5

var numero = 5;

if(numero %2 == 0) {
    console.log("O numero é par");
}else {
    console.log("O numero é impar");
}

console.log("------------");

//exercicio 6

var n1 = 10;
var n2 = 9;
var n3 = 8;
var média = 7;

console.log((n1 + n2 + n3) / 3);

if(média = 10) {
    console.log("A");
}

 else if(média = 9){
    console.log("B");
}

else if(média = 8){
    console.log("c");
}

else if(média < 7) {
    console.log("reprovado");
}


//exercicio 7
for(let i = 0; i <= 200; i++) {
    if ( i % 2 == 0) {
          console.log(i);  
    }
}

//exercicio 8

var numero = 6;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
    fatorial *=i;
}
console.log("O fatorial de", numero, "é", fatorial);


//exercicio 9

for(let i = 0; i <= 1000;i += 3) {
    console.log(i);
}
