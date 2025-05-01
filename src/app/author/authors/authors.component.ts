import { Component, OnInit } from '@angular/core';
import {Author} from "../../model/Book.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {AuthorService} from "../../services/author.service";
import {PageEvent} from "@angular/material/paginator";
import {ModalAuthorComponent} from "../modal-author/modal-author.component";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  dataAuthors: Author[] = [];
  displayedColumns: string[] = ['id', 'name', 'gender', 'actions'];
  dataSource: MatTableDataSource<any>;
  totalItems: number;
  pageSize = 20;

  constructor(public dialog: MatDialog, private authorService: AuthorService) {}

  ngOnInit(): void {
    this.loadAuthors(0, this.pageSize);
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onPaginateChange(event: PageEvent): void {
    const pageIndex = event.pageIndex;
    const pageSize = event.pageSize;
    this.loadAuthors(pageIndex, pageSize);
  }

  loadAuthors(pageIndex: number, pageSize: number): void {
    this.authorService.getAuthorsWithPagination(pageIndex, pageSize).subscribe(response => {
      this.dataAuthors = response.body;
      this.totalItems = Number(response.headers.get('X-Total-Count'));

      this.dataSource = new MatTableDataSource(this.dataAuthors);
    });
  }

  openDialog(): void {
    this.openAuthorDialog().subscribe(() => this.loadAuthors(0, this.pageSize));
  }

  editAuthor(author: Author): void {
    this.openAuthorDialog(author).subscribe(() => this.loadAuthors(0, this.pageSize));
  }

  private openAuthorDialog(author?: Author) {
    const dialogRef = this.dialog.open(ModalAuthorComponent, {
      width: '500px',
      height: 'auto',
      panelClass: 'custom-modal',
      data: author ? { author } : undefined
    });

    return dialogRef.afterClosed();
  }

  deleteAuthor(author: Author): void {
    this.authorService.deleteAuthor(author.id).subscribe(() => {
      this.loadAuthors(0, this.pageSize);
    }, error => {
    });
  }
}
