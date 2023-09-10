let valor = 3;

    // ...

 valor = valor + 10;

    // ...

 console.log(valor);

// Quando declarado como const, impede em runtime a modificação
 const valorConstante = 5;
 /*
 valorConstante = 4;
                ^

TypeError: Assignment to constant variable. 
 */

 console.log(valorConstante);