//El programa pedirá al usuario la medida de un lado del cuadrado y mostrará el área por una alerta
//crear las variables, pedir los datos con prompts y alamacenarlos en las variables y luego hacer la operación. Al final mostrar con "alert()" el resultado

/* parseFloat - parseInt */
/* lado = parseFloat(lado); */
/* alert("Saludos!");
let area;
let lado = parseFloat(prompt("Ingrese el lado:"));
console.log(typeof lado);
console.log(typeof lado);
area = lado ** 2;
alert("El área del cuadrado con lado " + lado + " es " + area); */

/* 
ATM
Vamos a crear un programa que simule la interación con un ATM
este debe tener la posibilidad de hacer las siguentes operaciones
-Depositar
-Retirar
-Ver Saldo
-Pagar Servicios(opcional)

Usar
-minimo Diagrama de flujo
-Declaración de Variables
-Usar "prompt()" para pedir datos
-Usar "alert()" para mostrar datos o mensajes
-usar Condicionales(if y else)
-opcional(Switch case)
*/

alert("Bienvenido");

let idioma = prompt(
  "Seleccione el idioma:\n1-Español\n2-Englis\n\n o ingrese otro idioma"
);

if (idioma === "1") {
  console.log("Español");
} else if (idioma === "2") {
  console.log("English");
} else {
  console.log(idioma);
}

let operacion = prompt(
  "Que desea hacer\n1-Deposito\n2-Retiro\n3-ConsultarSaldo\n4-Pagos"
);

if (operacion === "1") {
  console.log("seleccionó Deposito");
} else if (operacion === "2") {
  console.log("seleccionó Retiro");
} else if (operacion === "3") {
  console.log("seleccionó Ver Saldo");
} else if (operacion === "4") {
  console.log("seleccionó Pagos");
} else {
  console.log("seleccionó una opción invalida");
}
