

function FirstCompo({data }){
    // console.log(data)


    return(
        <div>
            <h3>Name : {data.strCategory}</h3>
            <img src={data.strCategoryThumb} alt="" />
            <p>Description: <br />{data.strCategoryDescription}</p>

        </div>
    )
}


export default FirstCompo