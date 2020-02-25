import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFirestoreDocument} from '@angular/fire/firestore'
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})


export class SccSkillService {
  writePost;
  private itemDoc: AngularFirestoreDocument<Item>; // class name

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

delete(obj :any){
console.log(obj);
    return this.dog.collection('services/').doc(obj.id).delete().then(() =>{

      alert('service '+ obj.name+' successful deleted');
    }
    );

}
updateService(item){
  console.log(item)
  this.itemDoc = this.dog.collection('services/').doc(item.id);
  this.itemDoc.update(item).then(() =>{
    alert(item.name +' is updated successful')
  });
  console.log("service updated succesful");
}

viewService(){
  return this.dog.collection<any>('services').snapshotChanges().pipe(
    map(actions => actions.map(a => {
      const data = a.payload.doc.data() as any;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
}

viewDetailRequest(id){
  return this.dog.collection<any>('request').doc(id).valueChanges();
}

viewRequest(){
  return this.dog.collection<any>('request', ref => ref.orderBy('stamp','desc')).snapshotChanges();
  // .pipe(
  //   map(actions => actions.map(a => {
  //     const data = a.payload.doc.data() as any;
  //     const id = a.payload.doc.id;
  //     return { id, ...data };
  //   }))
  // );
}

addService(worker) {

  this.writePost = this.dog.collection<any>('services');
  this.writePost.add(worker).then(() =>{

    console.log("service added successful");
  });
}

}