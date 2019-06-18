var Carro = /** @class */ (function () {
    function Carro(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    Carro.prototype.acelerar = function () {
        this.velocidade = this.velocidade + 10;
    };
    Carro.prototype.parar = function () {
        this.velocidade = 0;
    };
    Carro.prototype.velocidadeAtual = function () {
        return this.velocidade;
    };
    return Carro;
}());
var Concecionario = /** @class */ (function () {
    function Concecionario() {
    }
    Concecionario.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concecionario.prototype.mostrarListaDeCarro = function () {
        return this.listaDeCarros;
    };
    return Concecionario;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa() {
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (Carro) {
        this.carro = Carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
var carroA = new Carro('Honda', 5);
console.log(carroA);
