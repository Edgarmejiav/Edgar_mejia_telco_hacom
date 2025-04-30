import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lines',
  templateUrl: './lines.component.html',
  styleUrls: ['./lines.component.scss']
})
export class LinesComponent implements OnInit, OnDestroy {
  lineChartOptions: any;
  data: { time: number; value: number }[] = [];
  intervalId: any;

  ngOnInit(): void {
    // Genera un registro inicial inmediatamente
    this.simulateInitialData();

    // Luego comienza el intervalo de simulación
    this.simulateData();
  }
  simulateInitialData() {
    // Genera un valor aleatorio inicial
    const now = Date.now();
    const value = Math.floor(Math.random() * (12000 - 4000 + 1)) + 4000;
    this.data.push({ time: now, value });

    // Llama a la actualización del gráfico con el valor inicial
    this.updateChart();
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  simulateData() {
    // Ejecuta este bloque cada 5 segundos
    this.intervalId = setInterval(() => {
      const now = Date.now(); // Obtiene el tiempo actual en milisegundos

      // Genera un valor aleatorio entre 4000 y 12000
      const value = Math.floor(Math.random() * (12000 - 4000 + 1)) + 4000;

      // Agrega el nuevo registro con tiempo y valor
      this.data.push({ time: now, value });

      // Calcula el límite de 2 horas atrás
      const twoHoursAgo = now - 2 * 60 * 60 * 1000;

      // Elimina los registros que tengan más de 2 horas de antigüedad
      this.data = this.data.filter(d => d.time >= twoHoursAgo);

      // Actualiza el gráfico con los datos filtrados
      this.updateChart();
    }, 5000);
  }


  updateChart() {
    // Calcular el total de registros
    const totalRegistros = this.data.reduce((total, current) => total + current.value, 0);

    this.lineChartOptions = {
      title: {
        text: 'Control de Registros de Libros',
        subtext: `Data Amount = ${totalRegistros}`  // Agregar el total de registros al subtítulo
      },
      tooltip: { trigger: 'axis' },
      xAxis: {
        type: 'category',
        data: this.data.map(d => new Date(d.time).toLocaleTimeString())
      },
      yAxis: { type: 'value' },
      series: [{
        name: 'Registros',
        type: 'line',
        data: this.data.map(d => d.value),
        smooth: true,
        itemStyle: { color: '#007bff' },
        lineStyle: { width: 2 },
        areaStyle: { color: 'rgba(0, 123, 255, 0.3)' }
      }]
    };
  }

}
