import { useEffect, useState } from "react";  
import React from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = 'http://www.omdbapi.com?apikey=7517da7e';

// const movie1 = {
//     "Title": "Superman IV: The Quest for Peace",
//     "Year": "1987",
//     "imdbID": "tt0094074",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMmIwZWY1YTYtNDlhOS00NDRmLWI4MzItNjk2NDc1N2NhYzNlXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"
// }

const App = ()=>{

    const[movies,setMovies] = useState([]);
    const[searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title)=>{
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
    }

    useEffect(()=>{
     searchMovies('Superman')
    },[])

    return(
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e)=> setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt='search'
                    onClick={()=> searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 
             ? (
                <div className="container">
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ) )}
                </div>
             ) : (
             <div className="empty">
                <h2>No movies found</h2>
            </div>
            )}

            
        </div>
    );
}


export default App;