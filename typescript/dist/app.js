"use strict";
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
var Concecionaria = /** @class */ (function () {
    function Concecionaria(endereco, listaDeCarros) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarros;
    }
    Concecionaria.prototype.fornecerEndereco = function () {
        return this.endereco;
    };
    Concecionaria.prototype.mostrarListaDeCarro = function () {
        return this.listaDeCarros;
    };
    return Concecionaria;
}());
var Pessoa = /** @class */ (function () {
    function Pessoa(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    Pessoa.prototype.dizerNome = function () {
        return this.nome;
    };
    Pessoa.prototype.dizerCarroPreferido = function () {
        return this.carroPreferido;
    };
    Pessoa.prototype.comprarCarro = function (carro) {
        this.carro = carro;
    };
    Pessoa.prototype.dizerCarroQueTem = function () {
        return this.carro;
    };
    return Pessoa;
}());
/* Criação de objetos Carro */
var carroA = new Carro('Fusca', 2);
var carroB = new Carro('Brasilia', 2);
var carroC = new Carro('Variant', 4);
/* Montar a lista de carro */
var listaDeCarros = [carroA, carroB, carroC];
//console.log(listaDeCarros)
var concecionaria = new Concecionaria('Avenida Paulista', listaDeCarros);
//console.log(concecionaria.mostrarListaDeCarro())
var cliente = new Pessoa('Ricardo', 'Fusca');
//console.log(cliente.dizerCarroPreferido())
concecionaria.mostrarListaDeCarro().map(function (carro) {
    //console.log(carro)
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        console.log('Você gosta de ' + carro['modelo'] + '? Nós temos o seu carro preferido');
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
console.log(cliente.dizerCarroPreferido());
