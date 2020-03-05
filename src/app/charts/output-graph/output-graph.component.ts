import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

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
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'ICT',
                y: 11.84
            }, {
                name: 'Electricity',
                y: 10.85
            }]
        }]
    };



    public options2: any = {
      data: {
        table: 'datatable'
    },
    chart: {
        type: 'column'
    },
    title: {
        text: 'Data extracted from a HTML table in the page'
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Units'
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
  //   chart: {
  //     type: 'column'
  // },
  // title: {
  //     text: 'Browser market shares. January, 2018'
  // },
  // subtitle: {
  //     text: 'Click the columns to view versions. Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  // },
  // accessibility: {
  //     announceNewData: {
  //         enabled: true
  //     }
  // },
  // xAxis: {
  //     type: 'category'
  // },
  // yAxis: {
  //     title: {
  //         text: 'Total percent market share'
  //     }

  // },
  // legend: {
  //     enabled: false
  // },
  // plotOptions: {
  //     series: {
  //         borderWidth: 0,
  //         dataLabels: {
  //             enabled: true,
  //             format: '{point.y:.1f}%'
  //         }
  //     }
  // },

  // tooltip: {
  //     headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
  //     pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  // },

  // series: [
  //     {
  //         name: "Browsers",
  //         colorByPoint: true,
  //         data: [
  //             {
  //                 name: "Chrome",
  //                 y: 62.74,
  //                 drilldown: "Chrome"
  //             },
  //             {
  //                 name: "Firefox",
  //                 y: 10.57,
  //                 drilldown: "Firefox"
  //             },
  //             {
  //                 name: "Internet Explorer",
  //                 y: 7.23,
  //                 drilldown: "Internet Explorer"
  //             },
  //             {
  //                 name: "Safari",
  //                 y: 5.58,
  //                 drilldown: "Safari"
  //             },
  //             {
  //                 name: "Edge",
  //                 y: 4.02,
  //                 drilldown: "Edge"
  //             },
  //             {
  //                 name: "Opera",
  //                 y: 1.92,
  //                 drilldown: "Opera"
  //             },
  //             {
  //                 name: "Other",
  //                 y: 7.62,
  //                 drilldown: null
  //             }
  //         ]
  //     }
  // ],
  // drilldown: {
  //     series: [
  //         {
  //             name: "Chrome",
  //             id: "Chrome",
  //             data: [
  //                 [
  //                     "v65.0",
  //                     0.1
  //                 ],
  //                 [
  //                     "v64.0",
  //                     1.3
  //                 ],
  //                 [
  //                     "v63.0",
  //                     53.02
  //                 ],
  //                 [
  //                     "v62.0",
  //                     1.4
  //                 ],
  //                 [
  //                     "v61.0",
  //                     0.88
  //                 ],
  //                 [
  //                     "v60.0",
  //                     0.56
  //                 ],
  //                 [
  //                     "v59.0",
  //                     0.45
  //                 ],
  //                 [
  //                     "v58.0",
  //                     0.49
  //                 ],
  //                 [
  //                     "v57.0",
  //                     0.32
  //                 ],
  //                 [
  //                     "v56.0",
  //                     0.29
  //                 ],
  //                 [
  //                     "v55.0",
  //                     0.79
  //                 ],
  //                 [
  //                     "v54.0",
  //                     0.18
  //                 ],
  //                 [
  //                     "v51.0",
  //                     0.13
  //                 ],
  //                 [
  //                     "v49.0",
  //                     2.16
  //                 ],
  //                 [
  //                     "v48.0",
  //                     0.13
  //                 ],
  //                 [
  //                     "v47.0",
  //                     0.11
  //                 ],
  //                 [
  //                     "v43.0",
  //                     0.17
  //                 ],
  //                 [
  //                     "v29.0",
  //                     0.26
  //                 ]
  //             ]
  //         },
  //         {
  //             name: "Firefox",
  //             id: "Firefox",
  //             data: [
  //                 [
  //                     "v58.0",
  //                     1.02
  //                 ],
  //                 [
  //                     "v57.0",
  //                     7.36
  //                 ],
  //                 [
  //                     "v56.0",
  //                     0.35
  //                 ],
  //                 [
  //                     "v55.0",
  //                     0.11
  //                 ],
  //                 [
  //                     "v54.0",
  //                     0.1
  //                 ],
  //                 [
  //                     "v52.0",
  //                     0.95
  //                 ],
  //                 [
  //                     "v51.0",
  //                     0.15
  //                 ],
  //                 [
  //                     "v50.0",
  //                     0.1
  //                 ],
  //                 [
  //                     "v48.0",
  //                     0.31
  //                 ],
  //                 [
  //                     "v47.0",
  //                     0.12
  //                 ]
  //             ]
  //         },
  //         {
  //             name: "Internet Explorer",
  //             id: "Internet Explorer",
  //             data: [
  //                 [
  //                     "v11.0",
  //                     6.2
  //                 ],
  //                 [
  //                     "v10.0",
  //                     0.29
  //                 ],
  //                 [
  //                     "v9.0",
  //                     0.27
  //                 ],
  //                 [
  //                     "v8.0",
  //                     0.47
  //                 ]
  //             ]
  //         },
  //         {
  //             name: "Safari",
  //             id: "Safari",
  //             data: [
  //                 [
  //                     "v11.0",
  //                     3.39
  //                 ],
  //                 [
  //                     "v10.1",
  //                     0.96
  //                 ],
  //                 [
  //                     "v10.0",
  //                     0.36
  //                 ],
  //                 [
  //                     "v9.1",
  //                     0.54
  //                 ],
  //                 [
  //                     "v9.0",
  //                     0.13
  //                 ],
  //                 [
  //                     "v5.1",
  //                     0.2
  //                 ]
  //             ]
  //         },
  //         {
  //             name: "Edge",
  //             id: "Edge",
  //             data: [
  //                 [
  //                     "v16",
  //                     2.6
  //                 ],
  //                 [
  //                     "v15",
  //                     0.92
  //                 ],
  //                 [
  //                     "v14",
  //                     0.4
  //                 ],
  //                 [
  //                     "v13",
  //                     0.1
  //                 ]
  //             ]
  //         },
  //         {
  //             name: "Opera",
  //             id: "Opera",
  //             data: [
  //                 [
  //                     "v50.0",
  //                     0.96
  //                 ],
  //                 [
  //                     "v49.0",
  //                     0.82
  //                 ],
  //                 [
  //                     "v12.1",
  //                     0.14
  //                 ]
  //             ]
  //         }
  //     ]
  
}


  constructor() { }

  ngOnInit() {
    Highcharts.chart('container', this.options);
    Highcharts.chart('container1', this.options1);
    Highcharts.chart('container2', this.options2);
  }

}
