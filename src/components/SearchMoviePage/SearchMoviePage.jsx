import { useState } from "react";
import { fetchMovieSearch } from "../../api-movie";

const SearchMoviePage = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (query.trim() === "") return;
    try {
      const results = await fetchMovieSearch(query);
      setSearchResults(results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchMoviePage;
