import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class SccSkillService {
  writePost;
  constructor (private dog : AngularFirestore) {
    
  }

  // getData(){
  //   return this.dog.collection('Grocery').valueChanges();
  // }

  addWorker(worker) {

    this.writePost = this.dog.collection<any>('workers');
    this.writePost.add(worker).then(() =>{

      console.log("worker added successful");
    });
}

addService(worker) {

  this.writePost = this.dog.collection<any>('services');
  this.writePost.add(worker).then(() =>{

    console.log("service added successful");
  });
}

}