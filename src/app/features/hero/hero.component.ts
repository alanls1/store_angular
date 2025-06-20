import { Component, inject } from '@angular/core';
import { CardComponent } from '../../share/card/card.component';
import { ClothesService } from '../../services/clothes.service';

@Component({
  selector: 'app-hero',
  imports: [CardComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  items = [1, 2, 3, 4, 5, 6, 7];
  constructor(private clothesService: ClothesService) {
    this.clothesService.getClothes();
  }
}
