import { DaoInterface } from './DaoInterface'
import Concessionaria from './Concessionaria'

export class ConcessionariaDao<Concessionaria> implements DaoInterface<T> {
    
    nomeTabela: string = 'tb_concessionaria'

    inserir(object: Concessionaria): boolean {
        //insert 
        console.log('Insert')
        return true
    }
    atualizar(object: Concessionaria): boolean {
        //Update 
        console.log('Update')
        return true
    }

    remover(id: number): Concessionaria {
        //Delete 
        console.log('Delete')
        return new Concessionaria('',[])
    }

    selecionar(id: number): Concessionaria {
        //Select 
        console.log('Select')
        return new Concessionaria('',[])
    }

    selecionarTodos(): [any] {
        //insert 
        console.log('Select todos')
        return [new Array]
    }
}