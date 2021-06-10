window.addEventListener('load', init);

function init(){
   document.querySelector("#botao").addEventListener('click', calcular);
}

function calcular(){
   let valor = parseInt(document.querySelector("#numero").value);
   
   let notas50;
   let notas10;
   let notas5;
   let notas1;

   let restante = 0;

   notas50 = parseInt(valor/50);
   restante = valor % 50;

   notas10 = parseInt(restante / 10);
   restante = restante % 10;

   notas5 = parseInt(restante / 5);
   
   notas1 = parseInt(restante % 5);

   document.querySelector("#resultado").innerHTML = `
   Notas 50 = ${notas50} <br>
   Notas 10 = ${notas10} <br>
   Notas 5 = ${notas5} <br>
   Notas 1 = ${notas1}
   `;
}