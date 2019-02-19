import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule} from '@angular/router';
import { TrendingComponent } from './trending/trending.component';
import { SubscriptionsComponent } from './subscriptions/subscriptions.component';
import { HomeComponent } from './home/home.component';
import { HistoryComponent } from './history/history.component';
import { SettingsComponent } from './settings/settings.component';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { YoutubePlayerModule } from 'ngx-youtube-player';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    MainNavComponent,
    TrendingComponent,
    SubscriptionsComponent,
    HomeComponent,
    HistoryComponent,
    SettingsComponent,
    YoutubeplayerComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot([
      {path:"home",component:HomeComponent},
      {path:"trending",component:TrendingComponent},
      {path:"subscriptions",component:SubscriptionsComponent},
      {path:"history",component:HistoryComponent},
      {path:"settings",component:SettingsComponent},
      {path:'',redirectTo:'home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
