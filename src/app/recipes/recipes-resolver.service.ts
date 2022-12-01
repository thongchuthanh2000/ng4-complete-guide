import { RecipeService } from './recipes.service';
import { DataStorageService } from './../share/data-storage.server';
import { Recipe } from './recipe.model';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: "root" })
export class RecipesResolverService implements Resolve<Recipe[]>{

  constructor(private dataStorageService: DataStorageService, private recipesService: RecipeService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Recipe[] | Observable<Recipe[]> | Promise<Recipe[]> {
    const recipes = this.recipesService.getRecipes();

    if (recipes.length == 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
