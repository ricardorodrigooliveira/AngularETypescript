"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Dao = /** @class */ (function () {
    function Dao() {
        this.nomeTabela = '';
    }
    Dao.prototype.inserir = function (object) {
        //insert 
        console.log('Insert');
        return true;
    };
    Dao.prototype.atualizar = function (object) {
        //Update 
        console.log('Update');
        return true;
    };
    Dao.prototype.remover = function (id) {
        //Delete 
        console.log('Delete');
        return Object();
    };
    Dao.prototype.selecionar = function (id) {
        //Select 
        console.log('Select');
        return Object();
    };
    Dao.prototype.selecionarTodos = function () {
        //insert 
        console.log('Insert');
        return [Object()];
    };
    return Dao;
}());
exports.Dao = Dao;
