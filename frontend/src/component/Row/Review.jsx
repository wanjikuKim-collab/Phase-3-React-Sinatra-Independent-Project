import React from 'react'

function Review({reviews}) {
  return (
    <div>
        <h1>REVIEWS</h1>
        {reviews.map(review=>(
            <div class="border-bottom">
                <p style={{color:'green'}}>{review.viewer.name}</p>
                <span>{Array(review.ratings).fill("⭐").join("")}</span>
                <li id={review.id} className='review'>{review.comment} 
                    <span>
                        <i className="icon edit"/>
                        <i className="icon close"/>
                    </span>
                </li>                        

        </div>   
                        ))}
    </div>
  )
}

export default Review