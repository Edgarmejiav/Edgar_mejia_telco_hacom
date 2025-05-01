import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private baseUrl = environment.baseUrl;
  private endpoint = 'authors';

  private url = `${this.baseUrl}/${this.endpoint}`;


  constructor(private http: HttpClient) { }

  // Get all authors
  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }
  getAuthorsWithPagination(pageIndex: number, pageSize: number): Observable<any> {
    const start = pageIndex * pageSize;
    const limit = pageSize;

    return this.http.get<any>(`${this.url}?_start=${start}&_limit=${limit}`, {
      observe: 'response'  // Necesitamos acceder a los encabezados
    });
  }
  // Get a specific author by id
  getAuthor(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  // Create a new author
  createAuthor(author: any): Observable<any> {
    return this.http.post<any>(this.url, author);
  }

  // Update an existing author
  updateAuthor(id: number, author: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, author);
  }

  // Delete an author
  deleteAuthor(id: number): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
