import {NgModule} from "@angular/core";
import {RecipesComponent} from "./recipes.component";
import {RecipesListComponent} from "./recipes-list/recipes-list.component";
import {RecipesDetailComponent} from "./recipes-detail/recipes-detail.component";
import {RecipeItemComponent} from "./recipes-list/recipe-item/recipe-item.component";
import {RecipeStartComponent} from "./recipe-start/recipe-start.component";
import {RecipeEditComponent} from "./recipe-edit/recipe-edit.component";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {SharedModule} from "../share/shared.module";
import {RecipesRoutingModule} from "./recipes-routing.module";

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailComponent,
    RecipeItemComponent,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports:[
    RouterModule,
    ReactiveFormsModule,
    RecipesRoutingModule,
    SharedModule
  ]
})
export class RecipesModule {}
