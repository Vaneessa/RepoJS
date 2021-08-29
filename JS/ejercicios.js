//---Entrega clase 14/08---//

//Ejemplo 1 con while

//let respuesta = prompt("Adivina la respuesta: Canta sin tener voz, puede volar sin tener alas, sin tener dientes muerde y sin boca habla.");

//while(respuesta != "viento"){
//alert("La respuesta que ingresaste es: "+ respuesta);

//respuesta = prompt("Ups, no es correcto! Por favor volvé a intentar.");

//}


//Ejemplo 2- Función para calcular promedio en form

 //function Calcular() { 
    // let notaUNO = document.getElementById('n1').value; 
    //let notaDos = document.getElementById('n2').value; 
    //let notaTres = document.getElementById('n3').value; 
    //let promedio = (parseFloat(notaUNO) + parseFloat(notaDos) + parseFloat(notaTres)) /3; document.getElementById('promedio').innerHTML = promedio; 
    //}

//---Fin entrega clase 14/08---//



//---Entrega clase 21/08 primeros OBJETOS/ARRAYS para simulador de compra de indumentaria---//

//Ej 1

const pantalon = { estilo: "Foxy",
                   talle: 39,
                   tela: "jean",
                   color: "rojo"};
                   
console.log(pantalon.talle);
console.log(pantalon.estilo.toUpperCase());


//Ej2

function Short(estilo, talle, tela, color) {
   this.estilo = estilo;
   this.talle 	 = talle;
   this.tela  = tela;
   this.color = color;
}
const ShortUno = new Short("Pepe1", 1, "algodon", "violeta");
const ShortDos = new Short("Pepe2", 2, "jean", "celeste");
const ShortTres = new Short("Pepe3", 2, "gabardina", "negro");

console.log(ShortUno);



// Ej3

let remeras = [
   {
     "color": "blanco",
     "tipo": "algodón",
     "talle": 1
   },
   {
     "color": "rojo",
     "tipo": "seda",
     "talle": 5
   },
   {
      "color": "azul",
      "tipo": "modal",
      "talle": 2
   },
   {
      "color": "azul",
      "tipo": "lycra",
      "talle": 3
   }
 ]
 
 
 let remerasColor = remeras.filter(remera => remera.color === "azul");
console.log(remerasColor);

//Ej4

const Uno = ["Rubia", 5,7,"Marta"];
const Dos = ["Morocha",6,9,"Claudia"];
const nuevoArray = Uno.concat(Dos);

console.log(nuevoArray);

nuevoArray.push('pepito');
console.log(nuevoArray.length);



//---Fin entrega clase 21/08---//