import React from 'react'

function Review({reviews}) {
  return (
    <div>
        <h1>REVIEWS</h1>
        {reviews.map(review=>(
            <div class="border-bottom">
                <div style={{display: 'flex',color:'green'}}>
                  <span><img style={{width: "25px", height: "25px", marginRight: "5px"}} src="https://media.istockphoto.com/id/1190207988/vector/appraisal-icon-vector-with-star-male-user-person-profile-avatar-symbol-for-rating-in-a-glyph.jpg?s=170667a&w=0&k=20&c=Tn2XL0zIGEhhOM6oAfFQF0A3ovHKvrI63kwwtRvuxrU=" alt=""  /></span>
                  <div style={{display: 'flex', flexDirection: 'column'}}>
                    {review.viewer.name}
                    <span>{Array(review.ratings).fill("⭐").join("")}</span>                   
                  </div>
                </div>
                
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