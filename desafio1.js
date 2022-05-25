/*Respondendo ao desafio 1 proposto na página do Instagram do @fabiocberg Fábio Bergmann*/

/*O objetivo do desafio é criar uma função que receba dois valores como parâmetros
e retorne true se os dois valores forem iguais e do mesmo tipo, e caso contrario retorne false*/

function desafio1(a,b){
    return a===b 
}


console.log(desafio1(0,0));
console.log(desafio1(1,1));
console.log(desafio1("0",0));
console.log(desafio1("1",1));
console.log(desafio1(1,"1"));
console.log(desafio1(0,"0"));
console.log(desafio1("1","1"));
console.log(desafio1("0","0"));
console.log(desafio1("testes","teste"));
console.log(desafio1("teste","teste"));