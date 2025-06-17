import { Component } from '@angular/core';
import { ButtonComponent } from '../../share/button/button.component';

@Component({
  selector: 'app-categories',
  imports: [ButtonComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  cards = [
    {
      title: 'Roupas',
      p: 'Estilo e conforto para todos os momentos',
      button: 'Explorar Roupas',
      class: 'clothes',
    },
    {
      title: 'Joias',
      p: 'Brilho e elegância para completar seu visual',
      button: 'Explorar Joias',
      class: 'jewelry',
    },
  ];
}
