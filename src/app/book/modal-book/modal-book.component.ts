import {Component, OnInit} from '@angular/core';
import {BookService} from '../../services/book.service';
import {AuthorService} from '../../services/author.service';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-book',
  templateUrl: './modal-book.component.html',
  styleUrls: ['./modal-book.component.scss']
})
export class ModalBookComponent implements OnInit {

  constructor(private bookService: BookService,
              private authorService: AuthorService,
              private dialogRef: MatDialogRef<ModalBookComponent>) {

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
      this.createBook(form);
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
}
