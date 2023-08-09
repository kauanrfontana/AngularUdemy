import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { RecipeService } from '../services/recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit{
  recipeSelected: Recipe

  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.recipeSelected = this.recipeService.onSelectedRecipe(+this.route.snapshot.params['id']);
    this.route.params 
      .subscribe(
        (params: Params) => {
          this.recipeSelected = this.recipeService.onSelectedRecipe(+params['id']);
        }
      )
  }

  addToShoppingList(){
    this.recipeService.onAddToShoppingList(this.recipeSelected.ingredients);
    this.router.navigate(['/shopping-list']);
  }

  onDeleteRecipe() {
    this.recipeService.onDeleteRecipe(this.recipeSelected.id);
    this.router.navigate(['../'], {relativeTo: this.route});
  }

}
