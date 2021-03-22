import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://lh3.googleusercontent.com/proxy/g8CRk4_xWdeAJmlSTMaIu3hNP65hQgQlry6F_zaGP8zHiINptXtY_QH30ZobvIFPKbL-Le25VbEypMnMSYNZYxfCRUpQpQuT-8V6YRLD4nb2nINFXY9RUHa-yo9yKL736BD1j7NqHTlF8YluVv40Yw',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://lh3.googleusercontent.com/proxy/g8CRk4_xWdeAJmlSTMaIu3hNP65hQgQlry6F_zaGP8zHiINptXtY_QH30ZobvIFPKbL-Le25VbEypMnMSYNZYxfCRUpQpQuT-8V6YRLD4nb2nINFXY9RUHa-yo9yKL736BD1j7NqHTlF8YluVv40Yw',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    }
  ];


  getAllRecipes() {
    return [...this.recipes];
  }


  getRecipe(recipeId: string) {
    return { ...this.recipes.find(recipe => recipe.id === recipeId) };
  }


  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => recipe.id !== recipeId);
  }


  constructor() { }
}
