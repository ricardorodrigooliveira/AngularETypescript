import { DaoInterface } from './DaoInterface'
import Carro from './Carro'

export class Carro implements DaoInterface {
    
    nomeTabela: string = 'tb_carro'

    inserir(object: Carro): boolean {
        //insert 
        console.log('Insert')
        return true
    }
    atualizar(object: Carro): boolean {
        //Update 
        console.log('Update')
        return true
    }

    remover(id: number): Carro {
        //Delete 
        console.log('Delete')
        return [Carro]
    }

    selecionar(id: number): Carro {
        //Select 
        console.log('Select')
        return new Carro()
    }

    selecionarTodos(): [any] {
        //insert 
        console.log('Insert')
        return [new Array]
    }
}