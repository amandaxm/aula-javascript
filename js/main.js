/*
function somar(n1, n2){
    return n1 + n2;
}
alert(somar(3,4));

function setReplace(frase,nome, novo_nome){
    return frase.replace(nome,novo_nome);
}
alert(somar(3,4));
alert(setReplace("Vai japao","japao","brasil"));
*/
function validaIdade(idade){
    var validar = true;

    if(idade>=18){
        validar=true;
   }else
   validar=false;

   return validar;
    
}
var idade = prompt("Qual idade")
alert(validaIdade(idade));
/*
var nome ="Amanda";
var idade ="20";

alert("Nome "+nome+", idade "+idade);
console.log(nome.toLowerCase());
console.log(nome.toUpperCase());
console.log(idade);


var lista =["maça", "couve", "laranja"];
lista.push("uva");//insere
//lista.pop();
console.log(lista[0]);
console.log(lista.length);//tamanho
console.log(lista.reverse());//imprime lista a contrario
console.log(lista.toString());//traz a lista string
console.log(lista.join(" - "));//entre as posicoes

**/
/**
 //dicionario
var fruta ={nome: "maca", cor:"red"};
console.log(fruta);
console.log(fruta.nome);
//lista de dicionario
var frutas =[{nome: "maca", cor:"red"},{nome: "uva", cor:"roxa"}];
console.log(frutas);
console.log(frutas[1].nome);
 */
/**
 var idade = prompt("Qual sua idade?");
 if(idade>=18){
     alert("maior de idade");
 }
 else{
     alert("menor de idade");
 }
 */
/**
 * 
 
 var count =0;
 while(count <5){
    console.log(count);
    count = count+1;
 }
 */
/*
 var d =new Date();
 alert(d);
 alert(d.getMonth()+1);
 alert(d.getMinutes());
 */