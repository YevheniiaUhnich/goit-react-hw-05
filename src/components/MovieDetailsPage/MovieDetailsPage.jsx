import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../../api-movie";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import s from "./MovieDetailsPage.module.css";
import { defaultPoster } from "../../api-movie";
import { ClipLoader } from "react-spinners";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState("");
  const location = useLocation();
  const goBackRef = useRef(location.state ?? "/movies");
  console.log(location);

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
      <Link className={s.linkGoBack} to={goBackRef.current}>
        Go back
      </Link>
      {movieDetails ? (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
          <img
            src={
              movieDetails.poster_path
                ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                : defaultPoster
            }
            width={250}
            alt={movieDetails.title}
          />
        </div>
      ) : (
        <div style={{ textAlign: "start", paddingTop: "100px" }}>
          <ClipLoader
            color="#36d7b7"
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}
      <h3 className={s.title}>Additional information</h3>
      <nav className={s.navLinkList}>
        <NavLink state={location} to="cast" className={s.navLinkOne}>
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

export default MovieDetailsPage;
