function soBoaNoticia(nota) {
    if (nota >= 7) {
        console.log('Aprovado com ', nota);
    }
}


soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' + valor);
    }
}

seForVerdadeEuFalo(); //undefined
seForVerdadeEuFalo(null);
seForVerdadeEuFalo(undefined);
seForVerdadeEuFalo(NaN);
seForVerdadeEuFalo('');
seForVerdadeEuFalo(' ');
seForVerdadeEuFalo(0);
seForVerdadeEuFalo(true);
seForVerdadeEuFalo('Test');
seForVerdadeEuFalo(1);
seForVerdadeEuFalo(0.1);
seForVerdadeEuFalo({});
seForVerdadeEuFalo([]);
seForVerdadeEuFalo([1,2]);
