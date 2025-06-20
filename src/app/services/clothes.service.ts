import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClothesService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  constructor() {}

  getClothes() {
    this.http
      .get(`${this.apiUrl}api/stores?populate=*`)
      .subscribe((product) => {
        console.log('teste: ', product);
      });
  }
}
