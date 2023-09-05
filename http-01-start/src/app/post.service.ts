import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Post } from './post.model';
import { catchError, map } from 'rxjs/operators'
import { Observable, Subject, throwError } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PostService {
  error = new Subject<string>()
  constructor(private http: HttpClient) { }

  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    this.http.post<{ name: string }>(
      'https://angular-guide-81d3b-default-rtdb.firebaseio.com/posts.json', 
      postData,
      {
        observe: 'response'
      }
      )
      .subscribe(responseData => {
        console.log(responseData)
      },
      error => this.error.next(error.message));
  }

  fetchPosts(): Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');

    return this.http
      .get<{ [key: string]: Post }>(
        'https://angular-guide-81d3b-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({
            'Custom-Header': 'Hello'
          }),
          params: searchParams
        }
        )
      .pipe(map((responseData: { [key: string]: Post }) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        }
      ));
     
  }

  clearPosts() {
    return this.http.delete('https://angular-guide-81d3b-default-rtdb.firebaseio.com/posts.json');
  }
}
