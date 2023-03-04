import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
// import Row from "../component/MovieList/Row";
// import requests from '../helpers/Request';
import './NewPopular.css'
import Row from "../component/Row/Row";
import NewMovie from "../component/NewMovie/NewMovie";



function NewPopular() { 
  return (
    <div>
      <NavBar/>
      <NewMovie/>
      <Footer />
    </div>
  )
}

export default NewPopular