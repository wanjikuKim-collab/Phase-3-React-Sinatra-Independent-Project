import React, { useEffect,useState } from 'react'
import './Row.css'
import Review from './Review';

function Row(){
    const [movies, setMovies]=useState([]);
    // const [isHovered, setIsHovered] = useState(false)

    //fetch my list movies
    useEffect(() => {
        fetch("http://localhost:9294/movies")
          .then((r) => r.json())
          .then((movies) => setMovies(movies));
      }, []);
      console.log(movies)


  return (
    <div className='row'>
        <h2>TV Shows</h2>
     {/* SLIDER */}
      <div className='slider_items'>
         <div id="slider" className="row_posters">
            {movies.map(movie=>(
                <div className="row_poster"
                // style={{left: isHovered && movie * 325-50}} 
                // onMouseEnter={()=> setIsHovered(true)} 
                // onMouseLeave={()=> setIsHovered(false)}
                >
                    <img 
                    key={movie.id}
                    src={movie.image}
                    alt={movie.name} />
                    <div className="item_info">
                        <div className="icons">
                            <div className="play_like">
                                <i className="icon play circle"/>
                                <i className="icon minus circle"/>
                                <i className="icon thumbs down outline circle"/>
                                <i className="icon thumbs up"/>
                            </div>
                            <div className="dropdown">
                                <i className="icon angle down circle" style={{marginLeft: '10px'}}/>
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
                </div>
            ))}                
        </div> 
      </div>
    </div>
  )
}

export default Row
