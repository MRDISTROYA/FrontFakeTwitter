import { Component, OnInit } from '@angular/core';
import { Tweet } from 'src/app/models/tweet.model';
import { TweetsService } from 'src/app/services/tweets.service';


@Component({
  selector: 'app-tweets-list',
  templateUrl: './tweets-list.component.html',
  styleUrls: ['./tweets-list.component.css']
})
export class TweetsListComponent implements OnInit {

  listTweet: any;

  constructor(private tweetsService: TweetsService) { }

  ngOnInit(): void {
    this.tweetsService.getTweets().subscribe(
      res => {
        console.log(res);
        this.listTweet = res;
      },
      err => console.log(err)
    )
  }
}

