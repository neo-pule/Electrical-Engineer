import { Component, OnInit, ViewChild } from '@angular/core';
import { SccSkillService } from 'src/app/service/scc-skill.service';
import { Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material';
export interface ListServiceItem {
  key : string;
  refNo: string;
  stamp: string;
}

// const ELEMENT_DATA: ListServiceItem[] = [
//   {key : "1",refNo: "1", time: '2020-01-19'},
//   {key : "2",refNo: "2", time: '2020-01-19'}
// ];
@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {
  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSourc : ListServiceItem[] = [
    {key : "1",refNo: "1", stamp: '2020-01-19'},
    {key : "2",refNo: "2", stamp: '2020-01-19'}
  ];
array =[];
displayedColumns: string[] = [ 'key','refNo','stamp'];
dataSource :MatTableDataSource<any>;
listArr;
  constructor(private afs: AngularFirestore,private serve : SccSkillService, private route : Router) { }


  next(i){
    console.log(i)
    this.route.navigate(['main-nav/request-details/'], {queryParams : {key: i}});
  }
  ngOnInit() {
    this.afs.collection('request/').snapshotChanges().subscribe((aa : any) => {
    this.listArr = aa.map(e => {
      return {
        key: e.payload.doc.id,
        ...e.payload.doc.data()
      };
    });
      this.array = aa;
      // this.dataSource =  this.listArr;
      
      console.log(this.listArr)
      console.log(this.array)
      this.dataSource = new MatTableDataSource(this.listArr)
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })



    
  }

}
