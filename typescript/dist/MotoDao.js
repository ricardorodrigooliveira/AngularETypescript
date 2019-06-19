"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Moto_1 = __importDefault(require("./Moto"));
var MotoDao = /** @class */ (function () {
    function MotoDao() {
        this.nomeTabela = 'tb_moto';
    }
    MotoDao.prototype.inserir = function (object) {
        //insert 
        console.log('Insert');
        return true;
    };
    MotoDao.prototype.atualizar = function (object) {
        //Update 
        console.log('Update');
        return true;
    };
    MotoDao.prototype.remover = function (id) {
        //Delete 
        console.log('Delete');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionar = function (id) {
        //Select 
        console.log('Select');
        return new Moto_1.default();
    };
    MotoDao.prototype.selecionarTodos = function () {
        //insert 
        console.log('Insert');
        return [new Array];
    };
    return MotoDao;
}());
exports.MotoDao = MotoDao;
