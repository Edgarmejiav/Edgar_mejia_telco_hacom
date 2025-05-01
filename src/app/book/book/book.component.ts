import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {PageEvent} from '@angular/material/paginator';
import {MatDialog} from '@angular/material/dialog';
import {ModalBookComponent} from '../modal-book/modal-book.component';
import {BookService} from '../../services/book.service';
import {Book} from '../../model/Book.model';
import {AuthorService} from '../../services/author.service';
import {forkJoin} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  dataBooks: Book[] = [];
  displayedColumns: string[] = ['id', 'title', 'description', 'year', 'author', 'published', 'registrationDate', 'actions'];
  dataSource: MatTableDataSource<any>;
  totalItems: number;
  pageSize = 20;

  constructor(public dialog: MatDialog, private bookService: BookService,
              private authorService: AuthorService) {
  }

  ngOnInit(): void {
    this.loadBooks(0, this.pageSize);
  }


  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  onPaginateChange(event: PageEvent): void {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.loadBooks(pageIndex, pageSize);
  }


  loadBooks(pageIndex: number, pageSize: number): void {
    this.bookService.getBooksWithPagination(pageIndex, pageSize).subscribe(response => {
      this.dataBooks = response.body;
      this.totalItems = Number(response.headers.get('X-Total-Count'));

      const authorRequests = this.dataBooks.map(book =>
        this.authorService.getAuthor(book.authorId).pipe(
          map(author => {
            book.author = author;
            return book;
          })
        )
      );

      forkJoin(authorRequests).subscribe(booksWithAuthors => {
        this.dataSource = new MatTableDataSource(booksWithAuthors);
      });
    });
  }


  openDialog(): void {
    this.dialog.open(ModalBookComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'custom-modal'
    });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book.id).subscribe(() => {
      this.loadBooks(0, this.pageSize);
    }, error => {
      // this.loadBooks(0, this.pageSize);
    });
  }


}
