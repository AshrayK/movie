import { createContext, useState, useEffect, useContext } from "react";
const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);
export const MovieProvider = ({children}) =>{
    const [favourites,setFavorites] = useState([]);
    useEffect(()=>{
        const storedFavourites = localStorage.getItem('favourites');
        if (storedFavourites) setFavorites(JSON.parse(storedFavourites))
    },[])
    useEffect(()=>{
        localStorage.setItem('favourites',JSON.stringify(favourites));
    },[favourites])
    const addToMovies = (movie) =>{
        setFavorites(m=>[...m,movie])
    }
    const removeFromFavorites = (movieId) =>{
        setFavorites(m => m.filter(movie => movie.id !== movieId));
    }
    const isFavorite = (movieId) =>{
        return (favourites.some(m =>m.id === movieId))
    }
    const value = {
        favourites,
        addToMovies,
        removeFromFavorites,
        isFavorite
    }
    return<MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}