import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api-movie";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import s from "./MovieDetailsPageList.module.css";

const MovieDetailsPageList = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const movieDetails = await fetchMovieDetails(movieId);
        setMovieDetails(movieDetails);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <h3 className={s.title}>Additional information</h3>
      <nav className={s.navLinkList}>
        <NavLink to="cast" className={s.navLinkOne}>
          Cast
        </NavLink>
        <NavLink to="reviews" className={s.navLinkTwo}>
          Review
        </NavLink>
      </nav>

      <Outlet />
    </div>
  );
};

export default MovieDetailsPageList;
