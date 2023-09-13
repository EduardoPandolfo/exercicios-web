var numero = 1;

{
    let numero = 2;

    console.log('Dentro:' + numero); //2
}

console.log('Fora:' + numero); //1 

{
    let numero = 2;

    console.log('Dentro:' + numero); //2
}

console.log('Fora:' + numero); //1 