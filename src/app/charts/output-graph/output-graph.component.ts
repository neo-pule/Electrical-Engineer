import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-output-graph',
  templateUrl: './output-graph.component.html',
  styleUrls: ['./output-graph.component.scss']
})
export class OutputGraphComponent implements OnInit {
    electric : any;
    plumbing : any;
    ict : any;
data : any;
countE = 0;
countI = 0;
countP = 0;
  public options: any = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Monthly Average Requests'
  },
  subtitle: {
      text: 'Source: SCC Dashboard'
  },
  xAxis: {
      categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
      ],
      crosshair: true
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Requests '
      }
  },
  tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
          '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
  },
  plotOptions: {
      column: {
          pointPadding: 0.2,
          borderWidth: 0
      }
  },
  series: [{

    // no of requests made per month

      name: 'Electrical',
      data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

  }, {
      // no of requests made per month

      name: 'Plumbing',
      data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

  }, {
      // no of requests made per month
       
      name: 'ICT',
      data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

  // }, {
  //     name: 'Berlin',
  //     data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

  }]

  }

  public options1: any = {
    chart: {
            // plotBackgroundColor: null,
            // plotBorderWidth: null,
            // plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Total request made, 2020'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                }
            }
        },
        series: [{
            name: 'Request',
            colorByPoint: true,
            data: [{
                name: 'Plumbing',
                y: this.countP,
                sliced: true,
                selected: true
            }, {
                name: 'ICT',
                y: 2
            }, {
                name: 'Electricity',
                y: this.countE
            }]
        }]
    };



//     public options2: any = {
//       data: {
//         table: 'datatable'
//     },
//     chart: {
//         type: 'column'
//     },
//     title: {
//         text: 'Data extracted from a HTML table in the page'
//     },
//     yAxis: {
//         allowDecimals: false,
//         title: {
//             text: 'Units'
//         }
//     },
//     tooltip: {
//         formatter: function () {
//             return '<b>' + this.series.name + '</b><br/>' +
//                 this.point.y + ' ' + this.point.name.toLowerCase();
//         }
//     }

// }


  constructor(private afs: AngularFirestore) { }

  ngOnInit() {


    this.afs.collection('servicesPlumbing/').snapshotChanges().subscribe((ee) =>{
    this.plumbing = ee.map ( e => {
        return{
          key: e.payload.doc.id,
          ...e.payload.doc.data()  as any
        } ;
      });
      for(let item of this.plumbing)
    {
        // console.log(item.name + " has "+item.requestsMade + " requests made ..")
        this.countP += item.requestsMade;
    }
    console.log("total request for Plumbing : " + this.countP)
    });
      this.afs.collection('services/').snapshotChanges().subscribe((ee) =>{
        this.electric = ee.map ( e => {
            return{
              key: e.payload.doc.id,
              ...e.payload.doc.data()  as any
            } ;
          });
          for(let item of this.electric)
          {
            //   console.log(item.name + " has "+item.requestsMade + " requests made ..")
              this.countE += item.requestsMade;
            }
            console.log("total request for electric : " + this.countE)
        });
      this.afs.collection('serviceICT/').snapshotChanges().subscribe((ee) =>{
            this.ict = ee.map ( e => {
                return{
                  key: e.payload.doc.id,
                  ...e.payload.doc.data()  as any
                } ;
              });

              for(let item of this.ict)
              {
                //   console.log(item.name + " has "+item.requestsMade + " requests made ..")
                  this.countI += item.requestsMade;
                }
                console.log("total request for ICT : " + this.countI)
            });
    console.log(this.ict)
  
    // this.options1.series[0] = this.countP;
    // this.options1.series[1] = this.countE;
    Highcharts.chart('container', this.options);
    Highcharts.chart('container1', this.options1);
    // Highcharts.chart('container2', this.options2);
  }

}
