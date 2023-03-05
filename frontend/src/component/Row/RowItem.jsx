import React from "react";
import './Row.css'
import Review from './Review';
import { NavLink } from 'react-router-dom';


function RowItem({movie,onDeleteItem}){
    function handleDeleteClick() {
        fetch(`http://localhost:9292/mylist/${movie.id}`, {
          method: "DELETE",
        })
          .then((r) => r.json())
          .then(() => onDeleteItem(movie));
      }

    return(
        <>
            <img 
            id={movie.key}
            src={movie.image}
            alt={movie.title} />
            <div className="item_info">
                <div className="icons">
                    <div className="play_like">
                        <i className="icon play circle"/>
                        <i className="icon minus circle" onClick={handleDeleteClick}/>
                        <i className="icon thumbs down outline circle"/>
                        <i className="icon thumbs up"/>
                    </div>
                    <div className="dropdown">
                        <NavLink to={`/mylist/${movie.id}`}><i className="icon angle down circle" style={{marginLeft: '10px'}}/></NavLink>
                    </div>
                </div>
                <div className="itemInfoTop">
                    <span style={{color: 'green'}}>98%Match</span>
                    <span style={{border:' 1px solid grey', padding:'1px 3px', margin:'0 10px'}}>+16</span>                      
                    <span>1 season</span>
                </div>
                <div className="overview">
                    {movie.overview}
                </div>
                <div className="genre">
                    {movie.genre.split(",").map(g=>(<li className='genre_item'>{g}</li>))}
                </div>
                <div className="reviews">
                    {movie.reviews.map(review=>(
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
