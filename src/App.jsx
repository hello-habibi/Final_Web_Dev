import { useEffect, useState } from "react";
import FirstCompo from "./FirstCompo";
import  SecondComp from "./SecondCompo";




function App() {

  const [categories , setCategories] = useState([])
  const[loading , setLoading] = useState(false);
  const [singleData , setData] = useState(null)

 
  // useEffect(()=>{
  //   console.log("renderd the effect code ")
  //   fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  //   .then(data=>data.json())
  //   .then(data => setCategories(data.categories))
  //   .catch(err =>console.log(err))


  // },[])

function hideData(){
  setCategories([])
}


 function showData(){

  setLoading(true)
  fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then(data=>data.json())
  .then(data => {
    setCategories(data.categories)
    setLoading(false)

  })
  .catch(err =>console.log(err))

}




const handleSubmit = (event) => {
  event.preventDefault(); // Prevent the form from reloading the page
  const formData = new FormData(event.target); // Create a FormData object
  const idNumber = formData.get('id_number'); // Get the value of the input with name="id_number"
  
  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idNumber}`)
  .then(res=>res.json())
  .then(data=>setData(data.meals[0]))
  .catch(err=>console.log(err))

  
  
 // Log the value to the console
};
return (
  <div>
    <h1>Total Categories : {categories.length}</h1>
    <button onClick = {showData} >show Data</button>
    <button onClick= {hideData}>Hide Data </button>
    <div>
      <h4>show Data with Id Name: </h4>

      <form onSubmit = {handleSubmit}>
        <input type="number" name ="id_number" />
        <button type="Submit">Search</button>
      </form>
      {
        singleData && <SecondComp data ={singleData}></SecondComp>
      }
    </div>
    
    {
      loading ? <h1>Data is Loading ...</h1> : categories.map(cat => <FirstCompo key={cat.idCategory} data={cat}></FirstCompo>)
    }

  </div>
);
}

export default App;
