import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('a test recipe', 'this is simple test','https://images-gmi-pmc.edge-generalmills.com/c8cbc66e-8f56-4fcd-ae39-582c7d15668f.jpg'),

    new Recipe('a test recipe', 'this is simple test','https://simplygluten-free.com/wp-content/uploads/2016/02/Gluten-Free-Falafel-Waffle-Recipe.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
