import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private url = 'http://localhost:3000/authors';

  constructor(private http: HttpClient) { }

  // Get all authors
  getAuthors(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
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
