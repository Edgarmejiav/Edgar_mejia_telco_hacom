import { Component, OnInit } from '@angular/core';
import {books} from '../../data/data';

@Component({
  selector: 'app-pie-chart-published',
  templateUrl: './pie-chart-published.component.html',
  styleUrls: ['./pie-chart-published.component.scss']
})
export class PieChartPublishedComponent implements OnInit {
  books = books;
  pieChartOptionsPublished: any;

  ngOnInit(): void {
    this.pieChartOptionsPublished = this.getPieChartOptionsPublished();
  }

  getPieChartOptionsPublished() {
    const published = this.books.filter(b => b.published).length;
    const notPublished = this.books.filter(b => !b.published).length;

    return {
      title: { text: 'Publicaciones' },

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
            { value: published, name: 'Publicados', itemStyle: { color: '#4caf50' } }, // Color verde para publicados
            { value: notPublished, name: 'No Publicados', itemStyle: { color: '#f44336' } } // Color rojo para no publicados
          ]
        }
      ]
    };
  }
}
