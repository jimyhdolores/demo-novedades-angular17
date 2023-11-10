import { Routes } from '@angular/router';
import { ControlFlowComponent } from './control-flow/control-flow.component';

export const routes: Routes = [
  { path: '', component: ControlFlowComponent },
  { path: 'defer', loadComponent: () => import('./defer/defer.component') },
];
