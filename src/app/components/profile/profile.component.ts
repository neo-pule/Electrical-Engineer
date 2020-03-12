import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/service/authguard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private auth : AuthGuardService) { }

  logout() {
    this.auth.signOut();
  }
  updateAdmin() {

  }


  ngOnInit() {
  }

}
