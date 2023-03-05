import React from "react"
import NavBar from "../component/NavBar/NavBar";
import Footer from "../component/Footer/Footer"
import BillBoard from "../component/BillBoard/BillBoard";
import './Home.css'
import MovieList from "../component/MovieList";
import requests from "../Request";



function Home() { 
  return (
    <div>
      <BillBoard />
      <NavBar/>
      <MovieList title='Top Rated' fetchURL = {requests.fetchNowPlaying}/>
        <MovieList title='Netflix Originals' fetchURL = {requests.fetchNetflixOriginals}/>
        <MovieList title='Trending Now' fetchURL = {requests.fetchTrending}/>
        <MovieList title='Comedy ' fetchURL = {requests.fetchComedy}/>   
        <MovieList title='Action & Adventure' fetchURL = {requests.fetchAction}/>
        <MovieList title='Documentaries' fetchURL = {requests.fetchDocumentaries}/> 
        <MovieList title='Horror' fetchURL = {requests.fetchHorror}/>
        <MovieList title='Popular Movies' fetchURL = {requests.fetchPopularMovies}/>
        <MovieList title='Top Rated' fetchURL = {requests.fetchTopRated}/>
      <Footer />
    </div>
  )
}

export default Home