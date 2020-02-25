import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SccSkillService } from 'src/app/service/scc-skill.service';

@Component({
  selector: 'app-request-m-detail',
  templateUrl: './request-m-detail.component.html',
  styleUrls: ['./request-m-detail.component.scss']
})
export class RequestMDetailComponent implements OnInit {
key;
array;

arrayOfeleObj: any [] = [];
arrayOfictObj: any [] = [];
  constructor(private addr: ActivatedRoute,private sccskills :SccSkillService) { }


  details(){
    this.sccskills.viewDetailRequest(this.key).subscribe((data) =>{
      this.array =data;
      console.log(this.array)
      this.arrayOfictObj= this.array.ictObj;
      
      console.log(this.arrayOfictObj);
      this.arrayOfeleObj= this.array.eleObj;
      
      console.log(this.arrayOfeleObj);
      // for(let array of this.array.ictObj) {
        
        
      // }
      // for(let array of this.array.eleObj) {
      //   console.log(array)
      // }

    })
    // console.log(this.arrayOfObjects)
  }

  ngOnInit() {
    this.addr.queryParams.subscribe(data => {
      this.key = data.key;
      console.log(this.key)
    });
    this. details();
  }

}
