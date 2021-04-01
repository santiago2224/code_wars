
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
    const logTacoArr = (tacoArr) => {
      return tacoArr.forEach((tacoItem)=>{
        const {id, name, price, about} = tacoItem
        nameCap = name.split("").map((name)=>name.charAt(0).toUpperCase() + name.slice(1)).join(" ")
        console.log(`${id}) ${nameCap} [$${price}] ~${about}~`)
      })
    }

    logTacoArr(tacos)



// use the find method to return the object with id:1
    const getTaco = (tacoArr) => {
      return tacoArr.find(tacoItem => tacoItem.id === 1)
    }

    let foundTaco = getTaco(tacos)
    console.log(foundTaco)




// return a new array with all prices greater than 19
const expensiveTacos = (tacoArr) => {
  return tacoArr.filter((tacoItem)=>{
    const {id, name, price, about} = tacoItem
    if(price > 19)
      return tacoItem
  })
}

let expensiveTacoArr = expensiveTacos(tacos)
console.log(expensiveTacoArr)



// return a new array with a 'about' key where it is a combo of

// name price and about
const aboutKey = (tacoArr) => {
  return tacoArr.map((tacoItem)=>{
    const {id, name, price, about} = tacoItem
    nameCap = name.split("").map((name)=>name.charAt(0).toUpperCase() + name.slice(1)).join(" ") 
    aboutCap = about.split("").map((about)=>about.charAt(0).toUpperCase() + about. slice(1)).join(" ")
    return{...tacoItem, about: `~${aboutCap}~ ${nameCap} Tacos only $${price}`}
  })
}

newAboutTacos = aboutKey(tacos)
console.log(newAboutTacos)




///CRUD

// don't change tacos array or change objects

// can hard code data (Don't need to get it from the users)



// READ (array of obj to array of html) 

// Update (update a taco) 
const updateTaco = (tacoItem, newName) => {
  const {id, name, price, about} = tacoItem

  return{...tacoItem, name: `${newName}`}
}

let updatedTaco = updateTaco(taco1, "beef")
console.log(updatedTaco)

// Remove (delete a taco)
const deleteTaco = (tacoArr) => {
  return tacoArr.filter((tacoItem)=>
    tacoItem.name !== "chicken"
  )
}

let deletedTacoArr = deleteTaco(tacos)
console.log(deletedTacoArr)


// Create (add a taco)
const addNewTaco = (tacoArr) => {
  tacoArr.push({id: 4, name: "tripa", price: 10, about: "intestines"})
  return tacoArr
}

let addNewTacoArr = addNewTaco(tacos)
console.log(addNewTacoArr)




// bonus use reduce to return the sum of prices in tacos array

// bonus do in rails

// bonus create you own
