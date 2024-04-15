import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import * as ShoppingListActions from '../../shopping-list/store/shopping-list.actions'
import * as fromApp from '../../store/app.reducer';
import * as RecipesActions from '../store/recipe.actions'
import { map, switchMap } from "rxjs";

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<fromApp.AppState>) {
  }

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          this.id = +params["id"];
          return this.store.select("recipes").pipe(
            map(recipesState => recipesState.recipes),
            map(recipes => {
              return recipes.find((recipe, index) => index === this.id);
            })
          )
        })
      )
      .subscribe(
        (recipe: Recipe) => {
          this.recipe = recipe;
        }
      );
  }

  onAddToShoppingList() {
    // this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(this.recipe.ingredients));
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    // this.recipeService.deleteRecipe(this.id);
    this.store.dispatch(new RecipesActions.DeleteRecipe(this.id));
    this.router.navigate(['/recipes']);
  }

}
