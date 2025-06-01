function generateRecipe(response) {
  new Typewriter("#recipe-result", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function getRecipeData(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#recipe-input");
  let apiKey = "tf4aa9e540f4cdoa5b4833a44f190a87";
  let prompt = `Generate a ${inputElement.value} recipe`;
  let context =
    "You are a professional chef. You create the most authentic recipes of every cuisine in the world. The recipe should be short and clear, with a list of ingredients and step-by-step instructions. Use HTML <br /> to separate ingredients, headings and the steps in the recipe. Do not include the name of the recipe. Sign the recipe with your name, Chef SheCodes AI, in HTML <strong> at the bottom of the recipe.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generateRecipe);
  let recipeResultElement = document.querySelector("#recipe-result");
  recipeResultElement.innerHTML = `Generating the perfect ${inputElement.value} recipe...`;
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", getRecipeData);
