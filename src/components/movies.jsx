import MovieItem from './movieItem';
const Movies = (props)=>{
    return props.myMovies.map(
        (movie)=>{
            return <MovieItem   ={movie} key={movie.imdbID}></MovieItem>
        }
    );
}
export default Movies;