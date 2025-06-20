import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable, shareReplay } from 'rxjs';
import { tags } from '../../types/tags';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;

  private tags$: Observable<tags[]>;

  constructor() {
    this.tags$ = this.http
      .get<{ data: tags[] }>(`${this.apiUrl}api/tags?populate=*`)
      .pipe(
        map((res) => res.data),
        shareReplay(1)
      );
  }

  getTags(): Observable<tags[]> {
    return this.tags$;
  }

  getOneTag(): Observable<tags | undefined> {
    return this.tags$.pipe(
      map((tags) => tags.find((tag) => tag.name === 'Lançamento'))
    );
  }
}
