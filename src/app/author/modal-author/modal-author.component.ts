import {Component, Inject, OnInit} from '@angular/core';
import {Author} from '../../model/Book.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {AuthorService} from '../../services/author.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-modal-author',
  templateUrl: './modal-author.component.html',
  styleUrls: ['./modal-author.component.scss']
})
export class ModalAuthorComponent implements OnInit {

  newAuthor: Author = { id: null, name: '', gender: '' };

  constructor(
    public dialogRef: MatDialogRef<ModalAuthorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authorService: AuthorService
  ) {
    if (data?.author) {
      this.newAuthor = { ...data.author };
    }
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      if (this.newAuthor.id) {
        this.authorService.updateAuthor(this.newAuthor.id, this.newAuthor).subscribe(() => {
          this.dialogRef.close();
        });
      } else {
        this.authorService.createAuthor(this.newAuthor).subscribe(() => {
          this.dialogRef.close();
        });
      }
    }
  }

  ngOnInit(): void {
  }


}
