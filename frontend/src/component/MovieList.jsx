import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import Icons from './Row/Icons'
import { NavLink } from 'react-router-dom'
import './Row/Row.css'
import MoreInfo from './Row/MoreInfo'


const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

const bas_url = "https://image.tmdb.org/t/p/original"

function MovieList({title, fetchURL}) {
    const[movies, setMovies] = useState([])

    useEffect(()=>{
        const fetchMovies = async()=>{
          const request = await instance.get(fetchURL)
          setMovies(request.data.results)
          return request
        }
        fetchMovies()
      },[fetchURL])

    console.log(movies)
  return (
    <div style={{color: 'white', marginLeft: '40px'}}>
        <h2>{title}</h2>
        <div className="row_posters">
            {movies.map(movie=>(
                <div className="row_poster">
                    <img  key={movie.id} src={`${bas_url}${movie.backdrop_path}`} alt={movie.name} />
                    <div className="icons">
                        <Icons/>
                    </div>
                    <MoreInfo/>
                    <div style={{color: 'white'}} className="overview">
                        {movie.overview}
                    </div>
                </div>
                
            ))}
        </div>
    </div>
  )
}

export default MovieList