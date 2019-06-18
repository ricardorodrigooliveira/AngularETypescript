class Carro {
    private modelo: string
    private numeroDePortas: number
    private velocidade: number = 0

    constructor(modelo: string, numeroDePortas: number) {
        this.modelo = modelo
        this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {
        this.velocidade = this.velocidade + 10
    }

    public parar(): void {
        this.velocidade = 0
    }

    public velocidadeAtual(): number {
        return this.velocidade
    }
}

class Concecionaria {
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
}

class Pessoa {
    private nome: string
    private carroPreferido: string
    private carro: Carro

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    public dizerNome(): string{
        return this.nome
    }

    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
    
    public comprarCarro(carro: Carro): void {
        this.carro = carro
    }

    public dizerCarroQueTem(): Carro {
        return this.carro
    }

}

/* Criação de objetos Carro */
let carroA = new Carro('Fusca', 2);
let carroB = new Carro('Brasilia', 2);
let carroC = new Carro('Variant', 4);

/* Montar a lista de carro */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]
//console.log(listaDeCarros)

let concecionaria = new Concecionaria('Avenida Paulista', listaDeCarros)

//console.log(concecionaria.mostrarListaDeCarro())

let cliente = new Pessoa('Ricardo', 'Fusca')

//console.log(cliente.dizerCarroPreferido())

concecionaria.mostrarListaDeCarro().map((carro: Carro) => {
    //console.log(carro)
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        console.log('Você gosta de ' + carro['modelo'] + '? Nós temos o seu carro preferido')
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())
console.log(cliente.dizerCarroPreferido())