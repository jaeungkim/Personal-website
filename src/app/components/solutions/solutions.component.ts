import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.css'],
})
export class SolutionsComponent implements OnInit {
  title: any = 'Atrial Filbrillation';
  // mainTitleInitial: any = 'Cardiology';
  // mainTitle: any = ['Cardiology', 'Geriatrics', 'Neurology', 'Respirology'];
  textColorIndex = 0;
  description: any = `The AF module is used in the clinical care of patients experiencing atrial fibrillation.\n\nHighlight features include organization of the clinical pathway into Rhythm and Rate control strategies.`;
  descriptionArray: any = [
    `The AF module is used in the clinical care of patients experiencing atrial fibrillation.\n\nHighlight features include organization of the clinical pathway into Rhythm and Rate control strategies.`,
    `The CR module is used in the clinical care of patients who have suffered or at high risk of a cardiac event.\n\nHighlight features include accommodating a multi-disciplinary approach to the treatment of CR patients.`,
    `The CRw module is complementary to the CR module as an operational enhancement tool.\n\nHighlight features include class load management, attendance compliance and billing reports.`,
    `The HCM module is a subset of the HF module and is used in care management of patients with hypertrophic cardiomyopathy.\n\nHighlight features include the ability to capture clinical data specific for HCM.`,
    `The HF module is used in the clinical care of patients suffering from Heart Failure in a multi-user environment.\n\nHighlight features include referral urgency calculator and guideline-based decision support for treatment of patients stratified by LVEF values.`,
    `The HFO is a subset of the HF module and is focused on the clinical are of patients suffering from Heart Failure as a result of chemotherapy.\n\nHighlight features include the ability to view progression of disease by clinical indicators.`,
    `The Lipid module is used in the clinical care of patients at high risk of cardiovascular disease due to elevated levels of cholesterol.\n\nHighlight features include focus on lipid history, profiling and dietary information.`,
    `The SC module is used in the clinical care and research of elite athletes who have suffered a cardiovascular event.\n\nHighlight features include an embedded METs calculator.`,
    `The SCESS module focusses on assisting patients with or at high risk of cardiovascular disease and should stop smoking.\n\nHighlight features include the incorporation of the Fagerstrom test for nicotine dependence (FTND) and treatment planning.`,
    `The WC module is used in the clinical care/research of females suffering from or at higher risk of cardiovascular disease.\n\nHighlight features include the inclusion of the Seattle angina questionnaire, hospital anxiety and depression scoring, QoL enjoyment and satisfaction scoring (Q-LES-Q-SF).`,
    `The Frailty module focusses on the clinical care of patients who are at risk of frailty.\n\nHighlight features include the inclusion of multiple frailty scoring as part of the assessment.`,
    `The PD module is used in the clinical care of patients suffering from Parkinson’s Disease.\n\nHighlight features include the focus on medication titration auto-calculator.`,
    `The Asthma/COPD module is used in the clinical care of patients suffering from asthma or COPD.\n\nHighlight features include risk triaging based on aggravating factors and medications history.`,
  ];
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
          return 50;
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
        data: [20.5, 0.05, 0.75, 0.05, 1.75, 0.05, 2, 0.05],
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
      padding: function (chart, context) {
        let width = chart.chart.width;
        if (width < 500) {
          return { left: 10, right: 10 };
        }
        return { left: 25, right: 25 };
      },
    },
    cutout: function (chart, context) {
      let width = chart.chart.width;
      if (width < 400) {
        return width / 9;
      }
      if (width < 500) {
        return width / 7.5;
      }
      if (width < 600) {
        return width / 6.5;
      }
      if (width < 750) {
        return width / 6;
      }
      if (width < 1000) {
        return width / 5.5;
      }
      return width / 5.25;
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
    responsive: true,
    maintainAspectRatio: true,
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

    responsive: true,
    maintainAspectRatio: true,
  };
  constructor() {}

  ngOnInit(): void {
    // console.log(Chart)
  }

  chartHovered(event: any): void {
    let eventIndex;

    if (event.active.length > 0 && event.active[0].index !== undefined) {
      eventIndex = event.active[0].index;
    }
    if (eventIndex === 0) {
      this.title = `Atrial Filbrillation`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[0];
      this.textColorIndex = 0;
    } else if (eventIndex === 1) {
      this.title = `Cardiac Rehab`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[1];
      this.textColorIndex = 1;
    } else if (eventIndex === 2) {
      this.title = `Cardiac Rehab Workflow`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[2];
      this.textColorIndex = 2;
    } else if (eventIndex === 3) {
      this.title = `Hypertrophic Cardiomyopathy`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[3];
      this.textColorIndex = 3;
    } else if (eventIndex === 4) {
      this.title = `Heart Failure`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[4];
      this.textColorIndex = 4;
    } else if (eventIndex === 5) {
      this.title = `Heart Failure Oncology`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[5];
      this.textColorIndex = 5;
    } else if (eventIndex === 6) {
      this.title = `Lipid`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[6];
      this.textColorIndex = 6;
    } else if (eventIndex === 7) {
      this.title = `Sports Cardiology`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[7];
      this.textColorIndex = 7;
    } else if (eventIndex === 8) {
      this.title = `Smoking Cessation`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[8];
      this.textColorIndex = 8;
    } else if (eventIndex === 9) {
      this.title = `Women's Cardiology`;
      // this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[9];
      this.textColorIndex = 9;
    } else if (eventIndex === 10) {
      this.title = `Frailty`;
      // this.mainTitleInitial = this.mainTitle[1];
      this.description = this.descriptionArray[10];
      this.textColorIndex = 10;
    } else if (eventIndex === 11) {
      this.title = `Parkinson's Disease`;
      // this.mainTitleInitial = this.mainTitle[2];
      this.description = this.descriptionArray[11];
      this.textColorIndex = 11;
    } else if (eventIndex === 12) {
      this.title = `Asthma/COPD`;
      // this.mainTitleInitial = this.mainTitle[3];
      this.description = this.descriptionArray[12];
      this.textColorIndex = 12;
    }
  }
}

