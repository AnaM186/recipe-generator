function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-result", {
    strings: "Generating your perfect recipe...",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipeFormElement = document.querySelector("#recipe-form");
recipeFormElement.addEventListener("submit", generateRecipe);
