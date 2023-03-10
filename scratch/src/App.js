import React, { useEffect, useState } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";


const API_URL = 'http://www.omdbapi.com?apikey=7517da7e';
const movie = {
    "Title": "John Wick",
    "Year": "2014",
    "imdbID": "tt2911666",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg"
}

const App = ()=>{

    const[ movies,setMovies] = useState([]);
    const[searchTerm,setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json()

        setMovies(data.Search)
    }


    useEffect(()=>{
        searchMovies('John Wick')
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
                    onClick={()=>searchMovies(searchTerm)}
                />
            </div>

            {movies?.length > 0 
            ?(
                <div className="container">   
                    {movies.map((movie)=>(
                        <MovieCard movie={movie}/>
                    ))}
                </div>
            ):(
                <div className="empty">
                    <h2>No movies found</h2>
                </div>
            )
            }
            

           
                   
                 

            
        </div>
    )
}


export default App;