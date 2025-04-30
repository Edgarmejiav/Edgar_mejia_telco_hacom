import { Component, OnInit } from '@angular/core';
import {authors, books} from '../../data/data';

@Component({
  selector: 'app-pie-chart-genre',
  templateUrl: './pie-chart-genre.component.html',
  styleUrls: ['./pie-chart-genre.component.scss']
})
export class PieChartGenreComponent implements OnInit {
  books = authors;
  pieChartOptionsGenre: any;

  ngOnInit(): void {
    this.pieChartOptionsGenre = this.getPieChartOptionsGenre();
  }

  getPieChartOptionsGenre() {
    const genreCount = this.getBooksByGenre();
    return {
      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          name: 'Género',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true, // Habilita las etiquetas
            position: 'outside', // Muestra las etiquetas fuera del gráfico
            formatter: '{b}: {c} ({d}%)' // Formato de las etiquetas
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 40,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true // Muestra la línea que conecta la etiqueta con la sección
          },
          data: Object.keys(genreCount).map((genre, index) => ({
            value: genreCount[genre],
            name: genre,
            itemStyle: {
              color: 'hsl(' + (index * 200 / Object.keys(genreCount).length) + ', 70%, 50%)' // Color dinámico
            }
          }))
        }
      ]
    };
  }

  getBooksByGenre() {
    const genreCount = {};
    this.books.forEach(book => {
      const genre = book.gender;
      if (genreCount[genre]) {
        genreCount[genre]++;
      } else {
        genreCount[genre] = 1;
      }
    });
    return genreCount;
  }
}
