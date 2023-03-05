import { Routes, Route } from 'react-router-dom';
import MovieDetail from './component/Row/MovieDetail';
import MyList from './pages/MyList';
import NewPopular from './pages/NewPopular';
import Home from './pages/Home';


function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Home/>}/> 
      <Route path="/mylist/:id" element={<MovieDetail/>}/> 
      <Route path="/mylist/new" element={<NewPopular/>}/>  
      <Route exact path="/mylist" element={<MyList/>}/>     
     </Routes>
    </div>
  );
}

export default App;