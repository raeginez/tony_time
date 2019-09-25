let url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const cocktail = document.getElementById('cocktail');
const searchForm = document.querySelector('.form');
const submitButton = document.getElementById('submit');

// asynchronous function to get the JSON document from the url
function getJSON() {
    fetch(url).then(response => response.json())
        .then(data => showCocktail(data))
        .catch(e => {
            cocktail.innerHTML = "<h3>No results found</h3>";
            console.error(e);
        });
}

// function to display data in browser
// WE COULD PUT THIS REPEATED CODE IN A SEPARATE FILE
function showCocktail(data) {
    let drink = data.drinks[0];
    console.group(drink);
    // // create div card to display drink:
    const card = document.createElement('div');
    card.className = "card";
    cocktail.appendChild(card);
    // we can add in an image - the url is drink.strDrinkThumb
    cocktail.innerHTML = "Name: " + drink.strDrink + "<br />";
    cocktail.innerHTML += "Ingredients: <br />"
    // Display as html list using string interpolation
    cocktail.innerHTML += drink.strMeasure1 + drink.strIngredient1 + "<br />";
    cocktail.innerHTML += drink.strMeasure2 + drink.strIngredient2 + "<br />";
    cocktail.innerHTML += drink.strMeasure3 + drink.strIngredient3 + "<br />";
    cocktail.innerHTML += drink.strMeasure4 + drink.strIngredient4 + "<br />";
    cocktail.innerHTML += drink.strMeasure5 + drink.strIngredient5 + "<br /><br />";
    cocktail.innerHTML += "Instructions: <br />" + drink.strInstructions;
}

// searchCocktail function
submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let searchValue = document.getElementById('searchText').value;
    url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + searchValue;
    getJSON();
});