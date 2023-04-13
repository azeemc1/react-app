import { useEffect } from 'react';
import './App.css';
import searchIcon from './search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=15ffa8d5';

const movie1 = {
    "Title": "John Wick: Chapter 4",
    "Year": "2023",
    "imdbID": "tt10366206",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMDExZGMyOTMtMDgyYi00NGIwLWJhMTEtOTdkZGFjNmZiMTEwXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_SX300.jpg"
}

const App = () => {

    const searchMovies = async (title) => {
        const response = await fetch (`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data.Search);
    }

    useEffect(() => {
        searchMovies('John Wick');
    }, []);
    return (
        <div className = 'App'>
            <h1>Movies in React</h1>

            <div className = 'search'>
                <input 
                    placeholder='Search for movies..'
                    value = ''
                    onChange={() => {}}
                />
                <img
                    src = {searchIcon}
                    alt = 'search'
                    onClick={() => {}}
                />
            </div>

            <div className = 'container'>
                <div className = 'movie'>
                    <div>
                        <p> {movie1.Year} </p>
                    </div>

                    <div>
                        <img src = {movie1.Poster !== 'N/A' ? movie1.Poster : 'https://via.placeholder.com/400'} alt = {movie1.title}/>
                    </div>

                    <div>
                        <span>{movie1.Type}</span>
                        <h3>{movie1.Title}</h3>
                    </div>
                </div>

            </div>
        </div>
        
    );
} 

export default App;
