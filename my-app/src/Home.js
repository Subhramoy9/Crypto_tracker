import React from 'react'
import Banner from './Banner'
import Header from './Header'
import Table from './Table'

const Home = () => {
  return (
    <div style={{backgroundColor:'rgb(34,34,53)',height:'100vh'}}>
      <Header/>
      <Banner/>
      <Table/>
    </div>
  )
}

export default Home
