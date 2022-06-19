import React, {useState} from "react";
import MovieCard from "./components/MovieCard";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=API_KEY"

function App() {

  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    if(data.Response === 'True') {
      setMovies(data.Search)
    }else {
      setMovies([])
    }
    setIsComplete(true)
  }

  const empty = movies?.length === 0 && isComplete  ? (<div className="empty"><h2>Oops! Movie not found.</h2></div>) : null

  return (
    <div className="App">
      <header className="header">
        <h1>Movie House</h1>
        <div className="header__search">
          <input placeholder="Search movie..." name="search" value={search} onChange={(e) => setSearch(e.target.value)}/>
          <img src="./search.svg" alt="search" onClick={() => searchMovie(search)}/>
        </div>
      </header>
        {
          movies?.length > 0 ? (
            <div className="cards">
               {movies.map((movie) => (<MovieCard movie={movie}/>)) } 
            </div>
          ) : empty
        }
      </div>
  );
}

export default App;
