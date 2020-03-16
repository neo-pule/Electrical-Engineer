import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { AngularFirestore } from '@angular/fire/firestore';


declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

// Boost(Highcharts);
// noData(Highcharts);
// More(Highcharts);
// noData(Highcharts);

@Component({
  selector: 'app-widget-pie',
  templateUrl: './widget-pie.component.html',
  styleUrls: ['./widget-pie.component.scss']
})
export class WidgetPieComponent implements OnInit {
  wait : boolean = false;
  electric : any;
  plumbing : any;
  ict : any;
data : any;
scoreArr = [];
countE = 0;
countI = 0;
countP = 0;
  public options : any =  {
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
           data:[{
             name : "ICT",
             y : 45
           }]
         }]
   };
 
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
              Highcharts.chart('container1', this.options);
      // console.log(this.ict)
  
      // setTimeout(() => {
      //   this.options.series[0].data = [{y: this.countP, name: "Plumbing"},{y: this.countE, name: "Electric"},{y: this.countI, name: "ICT"}];
      //   this.wait = true;
      // }, 2000);
  }

}
