import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(
    private route :Router,
    public afAuth: AngularFireAuth) {

      // var user = firebase.auth().currentUser;
    afAuth.auth.onAuthStateChanged((user) => {
      if (user) {
        // this.route.navigateByUrl('home')
      } else {
        this.route.navigateByUrl('login')
      }
    })

  }


  async signIn(email: string, password: string) {
    await this.afAuth.auth.signInWithEmailAndPassword(email, password).then((success) => {
      alert(email + 'successful signed in ..')
      this.route.navigateByUrl('login')
    }).catch((err) => {
      alert(err)
    })
  }


  signOut() {
    this.afAuth.auth.signOut().then((success) => {
     this.route.navigateByUrl('login').then(()=>{
       console.log("success" + success);
       this.route.navigateByUrl('/login');
     })



   }).catch((error) => {
     console.log(error)
   })
 }
}
