import { Component, OnInit , AfterViewInit } from '@angular/core';
//import { YoutubePlayer } from 'ngx-youtube-player';

declare const gapi: any;

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements AfterViewInit  {

  constructor() { }

  private clientId:string = '750826532343-m3oarebsm6ejt7moj051rngm2ce7joac.apps.googleusercontent.com';

  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {

        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        //YOUR CODE HERE


      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit(){
    this.googleInit();
}

signOut(){
  this.auth2.signOut().then(function () {   
    console.log('User signed out.');   
    this.auth2.disconnect();   
  }); 
}

 
}
