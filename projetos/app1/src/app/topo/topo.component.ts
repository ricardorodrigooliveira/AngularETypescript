import { Component } from '@angular/core'

 //decorar a classe - Encaminha para a classe os metadados
@Component({
  selector: 'app-topo', //seletor baseado em rotulo da nome (rótulo) ao componente dentro da aplicação
  templateUrl: './topo.component.html', //indica qual é o template que essa classe vai controlar
  styleUrls: ['./topo.component.css'] //pode ser passado mais de um estilo, basta separar por virgula
})

export class TopoComponent {
  public titulo: string = 'Aprendendo Inglês'; //string interpolation (one-way-binding)
}


/* Outros exemplos

Como uma classe do componente <div>, cuidado para não usar o mesmo nome nas classes CSS
@Component({
  selector: '.app-topo', //da nome (rótulo) ao componente dentro da aplicação
  template: '<p>Esse é o componente topo</p>'
  styles: ['.exemplo {color: red} ']
})

ou

//Como atributo ou rótulo do componente <div>
@Component({
  selector: '[app-topo]', //da nome (rótulo) ao componente dentro da aplicação
  template: '<p>Esse é o componente topo</p>'
  styles: ['.exemplo {color: red} ']
})

*/
