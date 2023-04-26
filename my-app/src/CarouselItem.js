import React from 'react'
 import { Link } from 'react-router-dom'
const CarouselItem = (props) => {
    return (
        <>
            <div>
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" style={{height:"300px",
                display:"flex",
                paddingTop:"40px",
                padding:"20px"
                
            }}>
                    <div className="carousel-inner">
                        <div className="carousel-item active" style={{
                        display:"flex",
                        flexDirection:"column",
                        height:"100px",
                        
                        
                    }}>
                            <Link to={`/coin/${props.id}`}><img src={props.img} className="d-block w-100" alt={props.alt}/></Link><span style={{color:"white"}}>{props.names}</span>
                            <span style={{color:props.percentage>0?"green":"red"}}>{props.percentage>0?`+${props.percentage}`:`${props.percentage}`}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CarouselItem
