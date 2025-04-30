import { Component, OnInit } from '@angular/core';
import {books} from '../../data/data';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements OnInit {
  books = books;
  barChartOptions: any;

  ngOnInit(): void {
    this.barChartOptions = this.getBarChartOptions();
  }

  getBarChartOptions() {
    const booksByYear = this.getBooksByYear();
    return {
      title: { text: 'Libros por Año' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: Object.keys(booksByYear)
      },
      yAxis: { type: 'value' },
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
