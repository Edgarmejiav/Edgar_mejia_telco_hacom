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
    const male = this.books.filter(b => b.gender === 'Male').length;
    const female = this.books.filter(b => b.gender === 'Female').length;
    return {
      title: { text: 'Genero Autores' },

      tooltip: {
        trigger: 'item'
      },
      legend: {
        top: '5%',
        left: 'center'
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          label: {
            show: true, // Habilita la etiqueta
            position: 'inside', // Muestra las etiquetas fuera del gráfico
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 10,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: true // Muestra la línea que conecta la etiqueta con la sección
          },
          data: [
            { value: male, name: 'Hombres', itemStyle: { color: '#4caf50' } }, // Color verde para publicados
            { value: female, name: 'Mujeres', itemStyle: { color: '#f44336' } } // Color rojo para no publicados
          ]
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
