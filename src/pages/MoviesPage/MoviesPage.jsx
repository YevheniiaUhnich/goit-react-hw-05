import toast from "react-hot-toast";
import { fetchMovieSearch } from "../../api-movie";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import s from "./MoviesPage.module.css";
import { LiaSearchSolid } from "react-icons/lia";

// const initialValues = {
//   query: "",
// };
const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get("query") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      if (!query.trim()) return;
      try {
        const results = await fetchMovieSearch(query);

        if (results.length === 0) {
          toast.error("No movies found for your search.");
        }

        const filteredData = results.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        );

        setMovies(filteredData);
      } catch (error) {
        console.error("Error searching movies:", error);
        toast.error("Failed to search movies");
      }
    };

    fetchMovies();
  }, [query]);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    if (!query.trim()) {
      toast.error("Please enter a search query");
      return;
    }
  };

  const handleChange = (e) => {
    const newSearchValue = e.target.value;

    const newSearchParams = new URLSearchParams();
    if (newSearchValue.trim() !== "") {
      newSearchParams.set("query", newSearchValue);
    }
    setSearchParams(newSearchParams);
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
          onChange={handleChange}
        />

        <button className={s.btnSearchMovie}>Search</button>
      </form>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Link state={location} to={`/movies/${movie.id}`}>
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
