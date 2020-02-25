import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SccSkillService } from 'src/app/service/scc-skill.service';
@Component({
  selector: 'app-request-details',
  templateUrl: './request-details.component.html',
  styleUrls: ['./request-details.component.scss']
})
export class RequestDetailsComponent implements OnInit {
key : string;
array = {};
  constructor(private addr: ActivatedRoute,private sccskills :SccSkillService) { }


  details(){
    this.sccskills.viewDetailRequest(this.key).subscribe((data) =>{
      this.array =data;
      console.log(this.array);
    })

  }

  ngOnInit() {
    this.addr.queryParams.subscribe(data => {
      this.key = data.key;
      console.log(this.key)
    });
    this. details();
  }

}
