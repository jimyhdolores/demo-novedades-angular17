import {
  NgFor,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
} from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  imports: [NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor],
})
export class ControlFlowComponent {
  @Input() demo = '';
  sueldo = 100;
  operacion = '';

  //variables para switch control
  valor1 = 10;
  valor2 = 5;

  //variables para for control

  listaDeSueldos = [50, 20, 50];

  mytracck(index: number, id: number) {
    return id;
  }
}
