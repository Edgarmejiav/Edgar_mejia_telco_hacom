import { Component, OnInit } from '@angular/core';
import {books} from '../../data/data';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit {
  books = books;
  lineChartOptions: any;

  constructor() {}

  ngOnInit(): void {
    this.initializeChart();
  }

  initializeChart() {
    const booksByYear = this.getBooksByYear();

    this.lineChartOptions = {
      title: { text: 'Control de Registros de Libros' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: Object.keys(booksByYear)  // Los años serán los datos del eje X
      },
      yAxis: { type: 'value' },
      series: [{
        name: 'Libros Registrados',
        type: 'line',
        data: Object.values(booksByYear), // Los valores de libros por año serán los datos de la línea
        smooth: true,  // Hace la línea más suave
        itemStyle: { color: '#007bff' }, // Color de la línea
        lineStyle: { width: 2 },  // Estilo de la línea
        areaStyle: {
          color: 'rgba(0, 123, 255, 0.3)' // Color y opacidad del sombreado debajo de la línea
        }
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
