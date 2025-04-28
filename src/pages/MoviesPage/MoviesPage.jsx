import toast from "react-hot-toast";
import { fetchMovieSearch } from "../../api-movie";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import MovieSearch from "../../components/MovieSearch/MovieSearch";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get("query") ?? "";

  const handleSubmitMovies = (newValue) => {
    const nextParams = newValue.trim() ? { query: newValue } : {};
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!query.trim()) {
      setMovies([]);
      return;
    }

    const getData = async () => {
      try {
        const results = await fetchMovieSearch(query);
        if (results.length === 0) {
          toast.error("No movies found for your search.");
        }
        setMovies(results);
      } catch (error) {
        console.error("Error searching movies:", error);
        toast.error("Failed to search movies");
      }
    };
    getData();
  }, [query]);

  return (
    <div className={s.inputSearch}>
      <MovieSearch handleSubmitMovies={handleSubmitMovies} />
      <MovieList data={movies} />
    </div>
  );
};

export default MoviesPage;
