import { Component } from '@angular/core';
import { CardComponent } from '../../share/card/card.component';

@Component({
  selector: 'app-hero',
  imports: [CardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  items = [1, 2, 3, 4, 5, 6, 7];
}
