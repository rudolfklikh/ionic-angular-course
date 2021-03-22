import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { switchMap, map, tap, finalize } from 'rxjs/operators';
import { Recipe } from '../recipe.model';
import { of, Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe$: Observable<Recipe>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertController: AlertController) { }

  ngOnInit() {
    this.loadedRecipe$ = this.activatedRoute.paramMap.pipe(
      map(paramMap => paramMap.get('recipeId')),
      switchMap(id => of(this.recipesService.getRecipe(id)))
    );
  }

  onDeleteRecipe() {
    this.alertController.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the recipe',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.loadedRecipe$.pipe(
              map(recipe => recipe.id),
              tap(id => this.recipesService.deleteRecipe(id)),
            ).subscribe(() => this.router.navigate(['/recipes']));
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
  }
}
