import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe("Steak", "Medium-Rare steak photo", "https://hips.hearstapps.com/hmg-prod/images/20200109-seo-round-steak-delish-ehg-9267-jpg-1579900169.jpg?crop=1.00xw:0.716xh;0,0.0680xh&resize=1200:*"),
  ];

}
