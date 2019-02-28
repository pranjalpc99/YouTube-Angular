import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  EventEmitter,
  OnInit,
  Input,
  Output,
  ChangeDetectionStrategy,
  ViewEncapsulation
} from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Search } from '../search';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

    @Input() header: string;
    @Input() headerIcon = '';
    @Input() mainIcon = '';
  
    @Output() signIn = new EventEmitter();
    @Output() signOut = new EventEmitter();
    @Output() headerMainIconClick = new EventEmitter();

    classSearch = Search;

  searchData: Search;
  constructor(private breakpointObserver: BreakpointObserver,private router:Router) {}

  onSearch(search_string:Search):void{
    this.searchData=search_string;
    console.log(this.searchData);
    this.router.navigate(['showVideo',this.searchData]);
  }

  signInUser() {
    //this.appApi.signinUser();
    this.signIn.next();
  }

  signOutUser() {
    //this.appApi.signoutUser();
    this.signOut.next();
  }

  isSignIn() {
    //return this.authorization.isSignIn();
  }

  updateVersion() {
    //this.appApi.updateVersion();
  }

  checkVersion() {
    //this.appApi.checkVersion();
  }

  handleMainIconClick() {
    this.headerMainIconClick.emit();
  }

  changeTheme(theme) {
    //this.appApi.changeTheme(theme.value);
  }

}
