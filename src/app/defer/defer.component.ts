import { Component } from '@angular/core';
import { HeroIromanComponent } from './hero-iroman/hero-iroman.component';
import { HeroThorComponent } from './hero-thor/hero-thor.component';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [HeroIromanComponent, HeroThorComponent],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export default class DeferComponent {
  mostrarIronMan = false;
  mostrarThor = false;
}
