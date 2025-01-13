import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Turf } from '../models/turf';

@Injectable({
  providedIn: 'root'
})
export class TurfService {

  private apiUrl = 'http://localhost:8080/api/turfs';  // Setze die korrekte API-URL

  constructor(private http: HttpClient) { }

  getAllTurfs(): Observable<Turf[]> {
    return this.http.get<Turf[]>(`${this.apiUrl}`);
  }

  getPricePerSquareMeter(turfId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/${turfId}/price`);
  }
}


