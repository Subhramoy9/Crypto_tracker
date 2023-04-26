import React from 'react'
import Carousel from './Carousel'



const Banner = () => {
  return (
    <>
    <div style={{backgroundColor:'rgb(34,34,53)'}}>
    <h2 style={{marginLeft:'100px',color:'white'}}>Trending Coins</h2>
    <div className='Banner' style={{height:"300px",
        //  backgroundImage:"url(image.png)"
    }}>
         <Carousel />
      
    </div>
    </div>
    </>
  )
}

export default Banner
