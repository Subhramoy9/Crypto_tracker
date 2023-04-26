import React, { useEffect, useState } from 'react'
import { CryptoState } from './CryptoContext';
import { CoinList } from './Api';
import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';
import './App.css';
// import image from 
const Table = () => {

  const { currency, symbol,progress,setProgress } = CryptoState();
  const [coins, setCoins] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [search,setSearch]=useState('');

  const coinInfo = async () => {
    let data = await fetch(CoinList(currency));
    let parsedData = await (data).json();
    setCoins(parsedData);

  }
  useEffect(() => {
    coinInfo();
    setProgress(100);
  }, [currency])
 

   const onPageChange=({selected})=>{
       setPageNumber(selected);
         console.log(selected);    
   }

   

   const pageCount = Math.ceil(coins.length / 10);
  return (
    <>
    <div style={{backgroundColor:'rgb(34,34,53)'}}>
      <div style={{alignItems:'center'}}>
      <h1 style={{paddingLeft:'100px',color:'white',marginBottom:'20px'}}>Search for ur Crypto</h1>
     <form class="d-flex" role="search" style={{width:'80vw',
                                                marginLeft:'80px',marginBottom:'40px'}}>
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{setSearch(e.target.value)}}/>
       
      </form>
      </div>

       <table class="table" style={{width:'90vw',marginLeft:'50px',borderRadius:'20px'}}>
        <thead>
          <tr style={{backgroundColor:'rgb(248, 219, 5)'}}>
            <th scope="col">Coin</th>
            <th scope="col">Current Price</th>
            <th scope="col">24hrs % change</th>
            <th scope="col">Market Cap</th>
          </tr>
        </thead>
        <tbody >
          {coins.filter((e)=>{
            if(e===''){
              return e
            }
            else if(e.name.toLowerCase().includes(search)){
              return e
            }
          }).slice((pageNumber)*10,(pageNumber)*10+10)
           .map((e) => {
            
            let x = e.market_cap.toString();
            return (
            
              <tr>
            
                 <td><Link to={`/coin/${e.id}`} onClick={setProgress(100)}><img src={e.image} style={{width:'60px',
                                                padding:'10px'}}/>{e.name} </Link></td>
                <td style={{color:'white'}}>{symbol}{e.current_price}</td>
                <td style={{color:e.price_change_percentage_24h>0?"green":"red"}}>{e.price_change_percentage_24h>0?`+${e.price_change_percentage_24h}`:`${e.price_change_percentage_24h}`}</td>
                <td style={{color:'wheat'}}>{symbol}{x.slice(0, 2) + ',' + x.slice(2, 4) + ',' + x.slice(4, 7) + ',' + x.slice(7, x.length)}</td>
              </tr>
            )
          })}
        </tbody>
      </table> 
       
      <ReactPaginate
      previousLabel={"<<"}
      nextLabel={">>"}
      breakLabel={'...'}
      pageCount={pageCount}
     onPageChange={onPageChange}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      containerClassName={"pagination"}
      previousLinkClassName={"page-link"}
      nextLinkClassName={"page-link"}
      nextClassName={'page-item'}
      breakClassName={'page-item'}
      breakLinkClassName={'page-link'}
      activeLinkClassName={'active'}
      disabledClassName={"paginationDisabled"}
      activeClassName={"page-item active"}
      
      />
  </div>
    </>
  )
}

export default Table
