const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//funciona com 3 indices, nome - indice e o próprio array
aprovados.forEach(function (nome, indice, array, x) {
    console.log(`(${indice + 1})-> ${nome}`);
    console.log(array);
    console.log(x); //undefined
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);
