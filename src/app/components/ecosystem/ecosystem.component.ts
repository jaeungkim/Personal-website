import {
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SceneService } from './scene.service';
import { Chart, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-ecosystem',
  templateUrl: './ecosystem.component.html',
  styleUrls: ['./ecosystem.component.css'],
  providers: [SceneService],
})
export class EcosystemComponent implements OnInit {
  constructor(private scene: SceneService) {}

  // @ViewChild('container')
  // set container(container: ElementRef) {
  //   this.scene.initialize(container.nativeElement);
  // }

  ngOnInit(): void {
    this.initScrollAnimations();
  }
  initScrollAnimations(): void {
    //DOCTOR PATIENT ANIMATION
    let patientAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.patientDoctor-div',
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: true,
      },
    });

    let doctorAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.patientDoctor-div',
        start: 'top top',
        end: '+=200%',
        scrub: 2,
        pin: true,
      },
    });

    let chartAnimationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.ecosystem-chart-div',
        start: 'top top',
        end: '+=200%',
        scrub: 0.2,
        pin: true,
      },
    });

    patientAnimationTimeline.to('.patient-div', { duration: 1, x: '50%' });
    patientAnimationTimeline.to('.section-pad', { duration: 10 });

    doctorAnimationTimeline.to('.doctor-div', { duration: 1, x: '-50%' });
    doctorAnimationTimeline.to('.section-pad', { duration: 10 });

    // chartAnimationTimeline.fromTo(
    //   '.chart-div-telephone',
    //   { opacity: 0, x: '-100%' },
    //   { opacity: 1, x: '-10%', duration: 5 }
    // );
    // chartAnimationTimeline.fromTo(
    //   '.chart-div-eHealthViewer',
    //   { opacity: 0, x: '-100%' },
    //   { opacity: 1, x: '5%', duration: 5 }
    // );
    // chartAnimationTimeline.fromTo(
    //   '.chart-div-pharmanet',
    //   { opacity: 0, x: '100%' },
    //   { opacity: 1, x: '2.5%', duration: 5 }
    // );
    // chartAnimationTimeline.fromTo(
    //   '.chart-div-hospital',
    //   { opacity: 0, x: '100%' },
    //   { opacity: 1, x: '5%', duration: 5 }
    // );
    // chartAnimationTimeline.to('.chart-section-pad', { duration: 50 });
    //END DOCTOR PATIENT ANIMATION
  }

  /*
   *
   * ICLINIC CIRCLE
   *
   */

  public doughnutChartData: any = {
    labels: [
      `AF`,
      `CR`,
      'CRw',
      `HCM`,
      `HF`,
      `HFO`,
      'LP',
      `SC`,
      `SCESS`,
      `WC`,
      `FR`,
      `PD`,
      `AS/COPD`,
    ],
    datasets: [
      {
        data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        backgroundColor: '#121212',
        borderWidth: function (chart) {
          let width = chart.chart.width;
          if (width < 500) {
            return 2;
          } else {
            return 4;
          }
        },
        hoverBackgroundColor: '#121212',
        borderColor: [
          'rgba(255,255,255,1)',
          'rgba(255,235,248,1)',
          'rgba(255,233,247,1)',
          'rgba(249,224,251,1)',
          'rgba(249,224,251,1)',
          'rgba(253,224,255,1)',
          'rgba(252,216,255,1)',
          'rgba(213,213,255,1)',
          'rgba(206,206,255,1)',
          'rgba(192,192,255,1)', //cardiology end
          'rgba(206, 255, 173, 1)',
          'rgba(201, 255, 251, 1)',
          'rgba(255, 218, 193, 1)',
        ],
        hoverBorderColor: [
          'rgba(255,255,255,1)',
          'rgba(255,235,248,1)',
          'rgba(255,233,247,1)',
          'rgba(249,224,251,1)',
          'rgba(249,224,251,1)',
          'rgba(253,224,255,1)',
          'rgba(252,216,255,1)',
          'rgba(213,213,255,1)',
          'rgba(206,206,255,1)',
          'rgba(192,192,255,1)', //cardiology end
          'rgba(206, 255, 173, 1)',
          'rgba(201, 255, 251, 1)',
          'rgba(255, 218, 193, 1)',
        ],
        borderRadius: 0,
        spacing: 100,
        hoverOffset: function (chart) {
          let width = chart.chart.width;
          if (width < 500) {
            return 15;
          }
          return 30;
        },
      },
    ],
  };
  public doughnutChartData2: any = {
    labels: [
      `Cardiology`, //cardiology
      null,
      `Geriatrics`, //geriatrics
      null,
      `Neurology`, //neurology
      null,
      `Respirology`, //respirology
      null,
    ],
    datasets: [
      {
        weight: 1,
      },
      {
        data: [23, 0.25, 0.75, 0.25, 1.75, 0.25, 2, 0.25],
        rotation: -8,
        borderColor: '#121212',
        borderWidth: 0,
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientInsideCardiology(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientInsideGeriatrics(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientInsideNeurology(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientInsideRespirology(ctx, chartArea);
            }
          }
          return '#121212';
        },

        hoverBackgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientInsideCardiology(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientInsideGeriatrics(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientInsideNeurology(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientInsideRespirology(ctx, chartArea);
            }
          }
          return '#121212';
        },
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  //2nd
  public doughnutChartType2: ChartType = 'doughnut';

  public chartOptions: any = {
    layout: {
      padding: {
        left: 25,
        right: 25,
      },
    },
    cutout: function (chart, context) {
      let width = chart.chart.width;
      if (width < 500) {
        return width / 8;
      }
      if (width < 600) {
        return width / 7;
      }
      if (width < 750) {
        return width / 6;
      }
      return width / 5;
    },
    hover: {
      mode: 'nearest',
    },
    animation: {
      onProgress: function (chart) {
        let width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        let fontSize = (height / 550).toFixed(2);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, chart.chart.width / 10, 0, 2 * Math.PI);

        //GRADIENT
        var grd = ctx.createLinearGradient(0, 0, width, height);
        grd.addColorStop(0.4, 'rgba(105,180,250,1)');
        grd.addColorStop(0.5, 'rgba(255,255,255,1)');
        grd.addColorStop(0.7, 'rgba(105,180,250,1)');

        ctx.fillStyle = grd;
        ctx.fill();
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        let text = 'iClinic MD',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
      onComplete: function (chart) {
        let width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;
        ctx.restore();
        let fontSize = (height / 550).toFixed(2);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, chart.chart.width / 10, 0, 2 * Math.PI);

        //GRADIENT
        var grd = ctx.createLinearGradient(0, 0, width, height);
        grd.addColorStop(0.4, 'rgba(105,180,250,1)');
        grd.addColorStop(0.5, 'rgba(255,255,255,1)');
        grd.addColorStop(0.7, 'rgba(105,180,250,1)');
        ctx.fillStyle = grd;
        ctx.fill();
        ctx.font = fontSize + 'em sans-serif';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'black';
        let text = 'iClinic MD',
          textX = Math.round((width - ctx.measureText(text).width) / 2),
          textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        font: function (context) {
          let width = context.chart.width;
          let size = Math.round(width / 50);
          return {
            size: size,
            weight: 'bold',
            family: "Roboto, 'Helvetica Neue', sans-serif",
          };
        },
        align: 'end',
        offset: function (context) {
          let width = context.chart.width;
          if (width < 500) {
            return 40;
          }
          return 50;
        },
        color: 'white',
        formatter: (value, context) => {
          if (value !== 0) {
            return context.chart.data.labels![context.dataIndex];
          } else {
            return null;
          }
        },
      },
    },
    // responsive: true,
    // maintainAspectRatio: true,
  };

  //2nd chart options
  public chartOptions2: any = {
    cutout: function (chart, context) {
      let width = chart.chart.width;
      let height = chart.chart.height;
      return width / 8;
    },
    hover: {
      mode: 'nearest',
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        display: false,
      },

      datalabels: {
        font: function (context) {
          var width = context.chart.width;
          var size = Math.round(width / 80);
          return {
            size: size,
            weight: 'bold',
            family: "Roboto, 'Helvetica Neue', sans-serif",
          };
        },
        align: function (context) {
          if (context.dataIndex === 0) {
            return 'left';
          }
          return 'center';
        },
        offset: function (context) {
          if (context.dataIndex === 0) {
            return 80;
          }
          return 0;
        },
        rotation: function (context) {
          if (context.dataIndex === 2) {
            return 20;
          } else if (context.dataIndex === 4) {
            return 35;
          } else if (context.dataIndex === 6) {
            return 62;
          }
          return 0;
        },
        color: 'transparent', //hide

        formatter: (value, context) => {
          if (value !== 0) {
            return context.chart.data.labels![context.dataIndex];
          } else {
            return null;
          }
        },
      },
    },

    // responsive: true,
    // maintainAspectRatio: true,
  };
}

//inside cardiology
function getGradientInsideCardiology(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(500, 160, 100, 170);
  gradient.addColorStop(0, '#ffd2e5');
  gradient.addColorStop(1, '#ff0c71');
  return gradient;
}
//inside geriatrics
function getGradientInsideGeriatrics(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom / 1.5,
    0,
    chartArea.top / 1.5
  );
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#f8ff0c');
  return gradient;
}
// //inside Neurology
function getGradientInsideNeurology(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(
    0,
    chartArea.bottom / 1.5,
    0,
    chartArea.top / 1.5
  );
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#009dff');
  return gradient;
}
// //inside Respirology
function getGradientInsideRespirology(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(
    chartArea.left,
    0,
    chartArea.right,
    0
  );
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(1, '#a900ff');
  return gradient;
}
