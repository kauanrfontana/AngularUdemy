import { Component } from '@angular/core';
import { Recipe } from '../repice.model' 

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('a test recipe', 'this  is a symply test', 'https://www.tasteofhome.com/wp-content/uploads/2018/05/Baked-Mac-and-Cheese_EXPS_SDDJ17_25257_D08_04_4b.jpg'),
    ];
}
