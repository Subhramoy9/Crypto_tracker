import React, { createContext, useContext, useEffect, useState } from 'react'
import unknownuser from './unknownuser.png'
const Crypto = createContext();
const CryptoContext = ({children}) => {
    const [currency,setCurrency]=useState("INR");
    const [symbol,setSymbol]=useState("₹");
    const [url,setUrl]=useState(unknownuser);
    const [progress, setProgress] = useState(0);

    useEffect(()=>{
        if(currency==="INR"){
            setSymbol("₹")
        }
        else{
            setSymbol("$");
        }
    },[currency]);
  return (
    <Crypto.Provider value={{currency,setCurrency,symbol,url,setUrl,progress,setProgress}}>
        {children};
    </Crypto.Provider>
  )
}


export default CryptoContext
export const CryptoState=()=>{
    return useContext(Crypto);
}