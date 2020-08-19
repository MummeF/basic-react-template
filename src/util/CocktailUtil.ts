export function translateBadStringsToArray(str1: string, str2: string, str3: string, str4: string, str5: string, str6: string,
    str7: string, str8: string, str9: string, str10: string, str11: string, str12: string, str13: string, str14: string, str15: string): string[] {

    return [str1, str2, str3, str4, str5, str6, str7, str8, str9, str10, str11, str12, str13, str14, str15]
}

export function getIngredientsWithBeautifulFormat(drink: DrinkJSON): string[] {
    return translateBadStringsToArray(drink.strIngredient1, drink.strIngredient2,
        drink.strIngredient3, drink.strIngredient4, drink.strIngredient5, drink.strIngredient6,
        drink.strIngredient7, drink.strIngredient8, drink.strIngredient9, drink.strIngredient10,
        drink.strIngredient11, drink.strIngredient12, drink.strIngredient13, drink.strIngredient14,
        drink.strIngredient15)
}

export function getMeasureWithBeautifulFormat(drink: DrinkJSON): string[] {
    return translateBadStringsToArray(drink.strMeasure1, drink.strMeasure2,
        drink.strMeasure3, drink.strMeasure4, drink.strMeasure5, drink.strMeasure6,
        drink.strMeasure7, drink.strMeasure8, drink.strMeasure9, drink.strMeasure10,
        drink.strMeasure11, drink.strMeasure12, drink.strMeasure13, drink.strMeasure14,
        drink.strMeasure15)
}

export function doMagicAndMakeDrinkBeautiful(drink: DrinkJSON): Drink {
    let ingredients: Ingredient[] = [];

    let ingredNames = getIngredientsWithBeautifulFormat(drink);
    let ingredMeasures = getMeasureWithBeautifulFormat(drink);

    ingredNames.forEach(name => {
        if (name) {
            ingredients.push({ name, measure: ingredMeasures[ingredNames.indexOf(name)] });
        }
    })


    return {
        idDrink: drink.idDrink,
        strDrink: drink.strDrink,
        strDrinkAlternate: drink.strDrinkAlternate,
        strDrinkES: drink.strDrinkES,
        strDrinkDE: drink.strDrinkDE,
        strDrinkFR: drink.strDrinkFR,
        strTags: drink.strTags,
        strVideo: drink.strVideo,
        strCategory: drink.strCategory,
        strIBA: drink.strIBA,
        strAlcoholic: drink.strAlcoholic,
        strGlass: drink.strGlass,
        strInstructions: drink.strInstructions,
        strInstructionsES: drink.strInstructionsES,
        strInstructionsDE: drink.strInstructionsDE,
        strInstructionsFR: drink.strInstructionsFR,
        strDrinkThumb: drink.strDrinkThumb,
        ingredients,
        strCreativeCommonsConfirmed: drink.strCreativeCommonsConfirmed,
        dateModified: drink.dateModified,
    }
}

export interface DrinkJSON {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string;
    strDrinkES: string;
    strDrinkDE: string;
    strDrinkFR: string;
    strTags: string;
    strVideo: string;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string;
    strInstructionsDE: string;
    strInstructionsFR: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3: string;
    strIngredient4: string;
    strIngredient5: string;
    strIngredient6: string;
    strIngredient7: string;
    strIngredient8: string;
    strIngredient9: string;
    strIngredient10: string;
    strIngredient11: string;
    strIngredient12: string;
    strIngredient13: string;
    strIngredient14: string;
    strIngredient15: string;
    strMeasure1: string;
    strMeasure2: string;
    strMeasure3: string;
    strMeasure4: string;
    strMeasure5: string;
    strMeasure6: string;
    strMeasure7: string;
    strMeasure8: string;
    strMeasure9: string;
    strMeasure10: string;
    strMeasure11: string;
    strMeasure12: string;
    strMeasure13: string;
    strMeasure14: string;
    strMeasure15: string;
    strCreativeCommonsConfirmed: string;
    dateModified: string;
}

export interface Drink {
    idDrink: string;
    strDrink: string;
    strDrinkAlternate: string;
    strDrinkES: string;
    strDrinkDE: string;
    strDrinkFR: string;
    strTags: string;
    strVideo: string;
    strCategory: string;
    strIBA: string;
    strAlcoholic: string;
    strGlass: string;
    strInstructions: string;
    strInstructionsES: string;
    strInstructionsDE: string;
    strInstructionsFR: string;
    strDrinkThumb: string;
    ingredients: Ingredient[];
    strCreativeCommonsConfirmed: string;
    dateModified: string;
}

export interface Ingredient {
    name: string;
    measure: string;
}