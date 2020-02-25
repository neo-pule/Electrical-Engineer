import { Component, OnInit, ViewChild } from '@angular/core';
import { SccSkillService } from 'src/app/service/scc-skill.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material';
export interface ListServiceItem {
  key: string;
  refNo: string;
  stamp: string;
}
@Component({
  selector: 'app-request-m',
  templateUrl: './request-m.component.html',
  styleUrls: ['./request-m.component.scss']
})
export class RequestMComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  total : number = 0;
  obj : any = [];

  arrayOfObjects: any [] = []
  dataSourc: ListServiceItem[] = [
    { key: "1", refNo: "1", stamp: '2020-01-19' },
    { key: "2", refNo: "2", stamp: '2020-01-19' }
  ];
  array = [];
  displayedColumns: string[] = ['key', 'refNo', 'stamp'];
  dataSource: MatTableDataSource<any>;
  listArr;
  constructor(private afs: AngularFirestore,private route : Router) { }


  next(i){
    console.log(i)
    this.route.navigate(['main-nav/request-m-detail/'], {queryParams : {key: i}});
  }
  ngOnInit() {
    this.afs.collection('request/').snapshotChanges().subscribe((aa: any) => {
      this.listArr = aa.map(e => {
        const data = e.payload.doc.data() as any;
        const  id =  e.payload.doc.id;
        return {
       id,... data
        }
        // const key = e.payload.doc.id;
        // const info = e.payload.doc.data() as request
        // return { key: key, elecObj: info.elecObj, ictObj: info.ictObj, time: info.time, date: info.date, stamp: info.stamp };
      });
      this.array = aa;
      // this.dataSource =  this.listArr;
      let a = 0;
      let b = 0;
      // for(a; a <= this.listArr.length;a++){
      // // if (this.listArr[a].elecObj.length){
      //   // for(b; b <= this.listArr[a].elecObj.length;b++) {
      // console.log(this.listArr[a].elecObj)
      // for (let listArr of this.listArr[a].elecObj) {
      //   console.log(listArr)
      // }
      //   }
      let tota = 0;
      for (let listArr of this.listArr) {
        
        if (listArr.eleObj && listArr.ictObj) {
          this.obj = listArr;
          // console.log(this.obj)
          this.arrayOfObjects.push(this.obj)
       
        }
      }
      console.log(this.arrayOfObjects)
      // }
      // }
      // console.log(this.array)
      this.dataSource = new MatTableDataSource(this.arrayOfObjects)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }

}
