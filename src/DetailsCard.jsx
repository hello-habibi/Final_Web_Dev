import { useEffect, useState } from "react";
import { useParams } from "react-router"


export default function DetailsCard({data}){
    const mealId = useParams().mealId;

    const[details , setDetail] = useState(null)


    return(
        <div>
            <h1>Showing the data of  {mealId}</h1>



        </div>
    )
}