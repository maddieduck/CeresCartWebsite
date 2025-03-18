//this was copied from Ceres Cart repo
function findRecipeDataOnPage() {
  var currentUrl = window.location.href;
  console.log("Current URL: " + currentUrl);

  if (currentUrl.includes("pinterest.com")) {
    // The user is on Pinterest
    console.log("You are on Pinterest!");

    var ingredientsArray = [];
    var elementsWithItemprop = document.querySelectorAll('[itemprop]');

    elementsWithItemprop.forEach(function(element) {
      if (element.getAttribute('itemprop') === 'recipeIngredient') {
        var ingredient = element.textContent.trim();
        ingredientsArray.push(ingredient);
      }
    });

    return {
      ingredients: ingredientsArray,
      instructions: null,
      totalTime: null,
      performTime: null,
      prepTime: null,
      cookTime: null,
      yield: null,
      image: null,
      description: null
    };
  } else {
    const scripts = document.querySelectorAll('script[type="application/ld+json"]');
    for (const script of scripts) {
      const schema = JSON.parse(script.textContent);
      console.log('Script parsed:', schema);

      let graph = schema['@graph'];
      if (graph != undefined) {
        for (const key in graph) {
          var value = graph[key];
          var recipeData = parseRecipeData(value);
          if (recipeData.ingredients || recipeData.instructions || recipeData.totalTime || recipeData.performTime || recipeData.prepTime || recipeData.cookTime || recipeData.yield || recipeData.image || recipeData.description) {
            return recipeData;
          }
        }
      } else {
        var recipeData = parseRecipeData(schema);
        if (recipeData.ingredients || recipeData.instructions || recipeData.totalTime || recipeData.performTime || recipeData.prepTime || recipeData.cookTime || recipeData.yield || recipeData.image || recipeData.description) {
          return recipeData;
        }

        for (const key in schema) {
          var value = schema[key];
          if (key === 'recipeIngredient' || key === 'recipeInstructions' || key === 'totalTime' || key === 'performTime' || key === 'prepTime' || key === 'cookTime' || key === 'recipeYield') {
            recipeData[key] = schema[key] || null;
          } else {
            var nestedData = parseRecipeData(value);
            if (nestedData.ingredients || nestedData.instructions || nestedData.totalTime || nestedData.performTime || nestedData.prepTime || nestedData.cookTime || nestedData.yield || nestedData.image || nestedData.description) {
              return nestedData;
            }
          }
        }
      }
    }

    // Return nulls if no recipe data is found
    return {
      ingredients: null,
      instructions: null,
      totalTime: null,
      performTime: null,
      prepTime: null,
      cookTime: null,
      yield: null,
      image: null,
      description: null
    };
  }
}