import React from "react";
import './Row.css'
import { NavLink } from 'react-router-dom';
import Icons from "./Icons";
import MoreInfo from "./MoreInfo";

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
                    <Icons handleDelete={handleDeleteClick}/>
                    <div className="dropdown">
                        <NavLink to={`/mylist/${movie.id}`}><i className="icon angle down circle" style={{marginLeft: '10px'}}/></NavLink>
                    </div>
                </div>
                <MoreInfo movie={movie}/>
                <div className="overview">
                    {movie.overview}
                </div>
                <div className="genre">
                    {movie.genre.split(",").map(g=>(<li className='genre_item'>{g}</li>))}
                </div>
            </div>
        </>
    )
}

export default RowItem
