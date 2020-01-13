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

constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,private route : Router) {
  this.mobileQuery = media.matchMedia('(max-width: 600px)');
  this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  this.mobileQuery.addListener(this._mobileQueryListener);
}

push(){
  this.route.navigateByUrl('addWorker');
}
fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

fillerContent = Array.from({length: 50}, () =>
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
     labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
     laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
     voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`);

private _mobileQueryListener: () => void;



ngOnDestroy(): void {
  this.mobileQuery.removeListener(this._mobileQueryListener);
}
}
