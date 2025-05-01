import {Component, OnInit} from '@angular/core';


import {BookService} from '../../services/book.service';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  books = [];
  barChartOptions: any;

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
      this.barChartOptions = this.getBarChartOptions();
    });
  }

  getBarChartOptions() {
    const booksByYear = this.getBooksByYear();
    return {
      title: {text: 'Libros por Año'},
      tooltip: {},
      xAxis: {
        type: 'category',
        data: Object.keys(booksByYear)
      },
      yAxis: {type: 'value'},
      series: [{
        name: 'Cantidad',
        type: 'bar',
        data: Object.values(booksByYear)
      }]
    };
  }

  getBooksByYear() {
    const booksByYear = {};
    this.books.forEach(book => {
      const year = book.year.toString();
      if (booksByYear[year]) {
        booksByYear[year]++;
      } else {
        booksByYear[year] = 1;
      }
    });
    return booksByYear;
  }
}
