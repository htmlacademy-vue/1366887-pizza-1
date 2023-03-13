import dough from "../enums/dough";
import size from "../enums/size";
import sauce from "../enums/sauce";
import ingredient from "../enums/ingredient";

export const normalizeDough = (doughItem) => ({
  ...doughItem,
  value: dough[doughItem.id],
});

export const normalizeSize = (sizeItem) => ({
  ...sizeItem,
  value: size[sizeItem.multiplier],
});

export const normalizeSauce = (sauceItem) => ({
  ...sauceItem,
  value: sauce[sauceItem.id],
});

export const normalizeIngredient = (ingredientItem) => ({
  ...ingredientItem,
  value: ingredient[ingredientItem.id],
});
