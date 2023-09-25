function Pessoa(nome) {
    this.nome = nome;

    this.falar = function () {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = new Pessoa('João');
p2.falar();
