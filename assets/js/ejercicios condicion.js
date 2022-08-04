

let opc = prompt("Que desea hacer? \n 1.descubrir si es par   \n 2.ver si es mayor de edad");

if (opc == 1){
    let numero = prompt("Ingrese el numero a comparar");

    let resultado = numero % 2;
   
    if (resultado == 0) {
       
        console.log("El numero es par");
      
    }
    else {
        console.log("El numero es impar");
    }
}
else if (opc == 2){
    let year = prompt("Ingrese su año de nacimiento");
let limite = 2022
let comprobar = limite - year;

if (comprobar > 18) {
    console.log("Usted es mayor de edad");
}
else {
    console.log("Usted es menor de edad");
}
}





 



// let year = prompt("Ingrese su año de nacimiento");
// let limite = 2022
// let comprobar = limite - year;

// if (comprobar > 18) {
//     console.log("Usted es mayor de edad");
// }
// else {
//     console.log("Usted es menor de edad");
// }






