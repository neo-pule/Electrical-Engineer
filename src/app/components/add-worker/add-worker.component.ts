import { Component, OnInit } from '@angular/core';
import { SccSkillService } from '../../service/scc-skill.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.scss']
})
export class AddWorkerComponent implements OnInit {
item;
worker = {
  name : "",
  surname : "",
  gender : "",
  workerid : "",
  specialty : "",
  phoneNo : 0,
  bio :  ""
}
temp;
  constructor(private route : Router,private skillService : SccSkillService) { }

  try(){
    console.log(this.worker);
    console.log(this.temp);
  }



  push(){
    this.route.navigateByUrl('addService')
  }

  submit(){
    this.skillService.addWorker(this.worker);
    // this.route.navigateByUrl("/home");
  }

  ngOnInit() {

  }


}
