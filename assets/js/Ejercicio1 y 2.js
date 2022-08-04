"use strict";


// Utilizamos escape character para darle formato
let opcion = prompt("hola, bienvenido a mi pagina web, que desea hacer? \n 1. Ver mi id card  \n 2. Calcular la edad de mi mascota \n 3. Salir");


if (opcion == 1){
    function idCard() {

        let nombre = prompt("Ingrese su nombre");
        let ubicacion = prompt("Ingrese su ubicacion");
        let pasatiempo = prompt("Ingrese su pasatiempo favorito");
        return "Hola, mi nombre es " + nombre + " y soy de " + ubicacion + " y me gusta " + pasatiempo;
    }
    console.log(idCard());
}
else if (opcion == 2){

    let edad;

    function calcMascotAge(edad){
    edad = prompt("Ingrese su edad");
    let dogAge = edad * 7;
    return "Hola amigo, tu perro tiene " + dogAge + " años";
}

    console.log(calcMascotAge());
}
 
==> 



// function idCard() {
//     let nombre = prompt("Ingrese su nombre");
//     let ubicacion = prompt("Ingrese su ubicacion");
//     let pasatiempo = prompt("Ingrese su pasatiempo favorito");
//     return "Hola, mi nombre es " + nombre + " y soy de " + ubicacion + " y me gusta " + pasatiempo;
// }

// // console.log(idCard());

// let edad = prompt("Ingrese su edad");
// function calcMascotAge(edad){
//     let dogAge = edad * 7;
//     return "Hola amigo, tu perro tiene " + dogAge + " años";
// }

// console.log(calcMascotAge(edad));