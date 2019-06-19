import { Component } from '@angular/core'

 //decorar a classe - Encaminha para a classe os metadados
@Component({
  selector: 'app-topo', //da nome (rótulo) ao componente dentro da aplicação
  templateUrl: './topo.component.html' //indica qual é o template que essa classe vai controlar
  // ou
  /*template: //usando crases é possível quebrar linhas e identar o código
            `<p>
                Esse é o componente topo
            </p>`*/
})
export class TopoComponent {}
