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
  constructor(private breakpointObserver: BreakpointObserver) {}

  onSearch(){
    
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
