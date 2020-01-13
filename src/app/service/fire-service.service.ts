import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class FireServiceService {

  UserArray = [];
  constructor() { }

  getUsers() {
    var db = firebase.firestore();
    // var docRef = db.collection("eletrical-engineer-cms").doc("user");

    // return docRef.get().then((doc) => {
    //   if (doc.exists) {
    //       console.log("Document data:", doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch((error) => {
    //     console.log("Error getting document:", error);
    // });
    
    return db.collection("user/").get().then((SnapShot) => {

      if(SnapShot.empty){
        console.log("Document has no data!");
      }else{
        SnapShot.forEach((doc) => {
          this.UserArray.push(doc.data());
        });
      }
      return this.UserArray;
    });
  }
}
