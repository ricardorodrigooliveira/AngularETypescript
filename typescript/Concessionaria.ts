import { Carro } from "./Carro"
import { ConcessionariaInterface } from './ConcessionariaInterface'

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string
    private listaDeCarros: Carro[]

    constructor(endereco: string, listaDeCarros: Carro[]){
        this.endereco = endereco
        this.listaDeCarros = listaDeCarros
    }

    public fornecerEndereco(): string{
        return this.endereco
    }

    public mostrarListaDeCarro(): any{
        return this.listaDeCarros
    }

    public fornecerHorarioDeFuncionamento(): string {
        return 'De segunda a sexta das 8h00 as 18h00 e sábado das 08h00 as 12h00'
    }
}