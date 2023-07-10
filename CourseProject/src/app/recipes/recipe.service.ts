import { EventEmitter, Injectable} from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{

    constructor(private slService:ShoppingListService){}

    recipeSelected=new EventEmitter<Recipe>();
    private recipes:Recipe[] = [
        new Recipe("Test Recipe","This is a Test Recipe","https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg",[new Ingredient("idly-batter",2),new Ingredient("chutney",3)]),
        new Recipe("Test Recipe","This is a Test Recipe","https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/idli-recipe.jpg",[new Ingredient("idly-batter",2),new Ingredient("chutney",3)]),
      ];

    getRecipes(){
        return this.recipes.slice();//does not send the same reference but it sends a copy of recipe
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}