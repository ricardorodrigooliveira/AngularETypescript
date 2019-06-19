"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
var Pessoa_1 = __importDefault(require("./Pessoa"));
var Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* Criação de objetos Carro */
var carroA = new Carro_1.default('Fusca', 2);
var carroB = new Carro_1.default('Brasilia', 2);
var carroC = new Carro_1.default('Variant', 4);
/* Montar a lista de carro */
var listaDeCarros = [carroA, carroB, carroC];
//console.log(listaDeCarros)
var concessionaria = new Concessionaria_1.default('Avenida Paulista', listaDeCarros);
//console.log(concessionaria.mostrarListaDeCarro())
var cliente = new Pessoa_1.default('Ricardo', 'Fusca');
//console.log(cliente.dizerCarroPreferido())
concessionaria.mostrarListaDeCarro().map(function (carro) {
    //console.log(carro)
    if (carro['modelo'] == cliente.dizerCarroPreferido()) {
        console.log('Você gosta de ' + carro['modelo'] + '? Nós temos o seu carro preferido');
        cliente.comprarCarro(carro);
    }
});
console.log(cliente.dizerCarroQueTem());
console.log(cliente.dizerCarroPreferido());
