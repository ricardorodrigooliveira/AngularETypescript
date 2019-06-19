import { DaoInterface } from './DaoInterface'
import Moto from './Moto'

export class MotoDao<Moto> implements DaoInterface<Moto> {
    
    nomeTabela: string = 'tb_moto'

    inserir(object: Moto): boolean {
        //insert 
        console.log('Insert')
        return true
    }
    atualizar(object: Moto): boolean {
        //Update 
        console.log('Update')
        return true
    }

    remover(id: number): Moto {
        //Delete 
        console.log('Delete')
        return new Moto()
    }

    selecionar(id: number): Moto {
        //Select 
        console.log('Select')
        return new Moto()
    }

    selecionarTodos(): [any] {
        //insert 
        console.log('Insert')
        return [new Array]
    }
}