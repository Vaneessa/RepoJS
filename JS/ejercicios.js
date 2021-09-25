//--------------------------------------------------Entrega clase 14/08-----------------------------------------------------//

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

//--------------------------------------------------Fin entrega clase 14/08------------------------------------------------//



//--------------Entrega clase 21/08 primeros OBJETOS/ARRAYS para simulador de compra de indumentaria-----------------------//

//Ej 1

const pantalon = { estilo: "Foxy",
                   talle: 39,
                   tela: "jean",
                   color: "rojo"};


const pantalon1 = { estilo: "Flower",
                   talle: 36,
                   tela: "jean",
                   color: "azul"};   
                   
const pantalon4 = { estilo: "Summer",
                   talle: 28,
                   tela: "jean",
                   color: "amarillo"};

const pantalon3 = { estilo: "Spring",
                   talle: 39,
                   tela: "jean",
                   color: "rojo"};

console.log(pantalon3.talle);
console.log(pantalon1.tela);
console.log(pantalon4.estilo.toUpperCase());


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
     "producto": "Remera Spring",
     "color": "blanco",
     "tipo": "algodón",
     "talle": 1
   },
   {
     "producto": "Remera Summer",
     "color": "rojo",
     "tipo": "seda",
     "talle": 5
   },
   {
      "producto": "Remera Galaxi",
      "color": "azul",
      "tipo": "modal",
      "talle": 2
   },
   {
      "producto": "Remera Ocean",
      "color": "azul",
      "tipo": "lycra",
      "talle": 3
   }
 ]
 
 
 let remerasColor = remeras.filter(remera => remera.color === "azul");
console.log(remerasColor);

//Ej4

const prendasUno = ["pollera", "saco", "bufanda","pañuelo"];
const prendasDos = ["guante","campera","bota"];
const nuevoArray = prendasUno.concat(prendasDos);

nuevoArray.push('cartera');

console.log(nuevoArray);
console.log(nuevoArray.length);



//-------------------------------------------Fin entrega clase 21/08----------------------------------------------------//


//-------------------------------------------Entrega STORAGE, JSON y DOM clase 28/08-----------------------------------//

//EJ1 Mensaje de bienvenida

localStorage.setItem('bienvenido', '¡Bienvenido a mi tienda!');

let mensajeBienvenida =  localStorage.getItem('bienvenido');

console.log(mensajeBienvenida);



//EJ2 Usando objeto pantalon de la entrega anterior

const usandoJSON    = JSON.stringify(pantalon);

console.log(usandoJSON); 
console.log(typeof pantalon); 
console.log(typeof usandoJSON);  

localStorage.setItem("pantalon", usandoJSON);

const pantalon2 = JSON.parse(localStorage.getItem("pantalon"));
console.log(pantalon2.estilo);      


//EJ3 para mostrar u ocultar un elemento del HTML a partir del id del div

function miFuncion() {
   var x = document.getElementById('ropa');
   if (x.style.display === 'none') {
       x.style.display = 'block';
   } else {
       x.style.display = 'none';
   }
}

//EJ4 Mostrar por consola a partir de elementos del HTML por id O class


let h2 = document.getElementById("texto");

console.log(h2.innerHTML);

let probando = document.getElementsByClassName("pruebo");
console.log(probando[0].innerHTML);
console.log(probando[1].innerHTML);
console.log(probando[2].innerHTML);


//EJ5 creando nuevo elemento a partir del array 'remeras' creado en entrega previa

for (const otraRemera of remeras) {
   let nuevoContenedor = document.createElement("div");
   nuevoContenedor.innerHTML = `<h4> Producto: ${otraRemera.producto}</h4>
                           <p>Color: ${otraRemera.color}</p>
                           <p>Tipo: ${otraRemera.tipo}</p>
                           <p>Talle: ${otraRemera.talle}</b>`;
   document.body.appendChild(nuevoContenedor);
}

//EJ6 Plantilla a partir de objeto pantalon de la entrega previa

let plantillaEjemplo  = `Estilo: ${pantalon.estilo} Talle: ${pantalon.talle} Tela: ${pantalon.tela} Color: ${pantalon.color}`;

console.log(plantillaEjemplo);

//-----------------------------------------Fin -Entrega STORAGE, JSON y DOM clase 28/08-------------------------------//

// Eventos ejemplos con input y boton

function mostrarIngreso() {
   document.getElementById("ingreso").innerHTML = "Ingresaste el siguiente dato: " + document.getElementById("input").value;
 }
 
 
 let boton = document.getElementById("boton");
 boton.onclick = () => {console.log("El usuario hizo un click")};
 boton.onmousemove = () => {console.log("El usuario paso el mouse por el boton")}


 //------------------------------------------Pruebas incorporando JQUERY ----------------------------------------------------//

 //EJ1 

 $( document ).ready(function() {
   console.log('Ya se encuentra listo el DOM.');
});

//EJ2 agregar un elemento a EVENTOS (append)

 $('#prueboJQ').append("<div>Prueba APPEND1</div>", "<div>Prueba APPEND2</div>" );

 //EJ3 agregar un elemento a EVENTOS (prepend)

 $("#mostrarIng").prepend('<button id="botonUno">PruebaPREPEND</button>');
 
 $("#botonUno").click(function () { 
     console.log(this);
 });

 //EJ 4 con change

 $('#campoID').change(function(){
   alert('Se muestra esta alerta cuando cambia el valor del campo con el id "campoID"'); 
});

//---------------------------------------------Pruebas con AJAX ---------------------------------------------------------------//

//Ej mostrando el contenido del archivo datos.json en HTML por boton

const URLJSON = "JSON/datos.json"

$("#btn1").click(() => {
$.getJSON(URLJSON, function (respuesta, estado) {
if(estado === "success"){
let misDatos = respuesta;
for (const dato of misDatos) {
$("#mostrarJson").prepend(`<div>
<h3>${dato.producto}</h3>
<p> ${dato.color}</p>
</div>`)
}
}
});
});

//-----------------------------------------------------------------------------------------------------------------------------//

