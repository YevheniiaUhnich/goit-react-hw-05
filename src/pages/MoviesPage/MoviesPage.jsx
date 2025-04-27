import toast from "react-hot-toast";
import { fetchMovieSearch } from "../../api-movie";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { LiaSearchSolid } from "react-icons/lia";

// const initialValues = {
//   query: "",
// };
const MoviesPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
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

    setQuery("");
  };

  return (
    <div className={s.inputSearch}>
      <form
        onSubmit={handleSubmit}
        // initialValues={initialValues}
      >
        <LiaSearchSolid className={s.icon} />
        <input
          className={s.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className={s.btnSearchMovie}>Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`} state={{ from: location }}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
