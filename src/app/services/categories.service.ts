import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { categories } from '../../types/categories';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceCategories {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  private categories$: Observable<categories[]>;

  constructor() {
    this.categories$ = this.http
      .get<{ data: categories[] }>(`${this.apiUrl}api/categories?populate=*`)
      .pipe(
        map((res) => res.data), // transforma a resposta
        shareReplay(1) // faz cache para evitar múltiplas requisições
      );
  }

  getCategories(): Observable<categories[]> {
    return this.categories$;
  }
}
