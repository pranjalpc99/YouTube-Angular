import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css'],
  template: `
        <youtube-player
      [videoId]="id"
      (ready)="savePlayer($event)"
      (change)="onStateChange($event)"
    ></youtube-player>
    `
})
export class ShowVideoComponent implements OnInit {

  player: YT.Player;
  id: string = 'dLhKPgAotSQ';
  data;
 
  savePlayer(player) {
    this.player = player;
    console.log('player instance', player);
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }

  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    this.data = this.activatedRoute.snapshot.paramMap.get('data');
    this.id = this.data;
    console.log("new data",this.id);
  }

}
