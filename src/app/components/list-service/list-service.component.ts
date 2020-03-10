import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ListServiceDataSource, ListServiceItem } from '../list-service/list-service-datasource';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material'
import { Router } from '@angular/router';
import { StoreInvoiceService } from 'src/app/service/store-invoice.service';

export interface Food {
   calories: number;
   carbs: number;
   fat: number;
   name: string;
   protein: number;
}

@Component({
  selector: 'app-list-service',
  templateUrl: './list-service.component.html',
  styleUrls: ['./list-service.component.scss']
})
export class ListServiceComponent implements OnInit {

  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  
   dataSource: ListServiceItem[] = [
  {id : 11 ,name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
  {id : 12 ,name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
  {id : 13 ,name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
  {id : 14 ,name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
  {id : 15 ,name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
];



 data: any;
  array;
  obj : any;
 displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs','protein'];

  constructor(private afs: AngularFirestore,private route : Router) { }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.data.filter = filterValue;
  }

  run(){
    console.log("Electrical service")
    this.route.navigateByUrl('service')
  }
  run1(){
    console.log("ICT service")
    this.route.navigateByUrl('service')
  }
  ngOnInit() {

   
    this.afs.collection('Graduate/').snapshotChanges().subscribe((data: any) => {
      this.array = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });
  
      console.log(this.array)
      this.data = new MatTableDataSource(this.array)
      this.data.paginator = this.paginator;
      this.data.sort = this.sort;
    });
  }
  
}
