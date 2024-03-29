import React, { useEffect, useState } from "react";
import ReviewForm from './ReviewForm';
import './movieDetail.css'
import { useParams } from "react-router-dom"
import NavBar from '../NavBar/NavBar'
import Footer from "../Footer/Footer";
import Review from "./Review";


// renders single movie with all the details, reviews and review form
function MovieDetail() {
    const [movie, setMovie] = useState(null);
    const params = useParams()
    
    useEffect(() => {
        fetch(`http://localhost:9292/mylist/${params.id}`)
            .then(r => r.json())
            .then(movie => {
               
                setMovie(movie)})
    }, [params.id])

    if (!movie) return <h2>Loading...</h2>
    
    const {image,overview,genre,reviews } = movie   
    return (        
        <section className="movie_detail">
            <NavBar/>
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
                            <Review review={review}/>
                        ))}
                    <div className='review_form'>
                        <ReviewForm id={movie.id}/>
                    </div>
                    </div>
                </div>        
            </div>
            <Footer />
        </section>
    );
}

export default MovieDetail;
