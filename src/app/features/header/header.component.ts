import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ServiceCategories } from '../../services/categories.service';
import { categories } from '../../../types/categories';

@Component({
  selector: 'app-header',
  imports: [MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public categories: categories[] = [];

  constructor(private serviceCategories: ServiceCategories) {}

  ngOnInit(): void {
    this.serviceCategories.getCategories().subscribe((categories) => {
      this.categories = categories;
      console.log('categorias', this.categories);
    });
  }
}
