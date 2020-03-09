import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnDestroy{
  mobileQuery: MediaQueryList;
  sideBarOpen = true;
  adminPages = [
    { name: 'Home', page: 'home' , icon:'assignment'},
    //{ name: 'Add New Course', page: 'addNewCourse' },
    { name: 'Courses', page: 'courses' },
    { name: 'Add Course Content', page: 'addCourseContent' },
    { name: 'Add User', page: 'addUser' },
    { name: 'Applications', page: 'applications' },
    { name: 'Registered Students', page: 'posts'}
  ]
  pagesToDisplay = [];
constructor(private route : Router) {

}

push(){
  this.route.navigateByUrl('main-nav/listService');
}



ngOnDestroy(): void {

}
}
