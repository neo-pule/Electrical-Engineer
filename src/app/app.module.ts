import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { AuthguardService } from '../service/authguard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFirestoreModule  } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule, FormGroup} from '@angular/forms'
import * as firebase from 'firebase';
import {HttpClientModule} from '@angular/common/http'
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,

  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatGridListModule,
} from '@angular/material';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';

const firebaseConfig = {
    apiKey: "AIzaSyB83CuKn-QSuzzxN6X8l2L5UKqfeb2NjvA",
    authDomain: "eletrical-engineer-cms.firebaseapp.com",
    databaseURL: "https://eletrical-engineer-cms.firebaseio.com",
    projectId: "eletrical-engineer-cms",
    storageBucket: "eletrical-engineer-cms.appspot.com",
    messagingSenderId: "931661674739",
    appId: "1:931661674739:web:65e43541f406b1822c1f86",
    measurementId: "G-99GQV7XQHK"
  };
  // firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
LoginComponent,
MainNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    // FormGroup,
    AngularFireModule.initializeApp(firebaseConfig),
    HttpClientModule,
    AngularFireModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,

    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatGridListModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
