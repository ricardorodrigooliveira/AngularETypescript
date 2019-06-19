"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.Concecionaria = Concecionaria;
