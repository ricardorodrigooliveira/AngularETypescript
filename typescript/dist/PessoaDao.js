"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Pessoa_1 = __importDefault(require("./Pessoa"));
var PessoaDao = /** @class */ (function () {
    function PessoaDao() {
        this.nomeTabela = 'tb_pessoa';
    }
    PessoaDao.prototype.inserir = function (object) {
        //insert 
        console.log('Insert');
        return true;
    };
    PessoaDao.prototype.atualizar = function (object) {
        //Update 
        console.log('Update');
        return true;
    };
    PessoaDao.prototype.remover = function (id) {
        //Delete 
        console.log('Delete');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionar = function (id) {
        //Select 
        console.log('Select');
        return new Pessoa_1.default('', '');
    };
    PessoaDao.prototype.selecionarTodos = function () {
        //insert 
        console.log('Insert');
        return [new Array];
    };
    return PessoaDao;
}());
exports.PessoaDao = PessoaDao;
