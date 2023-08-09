import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/services/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      1,
      'Tasty Schnitzel',
      'this  is a symply test', 
      'https://upload.wikimedia.org/wikipedia/commons/7/72/Schnitzel.JPG',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      2,
      'Big Fat Burger', 
      'What else u need to say?', 
      'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
      [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
      ]
      )
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    const recipe = this.recipes.find(
      (recipe: Recipe) => {
        return recipe.id === id;
      }
    );

    return recipe
  }

  onDeleteRecipe(id: number) {
    this.recipes = this.recipes.filter(
      (recipe: Recipe) => {
        return recipe.id != id;
      }
    )
    this.recipesChanged.next(this.recipes.slice());
  }

  onSelectedRecipe(id: number){
    const recipe = this.recipes.find(
      (recipe: Recipe) => {
        return recipe.id === id;
      }
    );
    
    return recipe;
  }

  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(id: number, newRecipe: Recipe) {
    const oldRecipeIndex = this.recipes.findIndex(
      (recipe: Recipe) => {
        return recipe.id === id;
      }
    )

    this.recipes[oldRecipeIndex] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
