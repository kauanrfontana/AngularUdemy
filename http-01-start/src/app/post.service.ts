import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string ) {
    let postData: Post = {title: title, content: content};
    this.http.post<{ name: string }>(
      'https://angular-guide-81d3b-default-rtdb.firebaseio.com/posts.json',
      postData
    ).subscribe(responseData => {
      console.log(responseData);
    });
  }

  fetchPosts():Observable<{ [key: string]: Post }> {
    return this.http
      .get<{ [key: string]: Post }>('https://angular-guide-81d3b-default-rtdb.firebaseio.com/posts.json');
      
  }
}