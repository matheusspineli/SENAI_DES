//var - escopo global
//let - escopo local
// const - escopo global e o valor não altera

var nome = "fulano";//string
var idade = 50.5;
var habilitado = true;

console.log(habilitado);//imrpime no terminal

console.log(typeof(habilitado));

/*
igualdade ==
diferente !=
estritamente igual ===
estritamente diferente !==
maior >
menor <
menor igual <=
*/

var a = "10";
var b = 10;


console.log(a+b);

if(a == b) {
    console.log("são iguais");
}else {
    console.log("são diferentes");
}