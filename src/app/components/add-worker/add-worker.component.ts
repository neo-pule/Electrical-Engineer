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
  constructor(private route : Router,private skillService : SccSkillService) {}


  push(){
    this.route.navigateByUrl('addService')
  }
  submit(){
    this.skillService.addWorker(this.item);
    // this.route.navigateByUrl("/home");
  }

  ngOnInit() {

  }


}
