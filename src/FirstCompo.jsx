import { NavLink } from "react-router"


function FirstCompo({data }){
    // console.log(data)


    return(
        <NavLink className="none " to ={`/catagory/${data.strCategory}`}>
                    <div>
            <h3>Name : {data.strCategory}</h3>
            <img src={data.strCategoryThumb} alt="" />
            <p>Description: <br />{data.strCategoryDescription}</p>
        </div>
        </NavLink>
    )
}


export default FirstCompo