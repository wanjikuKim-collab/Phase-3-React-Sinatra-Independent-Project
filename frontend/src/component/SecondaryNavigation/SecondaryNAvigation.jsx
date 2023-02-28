import React from 'react'
import styles from './SecondaryNavigation.module.css'
import Search from './Search'
import Notification from './Notification'
import Profiles from './Profiles'
import Dropdown from './Dropdown'

function SecondaryNAvigation() {
  return (
    <div className={styles.SecondaryNav}>
        <div className={styles.navElement}><Search /></div>
        <div className={styles.navElement}><Notification /></div>
        <div className={styles.navElement}><Profiles /></div> 
        <div className={styles.profiles}>
          <div className={styles.navElement}>< Dropdown/></div> 
          <div className={styles.options}>
            <span>Settings</span>
            <span>Logout</span>
          </div>   

        </div>
    </div>
  )
}

export default SecondaryNAvigation