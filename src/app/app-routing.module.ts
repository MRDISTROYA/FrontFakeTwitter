import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTweetComponent } from './components/create-tweet/create-tweet.component';
import { TweetsListComponent } from './components/tweets-list/tweets-list.component';

const routes: Routes = [
  {path: '', redirectTo: '/tweets/add', pathMatch: 'full'},
  {path: 'tweets/add', component: CreateTweetComponent},
  {path: 'tweets', component: TweetsListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
