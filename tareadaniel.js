// Tarea 

const fila = ["Sofía", "David", "Juan"];

for(let i = 0; i < fila.length; i++){
    console.log(fila[i]);

}
let agregandoSara = fila.unshift("Sara");
console.log(fila);

let agregandoAgustin = fila.unshift("Agustin");
console.log(fila);


    let pushfila = fila.push("Elena");
console.log(fila);


// Ejercicio 2 Imprima repetidamente el valor de la variable xValue, disminuyendolo en 0.5 cada vez que siempre que xValue siga siendo poitivo


let xValue = 10;

while (xValue > 0) {
  console.log(xValue);
  xValue -= 0.5;
}



//Ejercicio 3. Crea una función con un bucle while para imprimir los números del 1 al n entre corchetes.

function imprimirNumerosEntreCorchetes(n) {
    let i = 1;
    while (i <= n) {
      console.log(`[${i}]`);
      i++;
    }
  }

  /*Crea una función general y una función flecha con un bucle while que calcule la sume de los primeros n números enteros positvos +..+ n
  */

//Función Flecha
const calcularSumaF = (n) => {
  let suma = 0;
  let i = 1;

  while (i <= n) {
    suma += i;
    i++;
  }

  return suma;
};

// Función general
function calcularSumaG(n) {
    let suma = 0;
  
    for (let i = 1; i <= n; i++) {
      suma += i;
    }
  
    return suma;
  }


