let searchInputDom = document.querySelector("search-input");
let apiKey = "2732988f21c44febb520f8872d9bddaa";
let favoriteList = [];
let favoriteAmountDom = document.querySelector("#favoriteAmount");

searchInputDom.addEventListener("keypress", function (e) {
    let ingredients = e.target.value;
    if (e.key === "Enter") {
      fetch(
        `https://api.spoonacular.com/recipes/complexSearch?includeIngredients=${ingredients}&apiKey=${apiKey}`
      )
        .then((respond) => respond.json())
        .then((list) => renderRecipes(list.results));
    } 
    console.log("you pressed", e.key);
  });