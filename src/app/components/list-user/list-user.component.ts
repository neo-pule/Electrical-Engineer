import { Component, OnInit, ViewChild } from '@angular/core';
import {Sort} from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AngularFirestoreDocument, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import {MatTableDataSource} from '@angular/material'
export interface Food {
   calories: number;
   carbs: number;
   fat: number;
   name: string;
   protein: number;
}

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  @ViewChild(MatPaginator,  {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  dataSource: Food[] = [
    {name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4},
    {name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4},
    {name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6},
    {name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4},
    {name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4},
 ];
 //displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs','protein'];
  displayedColumns: string[] = ['name', 'surname', 'role', 'location','phone'];
 array;
 dataSourc : any;


 
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.afs.collection('user/').snapshotChanges().subscribe((data: any) => {
      this.array = data.map(e => {
        return {
          key: e.payload.doc.id,
          ...e.payload.doc.data()
        };
      });

      console.log(this.array)
      this.dataSourc = new MatTableDataSource(this.array)
      this.dataSourc.paginator = this.paginator;
      this.dataSourc.sort = this.sort;
    })
  }

}
