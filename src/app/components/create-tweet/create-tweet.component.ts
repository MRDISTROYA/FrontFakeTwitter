import { Component, HostBinding, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { TweetsService } from '../../services/tweets.service';

@Component({
  selector: 'app-create-tweet',
  templateUrl: './create-tweet.component.html',
  styleUrls: ['./create-tweet.component.css']
})
export class CreateTweetComponent implements OnInit {

 @HostBinding('class') classes = 'row';
 tweet: Tweet = {
  idTweet:0,
  message: '',
  published_date: new Date(),
  user: '',
  author: '',
  device: ''
 };

  constructor(private tweetService: TweetsService) { }

  ngOnInit(): void {
  }

  saveTweet(){
    this.tweetService.createTweet(this.tweet)
      .subscribe(
        res =>{
          console.log(res);
        },
        err => console.log(err)
      );
  }

}
