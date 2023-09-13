function tratarErroELancar(erro) {
    //throw new Error('...');
    //throw false;
    //throw 10;
    //throw 'mensagem';
    //throw false;
    
    throw {
        nome: erro.nome,
        msg: erro.message,
        date: new Date(0)
    }
    
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!!');
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('final');
    }

}

//should be name
const obj = { nome: 'Roberto' };
imprimirNomeGritado(obj);
