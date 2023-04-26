import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { HistoricalChart, SingleCoin } from './Api';
import { CryptoState } from './CryptoContext';
import {Line} from "react-chartjs-2"
import { Chart as ChartJS } from "chart.js/auto";
import CoinDescription from './CoinDescription';
import LoadingBar from 'react-top-loading-bar'
const CoinInfo = () => {

  const { currency, symbol,progress,setProgress } = CryptoState();
     const {id}=useParams();
     const [coin,setCoin]=useState('');
     const [days,setDays]=useState(365);

     
const coinInfo= async()=>{
    let data=await fetch(HistoricalChart(id,days,currency));
    let parsedData=await data.json();
    setCoin(parsedData.prices);
};

useEffect(()=>{
  coinInfo();
  setProgress(100);
},[days]);



     const ChartData={
       labels: Object.values(coin).map((e)=>{
        let d=new Date(e[0]);
                    
                        let hrs=d.getHours();
                        let min=d.getMinutes();
                        
                       let time= hrs>12?`${hrs-12}:${min}PM`:`${hrs}:${min}AM`;
                       
                   
                    
                     let day=d.getDay();
                     let month=d.getMonth();
                     let year=d.getFullYear();
                     let date=`${day}/${month}/${year}`;

                     return days>1?date:time;
                    
                    
              }),
       datasets: [
            
           {label:"price/year",
             data: Object.values(coin).map((e)=>{
                        return e[1];
                    }),
            borderColor: "rgb(248, 219, 5)",
            
                  }
       ],
       
     }
  return (
    <>
    <LoadingBar
    color='#f11946'
    progress={progress}
    
  />
    <div style={{width:'100vw',height:'100vh',backgroundColor:'rgb(34,34,53)'}}>
    <div style={{width:'1100px',
                 alignItems:'center',
                 display:'flex',
                 flexDirection:'column',backgroundColor:'rgb(34,34,53)'}}>
       <Line data={ChartData} />  
       <div >
       <button onClick={()=>setDays(182)} style={{margin:'5px',backgroundColor:'rgb(22, 27, 23)',color:'rgb(248, 219, 5)',border:'2px solid rgb(248, 219, 5)'}}>half-yearly</button>
       <button onClick={()=>setDays(91)} style={{margin:'5px',backgroundColor:'rgb(22, 27, 23)',color:'rgb(248, 219, 5)',border:'2px solid rgb(248, 219, 5)'}}>quarterly</button>
       <button onClick={()=>setDays(365)} style={{margin:'5px',backgroundColor:'rgb(22, 27, 23)',color:'rgb(248, 219, 5)',border:'2px solid rgb(248, 219, 5)'}}>yearly</button>
       <button onClick={()=>setDays(1)} style={{margin:'5px',backgroundColor:'rgb(22, 27, 23)',color:'rgb(248, 219, 5)',border:'2px solid rgb(248, 219, 5)'}}>1 day</button>
       </div>
    </div> 
    </div>
    
    </>

  )
}

export default CoinInfo
