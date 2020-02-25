import { Component, OnInit, ViewChild } from '@angular/core';
import { SccSkillService } from 'src/app/service/scc-skill.service';
import { MatTableDataSource } from '@angular/material';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
export interface Food {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  arrayService;
  arrayICTService;
  array;
  dataSource: Food[] = [
    { name: 'Yogurt', calories: 159, fat: 6, carbs: 24, protein: 4 },
    { name: 'Sandwich', calories: 237, fat: 9, carbs: 37, protein: 4 },
    { name: 'Eclairs', calories: 262, fat: 16, carbs: 24, protein: 6 },
    { name: 'Cupcakes', calories: 305, fat: 4, carbs: 67, protein: 4 },
    { name: 'Gingerbreads', calories: 356, fat: 16, carbs: 49, protein: 4 },
  ];
  // displayedColumns: string[] = ['name', 'calories', 'fat', 'carbs','protein'];
  displayedColumns: string[] = ['name', 'description', 'cost', 'actions'];
  constructor(private skill: SccSkillService) { }
  dataSourc: any;
  message;
  imgUrl;
  imgPath;
  service = {
    name: '',
    description: '',
    cost: 0,
    image: ''
  };
  uploadProfilePic(files) {
    console.log(files);

    //   if(event.length === 0){
    //     return;
    //   }
    //   var mimeType = event[0].type;
    //  if(mimeType.match(/image\/*/) == null){
    //   this.message =" Only images are supported."
    //  }
    //  const files = event[0];
    //   console.log(files)
    // //  const id = Math.random().toString(36).substring(2);
    // var reader = new FileReader();
    // this.imgPath= event;
    // reader.readAsDataURL(event[0]);
    // reader.onload = (_event) => {
    //   this.imgUrl =reader.result;
    // }
    //  const fileName = event[0].name;
    //  const file = event.target.files[0];
    //  const filePath = `uploads/profile_${id}`;
    //  console.log(id)
    //  console.log(file)
    //  console.log(filePath)
  }
  // run(){;
  //   this.skill.viewService().subscribe((err) =>{
  //     console.log(err)
  //   })
  // }
  update(a) {
    console.log(a.name + " updated!");
    this.skill.updateService(a);
  }
  delete(a) {
    this.skill.delete(a);
    console.log(a.name + " deleted!")
  }
  ngOnInit() {

    // this.afs.collection('user/').snapshotChanges().subscribe((data: any) => {
    //   this.array = data.map(e => {
    //     return {
    //       key: e.payload.doc.id,
    //       ...e.payload.doc.data()
    //     };
    //   });
    // })

    this.skill.viewService().subscribe((err) => {
      this.arrayService = err;
      console.log(this.arrayService)
      console.log(this.arrayService)
      this.dataSourc = new MatTableDataSource(this.arrayService)
      this.dataSourc.paginator = this.paginator;
      this.dataSourc.sort = this.sort;
    });





  }

}
