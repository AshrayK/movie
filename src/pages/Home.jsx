import '../css/Home.css'
import MovieCard from "../Components/MovieCard";
import { useState,useEffect } from "react";
import { getPopularMovies, searchMovies } from '../services/Api';
function Home(){
    const [searchQuery,setSearchQuery]  = useState("");
    const [movies,setMovies] = useState([]);
    const [error,setError] = useState(null);
    const [loading,setLoading] = useState(true);
        // const movies = [
    //     {id:1,title:"Hamburger",release_date:2021}]
    useEffect(()=>{
        const loadPopularMovies = async () =>{
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            }
            catch(err){
                console.error(err);
                setError('The movies could not be fetched.')
            }
            finally{
                console.log('Loaded Succesfully.')
                setLoading(false);
            }
        }
        loadPopularMovies();
    },[])
    async function handleSearch(e){
        e.preventDefault();
        if(!searchQuery.trim() ==="") return;
        if(loading) return;
        setLoading(true)
        try{
            const searchReasults = await searchMovies(searchQuery);
            setMovies(searchReasults);
            setError(null)
        }
        catch(error){
            console.error('Could not Search the movie.');
            console.error(error);
        }
        finally{
            setLoading(false)
        }
        setSearchQuery("");
    }
    return(<div className="home">
            <form onSubmit={handleSearch} className="search_form">
                <input
                 type="text" 
                 placeholder="Enter Movie Name..." 
                 className="search_input"
                 value={searchQuery}
                 onChange={(e)=>setSearchQuery(e.target.value)}/>
                <button type="submit" className="search_btn">Search</button>
            </form>
            {error && <div className="error_message">{error}</div>}
            {loading?(<div className="loading">Loading...</div>):(
                <div className="movies_grid">
                {movies.map((movie)=>(
                    // movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&(
                    <MovieCard movie={movie} key={movie.id}/>
                ))}
                </div>
            )}
    </div>);
}
export default Home