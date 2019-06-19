import { DaoInterface } from './DaoInterface'

export class Dao<T> implements DaoInterface<T> {

    nomeTabela: string = ''

    inserir(object: T): boolean {
        //insert 
        console.log('Insert')
        return true
    }
    atualizar(object: T): boolean {
        //Update 
        console.log('Update')
        return true
    }

    remover(id: number): T {
        //Delete 
        console.log('Delete')
        return Object();
    }

    selecionar(id: number): T {
        //Select 
        console.log('Select')
        return Object();
    }

    selecionarTodos(): [T] {
        //insert 
        console.log('Insert')
        return [Object()]
    }
}