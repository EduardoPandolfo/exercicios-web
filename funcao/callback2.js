const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0];

//sem callback
let notasBaixas1 = [];
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas1.push(notas[i]);
    }
}
console.log(notasBaixas1);


//com callback
let notaBaixas2;
notaBaixas2 = notas.filter(function (nota) {
    return nota < 7;
});
console.log(notaBaixas2);

notaBaixas2 = notas.filter(n => n < 7);
console.log(notaBaixas2);

//cc
const notaMenorQue7 = nota => nota < 7;
console.log(notas.filter(notaMenorQue7));