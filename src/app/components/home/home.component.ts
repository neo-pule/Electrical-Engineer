import { Component, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from '../add-service/add-service.component';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';

import { StoreInvoiceService } from '../../service/store-invoice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  uploadPercent;
  mainImage;
  imgURL;
  downloadU;
  service = {
    name : "",
    description :"",
    cost : 0,
    photoURL : ""
  
  }
  User = {
    id : '',
    cost : 0,
    description : '',
    name : '',
    photoURL : ''
  }



  constructor(private storeUser : StoreInvoiceService,public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private storage: AngularFireStorage) { }
  onNoClick(): void {
    this.dialogRef.close();
  }
  uploadFile(files) {
    if (files.length === 0)
    return;

  var mimeType = files[0].type;
  if (mimeType.match(/image\/*/) == null) {
    // this.message = "Only images are supported.";
    return;
  }

  const file = files[0];
  console.log(file)
  const fileName = files[0].name;
  var reader = new FileReader();
  // this.imagePath = files;
  reader.readAsDataURL(files[0]);
  console.log(reader)
  reader.onload = (_event) => {
    this.imgURL = reader.result;
    console.log(this.imgURL)
    console.log(reader.result)
  }
  console.log(this.imgURL)
    // const file = event.target.files[0];
    const filePath = 'pics/PIC' + Math.random().toString(36).substring(2);
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    task.snapshotChanges().pipe(
      finalize(() => {
        this.downloadU = fileRef.getDownloadURL().subscribe(url => {
          console.log(url);
          this.service.photoURL = url;
          this.mainImage = url
          this.uploadPercent = null;
        });
      })
    ).subscribe();
  }

  test() {
    if(this.User.name != "") {
      if(this.User.description != "") {
        if(this.User.cost != 0 || this.User.cost !=  null)  {
          console.log(this.User)
          } else {
            
          alert("Service cost required")
            console.log("User object cannot be empty")
          }
        }
        else {
          alert("Service description required")
          console.log("User object cannot be empty")
        }
        } else {
          alert("Service name required")
          console.log("User object cannot be empty")
        }
      }
    
  

  ngOnInit() {
   this.User = this.storeUser.getUser();
   console.log(this.User)
  }

}
