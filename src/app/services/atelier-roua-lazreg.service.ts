import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AtelierRoua } from '../models/atelier-roua';

@Injectable({ providedIn: 'root' })
export class AtelierRouaLazregService {
  private apiUrl = 'http://localhost:3000/ateliers';

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get(this.apiUrl);
  }

  add(item: AtelierRoua): Observable<AtelierRoua> {
    return this.http.post<AtelierRoua>(this.apiUrl, item);
  }

  update(id: string, item: AtelierRoua): Observable<AtelierRoua> {
    return this.http.put<AtelierRoua>(`${this.apiUrl}/${id}`, item);
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}