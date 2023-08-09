import { Component, ElementRef, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy{
  ingredientsForm: FormGroup;
  private subscription: Subscription
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredientsForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'amount': new FormControl(1, [Validators.required, Validators.min(1)])
    })

    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.ingredientsForm.setValue({
          'name': this.editedItem.name,
          'amount': this.editedItem.amount
        })
      })
  }

  onAddIngredient(){
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex, 
        {name: this.ingredientsForm.get('name').value, amount: this.ingredientsForm.get('amount').value }
        )
    } else {
      if(this.ingredientsForm.get('name').value && this.ingredientsForm.get('amount').value){
        this.shoppingListService.addIngredient( new Ingredient(this.ingredientsForm.get('name').value, this.ingredientsForm.get('amount').value))
      }
    }
  }

  onClearIngredients() {
    this.ingredientsForm.reset();
    this.editMode = false;
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex);
    this.onClearIngredients();
  }

  onSubmit(){
    this.onAddIngredient();
    this.editMode = false;
    this.ingredientsForm.reset();
    
  }

  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }


}
