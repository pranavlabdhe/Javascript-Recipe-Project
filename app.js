     //Format of using the key
// https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
// API Key: 549c3e38f58048fe85f2f89eda892031
// https://api.spoonacular.com/food/products/
 const url="https://api.spoonacular.com/recipes/search?&apiKey=549c3e38f58048fe85f2f89eda892031"
 const api_key=" 549c3e38f58048fe85f2f89eda892031";
 const IMAGE_URL="https://spoonacular.com/recipeImages/";


//Selecting elements from DOM
const buttonElement = document.querySelector('.submit_button');
const reloadElement =  document.querySelector('#reload');
const inputElement = document.querySelector('#s');
const recipeSearchable = document.querySelector('#recipe-searchable')


function recipeSection(recipes){
return recipes.map((recipe)=>{
    return `
    <a href="${recipe.sourceUrl}"target="_blank">
    <img src= ${IMAGE_URL + recipe.image} data-movie-id=${recipe.id}/></a>

    `;
 })
}
function createRecipeContainer(recipes){
 const recipeElement = document.createElement('div');
 recipeElement.setAttribute('class','recipe_item');
 
 const recipeTemplate = 
 `
 <section class="section">
 <h1 class="click_recipe">Click on the image</h1>
     ${recipeSection(recipes)}
     </section>
     <div class="content">
       <p id="content-close">X</p>
     </div>
 `;
 recipeElement.innerHTML= recipeTemplate ;
 return recipeElement;
}
// recipeElement.location.reload(true);

buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;
    const newUrl = url + '&query=' +value 
    fetch(newUrl)
        .then((res)=> res.json())
        .then((data) => {
            const recipes = data.results;
           const recipeBlock = createRecipeContainer(recipes);
           recipeSearchable.appendChild(recipeBlock);
            console.log('Data',data);
        
        })
      
        .catch((error)=>{
            console.log('error',error)
        });
        console.log('Value',value)
    }
    reloadElement.onclick =function(){
        recipeSearchable.innerHTML = " ";
        inputElement.value = null;
    }






