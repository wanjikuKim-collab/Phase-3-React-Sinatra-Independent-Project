import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
import './Home.css'
import Row from "../component/Row/Row";



function MyList() { 
  return (
    <div>
      <BillBoard />
      <NavBar/>
      <Row/>
      <Footer />
    </div>
  )
}

export default MyList