const escola = "Bande1rante";

console.log(escola.charAt(0));
console.log(escola.charAt(3));
console.log("Char at position 265: " + escola.charAt(265));

console.log(escola.charCodeAt(3)); // valor unicode - 100
console.log(escola.indexOf('d'));

console.log(escola.substring(1)); //andeirante

console.log(escola.substring(0, 3)); //Ban

console.log('Escola '.concat(escola).concat('!'));
console.log('Escola ' + escola + '!');

console.log(escola.replace(/\d/g, 'e')); // altera todos números para 'e';

console.log("Ana, Maria, Pedro".split(',')); // imprime array
console.log("Ana, Maria, Pedro".split(/,/)); // imprime array através de regex
