import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Tweet } from '../models/tweet.model';

@Injectable({
  providedIn: 'root'
})
export class TweetsService {

  API_URI = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getTweets(){
    return this.http.get<Tweet>(`${this.API_URI}/tweets`);
  }

  getTweet(id: string){
    return this.http.get(`${this.API_URI}/tweets/${id}`);
  }

  createTweet(tweet: Tweet){
    return this.http.post(`${this.API_URI}/tweets`, tweet);
  }

  deleteTweet(id: string){
    return this.http.delete(`${this.API_URI}/tweets/${id}`);
  }

  updateTweet(id: string, tweet: Tweet){
    return this.http.put(`${this.API_URI}/tweets/${id}`, tweet);
  }

}
