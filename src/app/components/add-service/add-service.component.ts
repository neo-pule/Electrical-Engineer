import { Component, OnInit } from '@angular/core';
import { SccSkillService } from '../../service/scc-skill.service';
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

temp;
  constructor(private skillService : SccSkillService) { }

  
  submit(){
    this.skillService.addService(this.service);
    // this.route.navigateByUrl("/home");
  }
  try(){
    console.log(this.service);
    console.log(this.temp);
  }

  ngOnInit() {
  }

}
