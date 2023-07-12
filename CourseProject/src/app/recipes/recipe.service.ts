import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Subject } from "rxjs";

@Injectable()
export class RecipeService{
    recipesChanged: Subject<Recipe[]> = new Subject();
    constructor(private slService:ShoppingListService){}

    recipeSelected=new Subject<Recipe>();
    private recipes:Recipe[] = [
        new Recipe("Idly Sambar","All you need to do is steam the idly batter and prepare sambar ","https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg",[new Ingredient("idly-batter",2),new Ingredient("chutney",3)]),
        new Recipe("Test Recipe","This is a Test Recipe","https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg",[new Ingredient("idly-batter",2),new Ingredient("chutney",3)]),
      ];

    getRecipes(){
        return this.recipes.slice();//does not send the same reference but it sends a copy of recipe
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    getRecipe(index:number){
        return this.recipes.slice()[index];
    }

    addRecipe(recipe:Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice())
    }
    updateRecipe(index:number,recipe:Recipe,){
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}