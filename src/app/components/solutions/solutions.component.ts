import { Component, OnInit } from '@angular/core';
import { Chart, ChartType } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

Chart.register(ChartDataLabels);

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss'],
})
export class SolutionsComponent implements OnInit {
  mobile: boolean = false;
  tablet: boolean = false;
  desktop: boolean = false;
  showTitle: boolean;
  title: any = 'Atrial Filbrillation';
  mainTitleInitial: any = 'Cardiology';
  mainTitle: any = [
    'Cardiology',
    'Geriatrics',
    'Neurology',
    'Respirology',
    'One Patient, One Record',
  ];
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
    `The iClinic MD module is our flagship product. It is used in both private and public offices of physicians, spanning over multiple specialties, giving power to the concept of One Patient, One Record.\n\nHighlight features include customizable clinical data for smart data capture and inclusion including medications personal history, smart clinical reporting tools and tightly integrated waitlists and other innovative tools to maximize operation efficiency for clinics and better quality of care for patients.`
  ];
  public doughnutChartDataMobile: any = {
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
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientAF(ctx, chartArea);
            }
            if (context.dataIndex === 1) {
              return getGradientCR(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientCRw(ctx, chartArea);
            }
            if (context.dataIndex === 3) {
              return getGradientHCM(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientHF(ctx, chartArea);
            }
            if (context.dataIndex === 5) {
              return getGradientHFO(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientLipid(ctx, chartArea);
            }
            if (context.dataIndex === 7) {
              return getGradientSC(ctx, chartArea);
            }
            if (context.dataIndex === 8) {
              return getGradientSCESS(ctx, chartArea);
            }
            if (context.dataIndex === 9) {
              return getGradientWC(ctx, chartArea);
            }
            if (context.dataIndex === 10) {
              return getGradientFrailty(ctx, chartArea);
            }
            if (context.dataIndex === 11) {
              return getGradientPD(ctx, chartArea);
            }
            if (context.dataIndex === 12) {
              return getGradientAsthmaCOPD(ctx, chartArea);
            }
          }
          return '#121212';
        },
        hoverBackgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return 'rgba(248,203,208,255)';
            }
            if (context.dataIndex === 1) {
              return 'rgba(245,188,209,255)';
            }
            if (context.dataIndex === 2) {
              return 'rgba(205,156,199,255)';
            }
            if (context.dataIndex === 3) {
              return 'rgba(189,168,208,255)';
            }
            if (context.dataIndex === 4) {
              return 'rgba(213,213,255,1)';
            }
            if (context.dataIndex === 5) {
              return 'rgba(192,192,255,1)';
            }
            if (context.dataIndex === 6) {
              return 'rgba(164,172,215,255)';
            }
            if (context.dataIndex === 7) {
              return 'rgba(151,207,235,255)';
            }
            if (context.dataIndex === 8) {
              return 'rgba(150,216,231,255)';
            }
            if (context.dataIndex === 9) {
              return 'rgba(165,219,220,255)';
            }
            if (context.dataIndex === 10) {
              return 'rgba(189,223,183,255)';
            }
            if (context.dataIndex === 11) {
              return 'rgba(179,215,133,255)';
            }
            if (context.dataIndex === 12) {
              return 'rgba(225,232,141,255)';
            }
          }
          return null;
        },
        borderWidth: null,
        borderRadius: 0,
        spacing: 50,
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
  public doughnutChartDataTablet: any = {
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
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientAF(ctx, chartArea);
            }
            if (context.dataIndex === 1) {
              return getGradientCR(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientCRw(ctx, chartArea);
            }
            if (context.dataIndex === 3) {
              return getGradientHCM(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientHF(ctx, chartArea);
            }
            if (context.dataIndex === 5) {
              return getGradientHFO(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientLipid(ctx, chartArea);
            }
            if (context.dataIndex === 7) {
              return getGradientSC(ctx, chartArea);
            }
            if (context.dataIndex === 8) {
              return getGradientSCESS(ctx, chartArea);
            }
            if (context.dataIndex === 9) {
              return getGradientWC(ctx, chartArea);
            }
            if (context.dataIndex === 10) {
              return getGradientFrailty(ctx, chartArea);
            }
            if (context.dataIndex === 11) {
              return getGradientPD(ctx, chartArea);
            }
            if (context.dataIndex === 12) {
              return getGradientAsthmaCOPD(ctx, chartArea);
            }
          }
          return '#121212';
        },
        hoverBackgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return 'rgba(248,203,208,255)';
            }
            if (context.dataIndex === 1) {
              return 'rgba(245,188,209,255)';
            }
            if (context.dataIndex === 2) {
              return 'rgba(205,156,199,255)';
            }
            if (context.dataIndex === 3) {
              return 'rgba(189,168,208,255)';
            }
            if (context.dataIndex === 4) {
              return 'rgba(213,213,255,1)';
            }
            if (context.dataIndex === 5) {
              return 'rgba(192,192,255,1)';
            }
            if (context.dataIndex === 6) {
              return 'rgba(164,172,215,255)';
            }
            if (context.dataIndex === 7) {
              return 'rgba(151,207,235,255)';
            }
            if (context.dataIndex === 8) {
              return 'rgba(150,216,231,255)';
            }
            if (context.dataIndex === 9) {
              return 'rgba(165,219,220,255)';
            }
            if (context.dataIndex === 10) {
              return 'rgba(189,223,183,255)';
            }
            if (context.dataIndex === 11) {
              return 'rgba(179,215,133,255)';
            }
            if (context.dataIndex === 12) {
              return 'rgba(225,232,141,255)';
            }
          }
          return '#121212';
        },
        borderWidth: null,
        borderRadius: 0,
        spacing: 75,
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
        backgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return getGradientAF(ctx, chartArea);
            }
            if (context.dataIndex === 1) {
              return getGradientCR(ctx, chartArea);
            }
            if (context.dataIndex === 2) {
              return getGradientCRw(ctx, chartArea);
            }
            if (context.dataIndex === 3) {
              return getGradientHCM(ctx, chartArea);
            }
            if (context.dataIndex === 4) {
              return getGradientHF(ctx, chartArea);
            }
            if (context.dataIndex === 5) {
              return getGradientHFO(ctx, chartArea);
            }
            if (context.dataIndex === 6) {
              return getGradientLipid(ctx, chartArea);
            }
            if (context.dataIndex === 7) {
              return getGradientSC(ctx, chartArea);
            }
            if (context.dataIndex === 8) {
              return getGradientSCESS(ctx, chartArea);
            }
            if (context.dataIndex === 9) {
              return getGradientWC(ctx, chartArea);
            }
            if (context.dataIndex === 10) {
              return getGradientFrailty(ctx, chartArea);
            }
            if (context.dataIndex === 11) {
              return getGradientPD(ctx, chartArea);
            }
            if (context.dataIndex === 12) {
              return getGradientAsthmaCOPD(ctx, chartArea);
            }
          }
          return '#121212';
        },
        hoverBackgroundColor: function (context) {
          const chart = context.chart;
          const { ctx, chartArea } = chart;
          if (chartArea !== undefined) {
            if (context.dataIndex === 0) {
              return 'rgba(248,203,208,255)';
            }
            if (context.dataIndex === 1) {
              return 'rgba(245,188,209,255)';
            }
            if (context.dataIndex === 2) {
              return 'rgba(205,156,199,255)';
            }
            if (context.dataIndex === 3) {
              return 'rgba(189,168,208,255)';
            }
            if (context.dataIndex === 4) {
              return 'rgba(213,213,255,1)';
            }
            if (context.dataIndex === 5) {
              return 'rgba(192,192,255,1)';
            }
            if (context.dataIndex === 6) {
              return 'rgba(164,172,215,255)';
            }
            if (context.dataIndex === 7) {
              return 'rgba(151,207,235,255)';
            }
            if (context.dataIndex === 8) {
              return 'rgba(150,216,231,255)';
            }
            if (context.dataIndex === 9) {
              return 'rgba(165,219,220,255)';
            }
            if (context.dataIndex === 10) {
              return 'rgba(189,223,183,255)';
            }
            if (context.dataIndex === 11) {
              return 'rgba(179,215,133,255)';
            }
            if (context.dataIndex === 12) {
              return 'rgba(225,232,141,255)';
            }
          }
          return '#121212';
        },
        borderWidth: null,
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
    datasets: [
      {
        weight: 1,
      },
      {
        data: [1],
        borderWidth: [0],
        backgroundColor: 'transparent',
        spacing: 0,
        borderColor: 'rgba(192,192,255,1)',
      },
    ],
  };
  public doughnutChartType: ChartType = 'doughnut';
  //2nd
  public doughnutChartType2: ChartType = 'doughnut';

  public chartOptions: any = {
    rotation: 14,
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
      let width = chart.chart.width;;
      if (width < 400) {
        return width / 9;
      }
      if (width < 500) {
        return width / 7;
      }
      if (width < 600) {
        return width / 7;
      }
      if (width < 750) {
        return width / 7;
      }
      if (width < 1000) {
        return width / 7;
      }
      return width / 8;
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
        let fontSize = (height / 500).toFixed(2);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, chart.chart.width / 7.5, 0, 2 * Math.PI);

        //GRADIENT
        var grd = ctx.createLinearGradient(0, 0, 0, width);
        grd.addColorStop(9 / 20, 'rgb(128, 182, 222)');
        grd.addColorStop(0.5, 'rgb(223, 228, 232)');
        grd.addColorStop(11 / 20, 'rgb(128, 182, 222)');
        ctx.fillStyle = grd;
        ctx.fill();
        // ctx.font = fontSize + 'em sans-serif';
        // ctx.textBaseline = 'middle';
        // ctx.fillStyle = '#450159';
        // let text = 'iClinic MD',
        //   textX = Math.round((width - ctx.measureText(text).width) / 2),
        //   textX2 = Math.round((width - ctx.measureText(text).width) / 2.05),
        //   textY = height / 2.19,
        //   textY2 = height / 2,
        //   textY3 = height / 1.81
        // let text2 = 'One Patient';
        // let text3 = 'One Record';
        // ctx.fillText(text, textX, textY);
        // ctx.fillText(text2, textX2, textY2);
        // ctx.fillText(text3, textX2, textY3);
        ctx.save();
      },
      onComplete: function (chart) {
        let width = chart.chart.width,
          height = chart.chart.height,
          ctx = chart.chart.ctx;

        ctx.restore();
        let fontSize = (height / 500).toFixed(2);
        ctx.beginPath();
        ctx.arc(width / 2, height / 2, chart.chart.width / 7.5, 0, 2 * Math.PI);
 
        //GRADIENT
        var grd = ctx.createLinearGradient(0, 0, 0, width);
        // grd.addColorStop(0.4, 'rgba(105,180,250,1)');
        // grd.addColorStop(0.5, 'rgba(255,255,255,1)');
        // grd.addColorStop(0.7, 'rgba(105,180,250,1)');

        grd.addColorStop(9 / 20, 'rgb(128, 182, 222)');
        grd.addColorStop(0.5, 'rgb(223, 228, 232)');
        grd.addColorStop(11 / 20, 'rgb(128, 182, 222)');

        ctx.fillStyle = grd;
        ctx.fill();
        // ctx.font = fontSize + 'em sans-serif';
        // ctx.textBaseline = 'middle';
        // ctx.fillStyle = '#450159';
        // let text = 'iClinic MD',
        //   textX = Math.round((width - ctx.measureText(text).width) / 2),
        //   textX2 = Math.round((width - ctx.measureText(text).width) / 2.05),
        //   textY = height / 2.19,
        //   textY2 = height / 2,
        //   textY3 = height / 1.81
        // let text2 = 'One Patient';
        // let text3 = 'One Record';
        // ctx.fillText(text, textX, textY);
        // ctx.fillText(text2, textX2, textY2);
        // ctx.fillText(text3, textX2, textY3);
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
        color: '#450159',
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
      datalabels: null,
      // datalabels: {
      //   font: function (context) {
      //     var width = context.chart.width;
      //     var size = Math.round(width / 60);
      //     return {
      //       size: size,
      //       weight: 'bold',
      //       family: "Roboto, 'Helvetica Neue', sans-serif",
      //     };
      //   },
      //   align: function (context) {
      //     if (context.dataIndex === 0) {
      //       return 'left';
      //     }
      //     return 'center';
      //   },
      //   offset: function (context) {
      //     if (context.dataIndex === 0) {
      //       return 80;
      //     }
      //     return 0;
      //   },
      //   rotation: function (context) {
      //     if (context.dataIndex === 2) {
      //       return 20;
      //     } else if (context.dataIndex === 4) {
      //       return 35;
      //     } else if (context.dataIndex === 6) {
      //       return 62;
      //     }
      //     return 0;
      //   },
      //   color: 'transparent', //hide

      //   formatter: (value, context) => {
      //     if (value !== 0) {
      //       return context.chart.data.labels![context.dataIndex];
      //     } else {
      //       return null;
      //     }
      //   },
      // },
    },

    responsive: true,
    maintainAspectRatio: true,
  };
  constructor() {
    this.showTitle = false;
  }

  showtitlee(show: boolean) {
    this.showTitle = show;
    this.title = `iClinic MD`;
    this.mainTitleInitial = this.mainTitle[4];
    this.description = this.descriptionArray[13];
    this.textColorIndex = 13;
  }
  ngOnInit(): void {
    // this.initScrollAnimations();
    if (window.innerWidth < 576) {
      // 768px portrait
      this.mobile = true;
    } else if (window.innerWidth < 1200) {
      this.tablet = true;
    } else {
      this.desktop = true;
    }
  }
  chartHovered(event: any): void {
    let eventIndex;
    if (event.active.length > 0 && event.active[0].index !== undefined) {
      eventIndex = event.active[0].index;
    }
    if (eventIndex === 0) {
      this.title = `Atrial Filbrillation`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[0];
      this.textColorIndex = 0;
    } else if (eventIndex === 1) {
      this.title = `Cardiac Rehab`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[1];
      this.textColorIndex = 1;
    } else if (eventIndex === 2) {
      this.title = `Cardiac Rehab Workflow`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[2];
      this.textColorIndex = 2;
    } else if (eventIndex === 3) {
      this.title = `Hypertrophic Cardiomyopathy`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[3];
      this.textColorIndex = 3;
    } else if (eventIndex === 4) {
      this.title = `Heart Failure`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[4];
      this.textColorIndex = 4;
    } else if (eventIndex === 5) {
      this.title = `Heart Failure Oncology`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[5];
      this.textColorIndex = 5;
    } else if (eventIndex === 6) {
      this.title = `Lipid`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[6];
      this.textColorIndex = 6;
    } else if (eventIndex === 7) {
      this.title = `Sports Cardiology`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[7];
      this.textColorIndex = 7;
    } else if (eventIndex === 8) {
      this.title = `Smoking Cessation`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[8];
      this.textColorIndex = 8;
    } else if (eventIndex == 9) {
      this.title = `Women's Cardiology`;
      this.mainTitleInitial = this.mainTitle[0];
      this.description = this.descriptionArray[9];
      this.textColorIndex = 9;
    } else if (eventIndex === 10) {
      this.title = `Frailty`;
      this.mainTitleInitial = this.mainTitle[1];
      this.description = this.descriptionArray[10];
      this.textColorIndex = 10;
    } else if (eventIndex === 11) {
      this.title = `Parkinson's Disease`;
      this.mainTitleInitial = this.mainTitle[2];
      this.description = this.descriptionArray[11];
      this.textColorIndex = 11;
    } else if (eventIndex === 12) {
      this.title = `Asthma/COPD`;
      this.mainTitleInitial = this.mainTitle[3];
      this.description = this.descriptionArray[12];
      this.textColorIndex = 12;
    }
  }
}

