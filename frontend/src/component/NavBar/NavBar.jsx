import React, { useEffect, useState } from 'react'
import SecondaryNAvigation from '../SecondaryNavigation/SecondaryNAvigation'
import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom'
import logo from './assets/logo.png'

function NavBar() {
  const links = [
   { name:'Home', link:"/"},
   { name:'TV Shows', link:"/series"},
   { name:'Movies', link:"/movies"},
   { name:'New & Popular', link:"/new&popular"},
   { name:'My List', link:"/mylist"},
  ]
// displaying black background on scrolling down
  const [blackBG, setBlackBG] = useState(false)

  function changeNavBackground(){
    window.scrollY>100 ? setBlackBG(true) : setBlackBG(false);
  }

  useEffect(()=>{
    window.addEventListener('scroll', changeNavBackground);
    return ()=> window.removeEventListener('scroll',changeNavBackground)//cleanup
  },[])

  return (
    <div className={`${styles.nav} ${blackBG && `${styles.nav_black}`}`}>
      <div className={styles.mainNav}>
        <img className={styles.logo} src={logo} alt="Netflix Logo"/>      
        <ul className={styles.navItems}>
          {
            links.map((link)=>{
              return(<li key={link.name}>
                {/* <a href="/home" > Home</a> */}
                <NavLink className={styles.Link} to={link.link}>{link.name}</NavLink>
              </li>)
            })
          }       
        </ul>       
      </div>
      <SecondaryNAvigation />
    </div>
  )
}

export default NavBar