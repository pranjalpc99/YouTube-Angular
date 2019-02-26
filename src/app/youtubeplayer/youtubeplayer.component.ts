import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtubeplayer',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.css'],
  template: `
        <youtube-player
      [videoId]="id"
      (ready)="savePlayer($event)"
      (change)="onStateChange($event)"
    ></youtube-player>
    `
})
export class YoutubeplayerComponent implements OnInit {

  player: YT.Player;
  private id: string = 'dLhKPgAotSQ';
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  constructor() { }

  ngOnInit() {
  }

}
