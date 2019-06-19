import { DaoInterface } from './DaoInterface'
import Pessoa from './Pessoa'

export class PessoaDao<Pessoa> implements DaoInterface<Pessoa> {
    
    nomeTabela: string = 'tb_pessoa'

    inserir(object: Pessoa): boolean {
        //insert 
        console.log('Insert')
        return true
    }
    atualizar(object: Pessoa): boolean {
        //Update 
        console.log('Update')
        return true
    }

    remover(id: number): Pessoa {
        //Delete 
        console.log('Delete')
        return new Pessoa('', '')
    }

    selecionar(id: number): Pessoa {
        //Select 
        console.log('Select')
        return new Pessoa('', '')
    }

    selecionarTodos(): [any] {
        //insert 
        console.log('Insert')
        return [new Array]
    }
}