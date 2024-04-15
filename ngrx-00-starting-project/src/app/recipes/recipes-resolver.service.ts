import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Recipe } from './recipe.model';
import * as fromApp from "../store/app.reducer";
import * as RecipesActions from "./store/recipe.actions"
import { Store } from "@ngrx/store";
import { map, of, switchMap, take } from "rxjs";
import { Actions, ofType } from "@ngrx/effects";

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private store: Store<fromApp.AppState>,
    private actions$: Actions
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.store.select("recipes").pipe(
      map(recipesState => recipesState.recipes),
      switchMap(recipes => {
        if(recipes.length === 0 ){
            this.store.dispatch(new RecipesActions.FetchRecipes);
            return this.actions$.pipe(ofType(RecipesActions.SET_RECIPES), take(1))
          }else{

            return of(recipes);
          }
        })
        )
  }
}
