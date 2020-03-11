import { Component, OnInit,Inject, Input, ViewChild } from '@angular/core';
import { SccSkillService } from '../../service/scc-skill.service';
// import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router, ActivatedRoute} from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { StoreInvoiceService } from 'src/app/service/store-invoice.service';
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})

export class AddServiceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
service = {
  name : "",
  description :"",
  cost : 0

}
displayedColumns: string[] = ['name', 'description', 'cost', 'actions'];
arrayService;
dataSourc;
name="ict";
animal;
@Input() temp:any;

  constructor(private route : Router,private storeUser : StoreInvoiceService,public dialog: MatDialog, private nav : ActivatedRoute,private skillService : SccSkillService) {}
    // @Inject(MAT_DIALOG_DATA) public data: DialogData) { }


    openDialog(obj : any): void {
      console.log(obj)
      this.storeUser.storeuser(obj);
      let a = "electric"
      
      this.dialog.open(HomeComponent, {
        width: '250px',
        data: {name: this.name}
      });
      // this.route.navigate(['main-nav/home'],{queryParams : {state : a}});
     
    }
  
      
    try(arr){
      // this.skillService.updateService(arr);
      console.log(arr);
    }
  submit(){
    this.skillService.addPlumService(this.service);
    // this.route.navigateByUrl("/home");
  }
  try1(){
    console.log(this.service);
    console.log(this.temp);
  }
  delete(a) {
    this.skillService.delete2(a);
    console.log(a.name + " deleted!")
  }
  ngOnInit() {
    this.nav.queryParams.subscribe(data => {
      console.log(data)
      this.temp = data
      console.log(JSON.stringify(this.temp))
  });

  this.skillService.viewServiceICT()
  .subscribe((err) => {
    this.arrayService = err;
    console.log(this.arrayService)
    console.log(this.arrayService)
    this.dataSourc = new MatTableDataSource(this.arrayService)
    this.dataSourc.paginator = this.paginator;
    this.dataSourc.sort = this.sort;
  });
  }

}
