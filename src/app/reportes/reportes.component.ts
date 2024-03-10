import { Component, ViewChild } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { ChartConfiguration, ChartData, ChartEvent } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatButton } from '@angular/material/button';
import { CategoryScale } from 'chart.js';

@Component({
  selector: 'app-reportes',
  standalone: true,
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css'],
  imports: [ToolbarComponent, MatButton, BaseChartDirective],
})
export class ReportesComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective<'bar'> | undefined;
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };
  public barChartType = 'bar' as const;

  public barChartData: ChartData<'bar'> = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Personal' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Laboral' },
      { data: [10, 15, 25, 30, 40, 10, 15], label: 'Recreacion' },
    ],
  };

  public pieChartOptions: ChartConfiguration['options'] = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [['Personal'], ['Laboral'], 'Recreacion'],
    datasets: [
      {
        data: [300, 500, 100],
      },
    ],
  };
  public pieChartType = 'pie' as const;

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: 'Completadas',
        backgroundColor: 'rgba(0, 255, 0, 0.3)',
        borderColor: 'green',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
      {
        data: [180, 480, 770, 90, 1000, 270, 400],
        label: 'Pospuestas',
        yAxisID: 'y1',
        backgroundColor: 'rgba(255,0,0,0.3)',
        borderColor: 'red',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'red',
        },
      },
    },

    plugins: {
      legend: { display: true },
    },
  };

  public lineChartType = 'line' as const;


  public barChartOptions2: ChartConfiguration<'bar'>['options'] = {
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  public barChartData2: ChartData<'bar'> = {
    labels: ['Completas', 'Pospuestas'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Personal' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Laboral' },
      { data: [10, 15, 25, 30, 40, 10, 15], label: 'Recreacion' },
    ],
  };
}
