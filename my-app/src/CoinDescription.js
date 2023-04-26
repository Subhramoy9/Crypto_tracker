import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { SingleCoin } from './Api';
import { useEffect } from 'react';

const CoinDescription = () => {
    const [coin,setCoin]=useState();
    const {id}=useParams();

    const fetchData=async()=>{

            const data= await fetch(SingleCoin(id));
            const parsedData=await data.json();
            console.log(parsedData);
             setCoin(data);
             console.log(coin);
          
    }

    useEffect(() => {
      fetchData();
    }, [])
     return (
  
       <div>
            {/* <img src={coin.image.large}/>  */}
           {/* <div><b>{coin.name}</b></div>    */}
            {/* <div>{coin.description.en.split(0,30)}</div>      */}
       </div>
     )
}

export default CoinDescription
