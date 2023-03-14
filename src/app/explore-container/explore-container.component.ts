import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {


  @Input() name?: string;

  constructor() {}

  calcular(event : any){
    console.log(event.target.innerText)

    let operador = event.target.innerText
    let valor1 = document.getElementById('valor1') as HTMLInputElement
    let valor2 = document.getElementById('valor2') as HTMLInputElement

    let resultado = document.getElementById('resultadoOutput') as HTMLElement
    // parseFloat(valor1.value) + parseFloat(valor2.value)

    console.log(resultado)
    resultado.innerText = eval(valor1.value + operador + valor2.value)
    // alert('Cálculo realizado com sucesso!')
}

}