const pessoa = {
    saucacao: 'Bom dia!',
    falar() {
        console.log(this.saucacao); //necessário this
    }
}

pessoa.falar();

const falar = pessoa.falar;

falar(); //undefined - conflito entre paradigmas: funcional e OO

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa(); // Bom dia!