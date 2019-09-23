const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const cocktail = document.getElementById('cocktail');
const button = document.querySelector('.button');

// asynchronous function to get the JSON document from the url
function getJSON() {
    fetch(url).then(response => response.json())
        .then(data => showCocktail(data));
    // .catch (e => {
    // cocktail.innerHTML = "<h3>Oooops ... there was a problem!</h3>";
    // console.error(e);
    // });
}
getJSON();

// function to display data in browser
function showCocktail(data) {
    console.log(data.drinks);
    const card = document.createElement('div');
    card.className = 'card';
    cocktail.appendChild(card);
}

button.addEventListener('click', (e) => {
    e.preventDefault();
    cocktail.innerHTML = "";
    getJSON;
});