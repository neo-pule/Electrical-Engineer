import { Component, OnInit,Inject, Input } from '@angular/core';
import { SccSkillService } from '../../service/scc-skill.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router, ActivatedRoute} from '@angular/router';
export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.scss']
})
export class AddServiceComponent implements OnInit {
service = {
  name : "",
  description :"",
  cost : 0

}
@Input() temp:any;

  constructor( private nav : ActivatedRoute,private skillService : SccSkillService,public dialogRef: MatDialogRef<AddServiceComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

    try(arr){
      // this.skillService.updateService(arr);
      console.log(arr);
    }
  submit(){
    this.skillService.addService(this.service);
    // this.route.navigateByUrl("/home");
  }
  try1(){
    console.log(this.service);
    console.log(this.temp);
  }

  ngOnInit() {
    this.nav.queryParams.subscribe(data => {
      console.log(data)
      this.temp = data
      console.log(JSON.stringify(this.temp))
  });

  }

}
