import React from 'react'

function Icons({handleDelete}) {
  return (  
    <div className="play_like">
        <i className="icon play circle"/>
        <i onClick={handleDelete} className="icon minus circle"/>
        <i className="icon thumbs down outline circle"/>
        <i className="icon thumbs up"/>
    </div>
  
  )
}

export default Icons