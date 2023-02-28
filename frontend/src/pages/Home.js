import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
// import Row from "../component/MovieList/Row";
// import requests from '../helpers/Request';
import './Home.css'



function Home() { 
  return (
    <div>
      <BillBoard />
      <NavBar/>
      <Footer />
    </div>
  )
}

export default Home