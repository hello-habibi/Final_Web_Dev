import { Link } from "react-router";

export default function MealCard({data}){

    return(
        <div >
            <img width={150}  src={data.strMealThumb} alt="" />
            <h4>{data.strMeal} </h4>
            <Link to={`/meal/${data.idMeal}`}><button>Show Details </button></Link> 
        </div>
    )
}