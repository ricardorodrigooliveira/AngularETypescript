import Carro from "./Carro"
import Pessoa from "./Pessoa"
import Concessionaria from "./Concessionaria"



/* Criação de objetos Carro */
let carroA = new Carro('Fusca', 2);
let carroB = new Carro('Brasilia', 2);
let carroC = new Carro('Variant', 4);

/* Montar a lista de carro */

let listaDeCarros: Carro[] = [carroA, carroB, carroC]
//console.log(listaDeCarros)

let concessionaria = new Concessionaria('Avenida Paulista', listaDeCarros)

//console.log(concessionaria.mostrarListaDeCarro())

let cliente = new Pessoa('Ricardo', 'Fusca')

//console.log(cliente.dizerCarroPreferido())

concessionaria.mostrarListaDeCarro().map((carro: Carro) => {
    //console.log(carro)
    if(carro['modelo'] == cliente.dizerCarroPreferido()){
        console.log('Você gosta de ' + carro['modelo'] + '? Nós temos o seu carro preferido')
        cliente.comprarCarro(carro)
    }
})

console.log(cliente.dizerCarroQueTem())
console.log(cliente.dizerCarroPreferido())