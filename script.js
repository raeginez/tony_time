const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const cocktail = document.getElementById('cocktail');
const button = document.querySelector('.button');

// asynchronous function to get the JSON document from the url
function getJSON() {
    fetch(url).then(response => response.json())
        .then(data => showCocktail(data))
        .catch (e => {
        cocktail.innerHTML = "<h3>Oooops ... there was a problem!</h3>";
        console.error(e);
        });
}
// getJSON();

// function to display data in browser
function showCocktail(data) {
    let drink = data.drinks[0];
    console.log(drink);
    const card = document.createElement('div');
    card.className = 'card';
    cocktail.appendChild(card);
    // we can add in an image - the url is drink.strDrinkThumb
    cocktail.innerHTML = "Name: " + drink.strDrink + "<br />";
    cocktail.innerHTML += "Ingredients: <br />"
    // could do string interpolation? Also, we could make this into a list with html.
    cocktail.innerHTML += drink.strMeasure1 + drink.strIngredient1 + "<br />";
    cocktail.innerHTML += drink.strMeasure2 + drink.strIngredient2 + "<br />";
    cocktail.innerHTML += drink.strMeasure3 + drink.strIngredient3 + "<br />";
    cocktail.innerHTML += drink.strMeasure4 + drink.strIngredient4 + "<br />";
    cocktail.innerHTML += drink.strMeasure5 + drink.strIngredient5 + "<br /><br />";
    cocktail.innerHTML += "Instructions: <br />" + drink.strInstructions;
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    getJSON();
});