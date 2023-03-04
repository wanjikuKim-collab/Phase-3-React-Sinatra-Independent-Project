import React, { useEffect, useState } from "react";
import Review from './Review';
import './movieDetail.css'
import { useParams } from "react-router-dom"

function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const params = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:9294/movies/${params.id}`)
            .then(r => r.json())
            .then(movie => setMovie(movie))
    }, [params.id])
    console.log(movie)
    if (!movie) return <h2>Loading...</h2>
    
    const { image,overview,genre,reviews } = movie   
    
    return (
        <section className="movie_detail">
            <div className="banner" style={{backgroundImage: `url(${image})`}}>
                <div className= "billboard__fadeBottom"/>
            </div>
            <div className="mb-3 movie-content container">
                <div className="movie-content__poster">
                    <div className="movie-content__poster__img" style={{backgroundImage: `url(${image})`}}>
                </div>
                </div>
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
                        {overview}
                    </div>
                    <div className="genre">
                        {genre.split(",").map(g=>(<li className='genre_item'>{g}</li>))}
                    </div>
                    <div className="reviews">
                        <h1>REVIEWS</h1>
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
            </div>
        </section>
    );
}

export default MovieDetail;
