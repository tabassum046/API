
function connect() {
var searchText = document.getElementById('search').value ; 
var url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
//console.log(url);

 fetch(url)
 .then(res => res.json() )
 .then(data => showData(data));

 document.getElementById('search').value = ""; 

}
function showData(data){

  console.log("data from showData Function", data);

  var oldContent = document.getElementById('container');
  oldContent.textContent= "";

  for (var i=0; i<data.meals.length; i++){
   console.log(data.meals[i]);

   var newDiv = document.createElement('div');
   newDiv.innerHTML = `<p>Meal Title: <span class="title-style">${data.meals[i].strMeal}  </span> </p>
                       <img class='img-style' src="${data.meals[i].strMealThumb}" >`;
                       newDiv.classList.add("meal-style");

                       oldContent.appendChild(newDiv);
  }
}
 
//defining an async function
 
// async function getApi(url) {
//   //storing the response
//   const response = await fetch(url);
 
//   //storing data in form of JSON
//   let data = await response.json();
//   console.log(data.categories);
//   show(data);
// }
const api_url = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const get_data = (req, res) => {
  fetch(api_url)
    .then((res) => res.json())
    .then((data) => {
      show(data);
      console.log(data.categories);
    });
};
 
const search_data = (req, res) => {
    
}
 
function show(data) {
  let tab = `<tr>
          <th>Id</th>
          <th>Category</th>
          <th>CategoryThumb</th>
          <th>Description</th>
         </tr>`;
 
  // Loop to access all rows
  for (let d of data.categories) {
    tab += `<tr> 
    <td>${d.idCategory} </td>
    <td>${d.strCategory}</td>
    <td>${d.strCategoryThumb}</td> 
    <td>${d.strCategoryDescription}</td>          
</tr>`;
  }
  // Setting innerHTML as tab variable
  document.getElementById('meals').innerHTML = tab;
}
 
get_data(api_url);