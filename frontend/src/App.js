import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieDetail from './component/Row/MovieDetail';
import NewMovie from './component/NewMovie/NewMovie';
import MyList from './pages/MyList';
import NewPopular from './pages/NewPopular';


function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/myList" element={<MyList/>}/> 
      <Route path="/myList/:id" element={<MovieDetail/>}/> 
      <Route path="/myList/new" element={<NewPopular/>}/>
     </Routes>
    </div>
  );
}

export default App;