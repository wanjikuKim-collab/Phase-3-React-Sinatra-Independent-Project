// function Row(){
//     const [movies, setMovies]=useState([]);


//     useEffect(() => {
//         fetch("http://localhost:9292/movies")
//           .then((r) => r.json())
//           .then((games) => setGames(games));
//       }, []);


//   return (
//     <div className='row'>
//         <h2>TV Shows</h2>
//      {/* SLIDER */}
//       <div className='slider_items'>
//         <div id="slider" className="row_posters">
//           <button onClick={scrollLeft} className='handlePrev'>
//             <i className="icon angle left"/>
//           </button>
//           {movies.map(
//             (movie)=>((isLargeRow && movie.poster_path)||(!isLargeRow && movie.backdrop_path))&&(
//                 <img 
//                 className={`row_poster ${isLargeRow && "row_posterLarge"}`}
//                 key={movie.id}
//                 src={`${bas_url}${
//                   isLargeRow? movie.poster_path : movie.backdrop_path
//                 }`} 
//                 alt={movie.name} />
//               )
//               )}                
//           <button onClick={scrollRight} className='handleNext'>
//             <i className="icon angle right"/>
//           </button>
//         </div> 
//       </div>
//     </div>
//   )
// }

// export default Row
