function area(largura, altura) {
    const area = largura * altura;

    if (area > 20) {
        console.log(`Valor acima do permitido: ${area}m2.`);
    } else {
        return area;
    }
}

console.log(area(2, 3));//6
console.log(area(2));//NaN
console.log(area()); //NaN
console.log(area(2, 3, 4, 5));//6
console.log(area(4, 6));//undefined