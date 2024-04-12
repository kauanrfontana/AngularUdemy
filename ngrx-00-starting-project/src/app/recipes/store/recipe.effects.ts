import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as RecipesActions from "../store/recipe.actions";
import { map, switchMap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { Recipe } from "../recipe.model";
import { Injectable } from "@angular/core";

@Injectable()
export class RecipesEffects {
  fetchRecipes = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipesActions.FETCH_RECIPES),
      switchMap(() => {
        return this.http
          .get<Recipe[]>(
            "https://ng-course-recipe-book-9fb9f-default-rtdb.firebaseio.com/recipes.json"
          )
      }),
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : [],
            };
          });
        }),
        map((recipes) => {
          return new RecipesActions.SetRecipes(recipes);
        })
      
    )
  );

  

  storeRecipes = createEffect(() => this.actions$.pipe(
    ofType(RecipesActions.STORE_RECIPES),
    switchMap((recipesData: RecipesActions.StoreRecipes) => {
      return this.http
          .put(
            'https://ng-course-recipe-book-9fb9f-default-rtdb.firebaseio.com/recipes.json',
            recipesData.payload
          )
         
    })
  ), {dispatch: false});

  constructor(private actions$: Actions, private http: HttpClient) {}
}
