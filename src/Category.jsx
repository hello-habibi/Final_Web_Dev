import { useEffect, useState } from "react";
import { useParams } from "react-router"
import MealCard from "./MealCard";

export default function Category (){
    console.log(useParams())

    const categoryName = useParams().catagory;
     const [meals , setMeals] = useState([])

     useEffect(()=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
        .catch(err => console.log(err))
        console.log(meals)


     },[categoryName])

    return (
        <div>
        <h1>All the data of the {categoryName}  Category </h1>
        {
            meals.map((meal) => <MealCard key={meal.idMeal} data={meal}></MealCard>)
        }
        </div>
    )
}