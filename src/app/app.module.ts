import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { TweetsListComponent } from './components/tweets-list/tweets-list.component';
import { TweetComponent } from './components/tweet/tweet.component';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
//Angular Material
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
//Services
import { TweetsService } from './services/tweets.service';

@NgModule({
  declarations: [
    AppComponent,
    TweetsListComponent,
    TweetComponent,
    CreateTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    FormsModule
  ],
  providers: [
    TweetsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
