import React from 'react'

function MoreInfo({movie}) {
  return (
    <>
        <div className="itemInfoTop">
            <span style={{color: 'green'}}>98%Match</span>
            <span style={{border:' 1px solid grey', padding:'1px 3px', margin:'0 10px'}}>+16</span>                      
            <span>1 season</span>
        </div>
    </>
  )
}

export default MoreInfo