// nível I

function somar (a,b){
    return a+b
}
console.log(somar(3,5));

function subtrair (a,b){
    return a-b
}
console.log(subtrair(3,5));


function multiplicar (a,b){
    return a*b
}
console.log(multiplicar(3,5));

function dividir (a,b){
    return a/b
}
console.log(dividir(3,5));

// nível II

console.log ("-------------- Teste de Operações / Calculadora --------------")

// II b

function somarSubtrair(a,b){
    console.log ("somar: "+(a+b))
    console.log ("subtrair: "+(a-b))
}
console.log(somarSubtrair(30,10));

// II c

function multiplicar (a,b){
    return a*b
}
console.log(multiplicar(5,5));

// II d

function dividir (a,b){
    return a/b
}
console.log(dividir(5,5));

// II e

function dividir (a,b){
    return a/b
}
console.log(dividir(0,5));

console.log ("-------------- Teste de Operações EXTRAS / Calculadora --------------")

// nível III a

function quadradoDoNumero(a){
    return a*a
}
console.log(quadradoDoNumero(4));

// nível III b

function mediaDeTresNumeros(a,b,c){
    return ((a+b+c)/3)
}
console.log(mediaDeTresNumeros(10,20,30));

// nível III c

function calculaPorcentagem(a,b){
    return (b/100)*a
}
console.log(calculaPorcentagem(300,15));

// nível III d

function geradorDePorcentagem(a,b){
    return (a/b)*100
}
console.log(geradorDePorcentagem(2,200));
