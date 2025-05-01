import {Component, Inject, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';
import {NgForm} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Book} from '../../model/Book.model';

@Component({
  selector: 'app-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.scss']
})
export class ModalBookComponent implements OnInit {

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private dialogRef: MatDialogRef<ModalBookComponent>,
              @Inject(MAT_DIALOG_DATA) public data: {
                book: Book | null,
              }
  ) {
    if (data?.book) {
      this.newBook = {
        id: data.book.id,
        title: data.book.title,
        description: data.book.description,
        authorId: data.book.authorId,
        year: data.book.year,
        published: data.book.published
      };
    }

  }

  authors = [];

  newBook = {
    id: null,
    title: '',
    description: '',
    year: null,
    authorId: null,
    published: false,

  };

  ngOnInit(): void {
    this.getAuthors();
  }


  getAuthors() {
    this.authorService.getAuthors().subscribe(authors => {
      this.authors = authors;
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      if (this.data?.book) {
        this.updateBook(form);
      } else {
        this.createBook(form);
      }
    }
  }


  createBook(form: NgForm) {
    this.bookService.createBook({
      ...this.newBook, registrationDate: new Date().toISOString()
    }).subscribe((response) => {
      if (response) {
        this.dialogRef.close();
        form.reset();
      }
    }, (error) => {
      console.error('Error al crear el libro:', error);
    });
  }

  updateBook(form: NgForm) {
    this.bookService.updateBook(this.newBook.id, {
      ...this.newBook, registrationDate: new Date().toISOString()
    }).subscribe((response) => {
      if (response) {
        this.dialogRef.close();
        form.reset();
      }
    }, (error) => {
      console.error('Error al actualizar el libro:', error);
    });
  }
}
