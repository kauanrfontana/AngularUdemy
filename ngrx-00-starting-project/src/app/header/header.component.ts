import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

import { Component, OnDestroy, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as fromApp from '../store/app.reducer'
import * as AuthActions from '../auth/store/auth.actions'
import * as RecipesAction from "../recipes/store/recipe.actions"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>
  ) { }

  ngOnInit() {
    /* this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    }); */
    this.userSub = this.store.select('auth')
    .pipe(
      map(authState => authState.user)
    )
    .subscribe({
      next: (user) => {
        this.isAuthenticated = !!user;
      }
    })
  }

  onSaveData() {
    this.store.select("recipes")
    .pipe(map(recipesState => recipesState.recipes))
    .subscribe(recipes => {
      this.store.dispatch(new RecipesAction.StoreRecipes());
    })
  }

  onFetchData() {
    this.store.dispatch(new RecipesAction.FetchRecipes());
  }

  onLogout() {
    this.store.dispatch(new AuthActions.Logout());
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
