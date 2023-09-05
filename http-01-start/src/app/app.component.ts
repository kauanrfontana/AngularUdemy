import { Component, OnDestroy, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostService } from './post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  errorSub: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.errorSub = this.postService.error.subscribe(
      (errorMessage) => this.error = errorMessage
    )
    this.fecthPosts();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);

  }

  onFetchPosts() {
    // Send Http request
    this.fecthPosts();

  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPosts()
      .subscribe(() => {
        this.loadedPosts = [];
      });
  }

  onHandleError() {
    this.error = null;
  }

  private fecthPosts() {
    this.isFetching = true;
    this.postService.fetchPosts()
      .subscribe(
        posts => {
          this.isFetching = false;
          this.loadedPosts = posts;
        },
        (error: Error) => {
          this.isFetching = false;
          this.error = error.message;
        });
  }

  ngOnDestroy(): void {
    this.errorSub.unsubscribe();
  }
}
