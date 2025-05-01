import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private baseUrl = 'http://localhost:3000';
  private endpoint = 'books';
  private url = `${this.baseUrl}/${this.endpoint}`;

  constructor(private http: HttpClient) {
  }

  getBooksWithPagination(pageIndex: number, pageSize: number): Observable<any> {
    const start = pageIndex * pageSize;
    const limit = pageSize;

    return this.http.get<any>(`${this.url}?_start=${start}&_limit=${limit}`, {
      observe: 'response'  // Necesitamos acceder a los encabezados
    });
  }
  getBooks(): Observable<any[]> {
    return this.http.get<any[]>(this.url);
  }

  getBook(id: number): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}`);
  }

  createBook(book: any): Observable<any> {
    return this.http.post<any>(this.url, book);
  }

  updateBook(id: string, book: any): Observable<any> {
    return this.http.put<any>(`${this.url}/${id}`, book);
  }

  deleteBook(id: string): Observable<any> {
    return this.http.delete<any>(`${this.url}/${id}`);
  }
}
