
const taco = {id:1, name:'chicken', price:20, about:'Yummy'}

const taco1 = {id:2, name:'carne asada', price:18, about:'Tasty'}

const taco2 = {id:3, name:'fish', price:30, about:'So good'} 



const tacos = [taco, taco1, taco2]



// write a function that takes an tacoOBJ and a id
// and returns a new object with name changed to "changed"

const newFood = (tacoObj, id)=> {
  let newTaco = {...tacoObj, name: 'changed', id: id}
  console.log(newTaco);
};

newFood (taco1, 4)



// write a function that takes an tacoOBJ and return some
// formatted html (will be a string technically)
// console.log (
//   `The ${taco.name} taco has a price of
//   ${taco.price}
//   dollars and is menu item
//   ${taco.id}`);
  
  const formatTacoHTML = (tacoObj) => {
    const {name, price} = tacoObj 
    return `
     <div>
        <h1>${name}: ${price}</h1>
     </div>
    `
 } 

// write a function that takes an tacoOBJ and return formatted price with

// .00 



// create a new array where all of the prices is formatted with .00



// write a function that takes an array and logs each item in the array

// hint forEach
tacos.forEach(function (id, name, price){
  console.log(id, name, price);
});



// use the find method to return the object with id:1
tacos.forEach(function (id, name, price){
  if (id === '1'){
    return {id, name, price}
  }else{
    return tacos
  }
  console.log(id, name, price);
});



// return a new array with all prices greater than 19
tacos.filter(function(price){
  return price >= 19;
});



// return a new array with a 'about' key where it is a combo of

// name price and about




///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

// Update (update a taco) 

// Remove (delete a taco) 

// Create (add a taco) 



// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
