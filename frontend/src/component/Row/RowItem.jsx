import React from "react";
import './Row.css'
import Review from './Review';
import { NavLink } from 'react-router-dom';


function RowItem({id,image, title, overview,genre,reviews}){
    console.log(image)
    return(
        <>
            <img 
            src={image}
            alt={title} />
            <div className="item_info">
                <div className="icons">
                    <div className="play_like">
                        <i className="icon play circle"/>
                        <i className="icon minus circle"/>
                        <i className="icon thumbs down outline circle"/>
                        <i className="icon thumbs up"/>
                    </div>
                    <div className="dropdown">
                        <NavLink to={`/mylist/${id}`}><i className="icon angle down circle" style={{marginLeft: '10px'}}/></NavLink>
                    </div>
                </div>
                <div className="itemInfoTop">
                    <span style={{color: 'green'}}>98%Match</span>
                    <span style={{border:' 1px solid grey', padding:'1px 3px', margin:'0 10px'}}>+16</span>                      
                    <span>1 season</span>
                </div>
                <div className="overview">
                    {overview}
                </div>
                <div className="genre">
                    {genre.split(",").map(g=>(<li className='genre_item'>{g}</li>))}
                </div>
                <div className="reviews">
                    {reviews.map(review=>(
                    <li className='review'>{review.comment} 
                    <span>
                        <i className="icon edit"/>
                        <i className="icon close"/>
                    </span>
                    </li>                        
                    ))}
                <div className='review_form'>
                    <Review/>
                </div>
                </div>
            </div>
        </>
    )
}

export default RowItem
