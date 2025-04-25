import { useState, useEffect } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchWithMovies } from "../../api-movie";

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const movies = await fetchWithMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <div>
      <h2>Trending Today</h2>
      <MovieList data={movies} />
    </div>
  );
};
export default HomePage;
