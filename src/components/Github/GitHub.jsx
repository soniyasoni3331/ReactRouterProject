import React, { useEffect, useState } from "react";

function GitHub(){
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/soniyasoni3331')
        .then(response => response.json())
        .then(data =>{
            // console.log(data);
            setData(data);
        })
    },[])
    

    return(
        <div className="text-center p-4 bg-gray-600 text-white text-3xl flex flex-col justify-center items-center">Github followers: {data.followers} 
        <img src={data.avatar_url} alt="Git picture" width={300} className="m-4"/></div>
    )
}

export default GitHub