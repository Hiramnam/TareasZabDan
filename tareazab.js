// Ejercicio 1 imprimir escaleras de diversos simbolos. 
function programaSimbolos (n) { 
    if (n <= 0 || n > 100){
    console.log("El número debe ser > 0 y <=100");
    return;
}

    for(let i = 1; i <= n; i++) {
        let row = " ";
        for (let h = 1; h <= n; h++) {
            if (h <= n - i) {
                row += " ";
            } else {
                row += "*";
            }
        }
        console.log(row);

    }
}
// Ejercicio 2
function calcularVueltasDePagina(n, p) {
    const mitadPaginas = Math.floor(n / 2);
    const mitadObjetivo = Math.floor(p / 2);
  
    if (mitadObjetivo <= mitadPaginas) {
      return mitadObjetivo;
    } else {
      return Math.floor(n / 2) - mitadObjetivo;
    }
  }
  const n = 6;
const p = 2;
const vueltas = calcularVueltasDePagina(n, p);
console.log("Número de vueltas de página: " + vueltas);


//Ejercicio 3.

function clasificarAves(avs) {
    let conteo = []; 
    let parvadas = 0; 
    let aveComun = avs[0]; 
    for (let i = 0; i < avs.length; i++) { 
      let aveNormal = avs[i]; 
  
      if (!conteo[aveNormal]) { 
        conteo[aveNormal] = 0; 
      }
      conteo[aveNormal]++; 
  
      if (conteo[aveNormal] > parvadas) {
        
       parvadas = conteo[aveNormal];
        aveComun = aveNormal;
      } else if (conteo[aveNormal] === parvadas && aveNormal < aveComun) {
   
        aveComun = aveNormal;
      }
    }
}