// OUTSIDE CHART GRADIENT OPTIONS ==========================================
function getGradientAF(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(255,247,252,1)');
  // gradient.addColorStop(0.95, 'rgba(255,243,251,1)');

  gradient.addColorStop(0.3, 'rgba(253,232,235,255)');
  gradient.addColorStop(0.7, 'rgba(251,218,222,255)');
  gradient.addColorStop(0.8, 'rgba(248,203,208,255)');

  return gradient;
}
// //gradient CR
function getGradientCR(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(255,239,249,1)');
  // gradient.addColorStop(0.95, 'rgba(255,235,248,1)');

  gradient.addColorStop(0.3, 'rgba(252,231,240,255)');
  gradient.addColorStop(0.7, 'rgba(250,208,224,255)');
  gradient.addColorStop(0.8, 'rgba(245,188,209,255)');
  return gradient;
}
//gradient CRw
function getGradientCRw(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(255,236,248,1)');
  // gradient.addColorStop(0.95, 'rgba(255,233,247,1)');

  gradient.addColorStop(0.3, 'rgba(244,221,235,255)');
  gradient.addColorStop(0.7, 'rgba(223,184,215,255)');
  gradient.addColorStop(0.8, 'rgba(205,156,199,255)');
  return gradient;
}
//gradient HCM
function getGradientHCM(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(253,234,255,1)');
  // gradient.addColorStop(0.95, 'rgba(249,224,251,1)');

  gradient.addColorStop(0.3, 'rgba(240,230,241,255)');
  gradient.addColorStop(0.7, 'rgba(216,201,226,255)');
  gradient.addColorStop(0.8, 'rgba(189,168,208,255)');

  // gradient.addColorStop(0.8, 'rgba(233,236,246,255)');
  // gradient.addColorStop(0.9, 'rgba(190,194,226,255)');
  // gradient.addColorStop(0.95, 'rgba(164,172,215,255)');
  return gradient;
}
//gradient HF
function getGradientHF(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(253,234,255,1)');
  // gradient.addColorStop(0.95, 'rgba(249,224,251,1)');

  // gradient.addColorStop(0.8, 'rgba(233,236,246,255)');
  // gradient.addColorStop(0.9, 'rgba(190,194,226,255)');
  // gradient.addColorStop(0.95, 'rgba(164,172,215,255)');

  gradient.addColorStop(0.3, 'white');
  gradient.addColorStop(0.7, 'rgba(225,225,255,1)');
  gradient.addColorStop(0.8, 'rgba(213,213,255,1)');
  return gradient;
}
//gradient HFO
function getGradientHFO(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(253,230,255,1)');
  // gradient.addColorStop(0.95, 'rgba(253,224,255,1)');

  // gradient.addColorStop(0.8, 'rgba(217,236,250,255)');
  // gradient.addColorStop(0.9, 'rgba(186,215,241,255)');
  // gradient.addColorStop(0.95, 'rgba(156,193,231,255)');

  gradient.addColorStop(0.3, 'white');
  gradient.addColorStop(0.7, 'rgba(204,204,255,1)');
  gradient.addColorStop(0.8, 'rgba(192,192,255,1)');
  return gradient;
}
//gradient Lipid
function getGradientLipid(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(253,227,255,1)');
  // gradient.addColorStop(0.95, 'rgba(252,216,255,1)');

  // gradient.addColorStop(0.8, 'rgba(215,240,253,255)');
  // gradient.addColorStop(0.9, 'rgba(179,224,244,255)');
  // gradient.addColorStop(0.95, 'rgba(151,207,235,255)');
  // gradient.addColorStop(0.8, 'rgba(217,236,250,255)');
  // gradient.addColorStop(0.9, 'rgba(186,215,241,255)');
  // gradient.addColorStop(0.95, 'rgba(156,193,231,255)');

  gradient.addColorStop(0.3, 'rgba(233,236,246,255)');
  gradient.addColorStop(0.7, 'rgba(190,194,226,255)');
  gradient.addColorStop(0.8, 'rgba(164,172,215,255)');
  return gradient;
}
//gradient SC
function getGradientSC(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.8, 'white');
  // gradient.addColorStop(0.9, 'rgba(225,225,255,1)');
  // gradient.addColorStop(0.95, 'rgba(213,213,255,1)');

  // gradient.addColorStop(0.8, 'rgba(198,233,244,255)');
  // gradient.addColorStop(0.9, 'rgba(172,224,236,255)');
  // gradient.addColorStop(0.95, 'rgba(150,216,231,255)');

  gradient.addColorStop(0.3, 'rgba(215,240,253,255)');
  gradient.addColorStop(0.7, 'rgba(179,224,244,255)');
  gradient.addColorStop(0.8, 'rgba(151,207,235,255)');
  return gradient;
}
//gradient SCESS
function getGradientSCESS(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(215,215,255,1)');
  // gradient.addColorStop(0.95, 'rgba(206,206,255,1)');

  // gradient.addColorStop(0.8, 'rgba(219,241,244,255)');
  // gradient.addColorStop(0.9, 'rgba(198,232,234,255)');
  // gradient.addColorStop(0.95, 'rgba(165,219,220,255)');

  gradient.addColorStop(0.3, 'rgba(198,233,244,255)');
  gradient.addColorStop(0.7, 'rgba(172,224,236,255)');
  gradient.addColorStop(0.8, 'rgba(150,216,231,255)');
  return gradient;
}
//gradient WC
function getGradientWC(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.8, 'white');
  // gradient.addColorStop(0.9, 'rgba(204,204,255,1)');
  // gradient.addColorStop(0.95, 'rgba(192,192,255,1)');

  // gradient.addColorStop(0.65, 'rgba(189,223,183,255)');
  // gradient.addColorStop(0.75, 'rgba(207,232,203,255)');
  // gradient.addColorStop(0.95, 'rgba(230,243,226,255)');

  // gradient.addColorStop(0.8, 'rgba(214,255,252,1)');
  // gradient.addColorStop(0.9, 'rgba(201, 255, 251, 1)');
  // gradient.addColorStop(0.95, 'rgba(201, 255, 251, 1)');

  gradient.addColorStop(0.3, 'rgba(219,241,244,255)');
  gradient.addColorStop(0.7, 'rgba(198,232,234,255)');
  gradient.addColorStop(0.8, 'rgba(165,219,220,255)');
  return gradient;
}
//gradient Frailty
function getGradientFrailty(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(233,255,219,1)');
  // gradient.addColorStop(0.85, 'rgba(220,255,197,1)');
  // gradient.addColorStop(0.95, 'rgba(211,255,182,1)');
  // gradient.addColorStop(1, 'rgba(206,255,173,1)');

  // gradient.addColorStop(0.65, 'rgba(224,238,199,255)');
  // gradient.addColorStop(0.75, 'rgba(202,226,166,255)');
  // gradient.addColorStop(0.95, 'rgba(179,215,133,255)');

  gradient.addColorStop(0.3, 'rgba(230,243,226,255)');
  gradient.addColorStop(0.7, 'rgba(207,232,203,255)');
  gradient.addColorStop(0.8, 'rgba(189,223,183,255)');
  return gradient;
}
//gradient PD
function getGradientPD(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'white');
  // gradient.addColorStop(0.75, 'rgba(214,255,252,1)');
  // gradient.addColorStop(0.95, 'rgba(201, 255, 251, 1)');

  // gradient.addColorStop(0.65, 'rgba(242,246,202,255)');
  // gradient.addColorStop(0.75, 'rgba(232,238,169,255)');
  // gradient.addColorStop(0.95, 'rgba(225,232,141,255)');

  gradient.addColorStop(0.3, 'rgba(224,238,199,255)');
  gradient.addColorStop(0.7, 'rgba(202,226,166,255)');
  gradient.addColorStop(0.8, 'rgba(179,215,133,255)');
  return gradient;
}
//gradient Asthma/COPD
function getGradientAsthmaCOPD(ctx, chartArea) {
  if (!chartArea) {
    return;
  }
  const centerX = (chartArea.left + chartArea.right) / 2;
  const centerY = (chartArea.top + chartArea.bottom) / 2;
  const r = Math.min(
    (chartArea.right - chartArea.left) / 2,
    (chartArea.bottom - chartArea.top) / 2
  );
  let gradient = ctx.createRadialGradient(
    centerX,
    centerY,
    0,
    centerX,
    centerY,
    r
  );
  // gradient.addColorStop(0.65, 'rgba(255,237,225,1)');
  // gradient.addColorStop(0.75, 'rgba(255,237,225,1)');
  // gradient.addColorStop(0.95, 'rgba(255, 218, 193, 1)');

  gradient.addColorStop(0.3, 'rgba(242,246,202,255)');
  gradient.addColorStop(0.7, 'rgba(232,238,169,255)');
  gradient.addColorStop(0.8, 'rgba(225,232,141,255)');

  return gradient;
}
// OUTSIDE CHART GRADIENT OPTIONS ==========================================
