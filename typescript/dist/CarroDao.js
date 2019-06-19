"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Carro_1 = __importDefault(require("./Carro"));
exports.Carro = Carro_1.default;
var Carro = /** @class */ (function () {
    function Carro() {
        this.nomeTabela = 'tb_carro';
    }
    Carro.prototype.inserir = function (object) {
        //insert 
        console.log('Insert');
        return true;
    };
    Carro.prototype.atualizar = function (object) {
        //Update 
        console.log('Update');
        return true;
    };
    Carro.prototype.remover = function (id) {
        //Delete 
        console.log('Delete');
        return [Carro_1.default];
    };
    Carro.prototype.selecionar = function (id) {
        //Select 
        console.log('Select');
        return new Carro_1.default();
    };
    Carro.prototype.selecionarTodos = function () {
        //insert 
        console.log('Insert');
        return [new Array];
    };
    return Carro;
}());
exports.Carro = Carro;
