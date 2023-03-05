import React, { useEffect,useState } from 'react'
import './Row.css'
import RowItem from './RowItem';



function Row(){
    const [movies, setMovies]=useState([]);
    // const [isHovered, setIsHovered] = useState(false)

    //fetch my list movies
    //side-effect of movies being rendered
    useEffect(() => {
        fetch("http://localhost:9292/mylist")
          .then((r) => r.json())
          //Update state by passing the array of movies to setMovies  
          .then((movies) => setMovies(movies));
      }, []);
      console.log(movies)

      function handleDeleteItem(deletedItem) {
        const updatedItems = movies.filter((movie) => movie.id !== deletedItem.id);
        setMovies(updatedItems);
      }

      
  return (
    <div className='row'>
        <h2>TV Shows</h2>
     {/* SLIDER */}
      <div className='slider_items'>
         <div id="slider" className="row_posters">
            {movies.map(movie=>(
                <div className="row_poster">
                    <RowItem
                        key={movie.id}
                        movie={movie}
                        onDeleteItem={handleDeleteItem}
                    />
                </div>
            ))}                
        </div> 
      </div>
    </div>
  )
}

export default Row
