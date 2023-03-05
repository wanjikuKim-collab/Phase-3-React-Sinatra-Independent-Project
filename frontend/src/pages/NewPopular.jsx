import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
// import Row from "../component/MovieList/Row";
// import requests from '../helpers/Request';
import './NewPopular.css'
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