//GRAIDENT DEPRECATED

//inside cardiology
function getGradientInsideCardiology(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(500, 150, 100, 500);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(0.2, '#ffebf8');
  gradient.addColorStop(0.35, '#ffe4f6');
  gradient.addColorStop(0.5, '#ffd8f0');
  gradient.addColorStop(0.67, '#f0def2');
  gradient.addColorStop(0.84, '#ecdefc');
  gradient.addColorStop(1, '#c9c7fe');
  return gradient;
}
//inside geriatrics
function getGradientInsideGeriatrics(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(170, 75, 75, 125);
  gradient.addColorStop(0, '#f0ffe6');
  gradient.addColorStop(0.5, '#ceffad');
  gradient.addColorStop(1, '#acf07e');
  // gradient.addColorStop(1, 'red'); f0ffe6
  return gradient;
}
// //inside Neurology
function getGradientInsideNeurology(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(150, 75, 75, 125);
  gradient.addColorStop(0, '#ffffff');
  gradient.addColorStop(0.5, '#c9fffb');
  gradient.addColorStop(1, '#87fff9');
  return gradient;
}
// //inside Respirology
function getGradientInsideRespirology(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  var gradient = ctx.createLinearGradient(100, 50, 50, 140);
  gradient.addColorStop(0, '#fff3eb');
  gradient.addColorStop(0.5, '#ffdac1');
  gradient.addColorStop(1, '#faac77');
  return gradient;
}
// //gradient AF
// function getGradientAF(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,229,241,1)');
//   gradient.addColorStop(0.9, 'rgba(250,208,228,1)');
//   return gradient;
// }
// //gradient CR
// function getGradientCR(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,207,230,1) ');
//   gradient.addColorStop(0.9, 'rgba(255,181,216,1)');

//   return gradient;
// }
// //gradient CRw
// function getGradientCRw(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,187,218,1)');
//   gradient.addColorStop(0.9, 'rgba(255,161,207,1)');

//   return gradient;
// }
// //gradient HCM
// function getGradientHCM(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,174,211,1)');
//   gradient.addColorStop(0.9, 'rgba(252,140,195,1)');

//   return gradient;
// }
// //gradient HF
// function getGradientHF(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,159,200,1)');
//   gradient.addColorStop(0.9, 'rgba(255,126,189,1)');

//   return gradient;
// }
// //gradient HFO
// function getGradientHFO(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,192,222,1)');
//   gradient.addColorStop(0.9, 'rgba(255,110,181,1)');

//   return gradient;
// }
// //gradient Lipid
// function getGradientLipid(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,122,179,1)');
//   gradient.addColorStop(0.9, 'rgba(255,93,172,1)');

//   return gradient;
// }
// //gradient SC
// function getGradientSC(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,105,169,1)');
//   gradient.addColorStop(0.9, 'rgba(255,79,165,1)');

//   return gradient;
// }
// //gradient SCESS
// function getGradientSCESS(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,107,170,1)');
//   gradient.addColorStop(0.9, 'rgba(255,70,161,1)');
//   return gradient;
// }
// //gradient WC
// function getGradientWC(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(255,82,156,1)');
//   gradient.addColorStop(0.9, 'rgba(255,45,148,1)');
//   return gradient;
// }
// //gradient Frailty
// function getGradientFrailty(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(244,244,59,1)');
//   gradient.addColorStop(0.9, ' rgba(231,231,69,1)');
//   return gradient;
// }
// //gradient PD
// function getGradientPD(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(149,234,254,1)');
//   gradient.addColorStop(0.9, 'rgba(172,239,255,1)');
//   return gradient;
// }
// //gradient Asthma/COPD
// function getGradientAsthmaCOPD(ctx, chartArea) {
//   if (!chartArea) {
//     return;
//   }
//   const centerX = (chartArea.left + chartArea.right) / 2;
//   const centerY = (chartArea.top + chartArea.bottom) / 2;
//   const r = Math.min(
//     (chartArea.right - chartArea.left) / 2,
//     (chartArea.bottom - chartArea.top) / 2
//   );
//   let gradient = ctx.createRadialGradient(
//     centerX,
//     centerY,
//     0,
//     centerX,
//     centerY,
//     r
//   );
//   gradient.addColorStop(0.7, 'white');
//   gradient.addColorStop(0.8, 'rgba(188,122,254,1)');
//   gradient.addColorStop(0.9, 'rgba(127,43,252,1)');
//   return gradient;
// }
