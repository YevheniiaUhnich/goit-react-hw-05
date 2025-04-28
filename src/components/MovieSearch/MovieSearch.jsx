import s from "./MovieSearch.module.css";
import React from "react";
import { LiaSearchSolid } from "react-icons/lia";

const MovieSearch = ({ handleSubmitMovies }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = event.target;
    const query = form.elements.query.value.trim();
    handleSubmitMovies(query);
    form.reset();
  };
  return (
    <div className={s.inputSearch}>
      <form onSubmit={handleSubmit}>
        <LiaSearchSolid className={s.icon} />
        <input
          className={s.input}
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />

        <button className={s.btnSearchMovie} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default MovieSearch;
