import React, { useEffect, useState } from 'react'
import { CryptoState } from './CryptoContext';
import { TrendingCoins } from './Api';
import image from './image.png';
import CarouselItem from './CarouselItem';
const Carousel = () => {

    const {currency,symbol}=CryptoState();
    const [trending,setTrending]=useState([]);

    let trendingCoins=async()=>{
      let data=await fetch(TrendingCoins(currency));
      let parsedData= await data.json()    
      setTrending(parsedData);
    
  }
     
  useEffect(()=>{
        trendingCoins();
    },[currency]);

   
  return (
    
    <div className='container' style={{display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    height:"300px",
    width:"100%",
    backgroundImage:`url(${image})`,
     backgroundRepeat:'no-repeat',
     backgroundSize:'1200px 400px',
      paddingTop:'100px'
    }}>
     
     
      {trending.map((e)=>{
        return(
          <CarouselItem id={e.id} img={e.image} alt={e.name} names={e.id} percentage={e.price_change_percentage_24h}
           />
        )
      })}
    
    </div>

  )
}

export default Carousel

