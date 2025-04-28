import { useEffect, useState } from "react";
import { fetchMovieCast } from "../../api-movie";
import { useParams } from "react-router-dom";
import { defaultPoster } from "../../api-movie";
// import { Link } from "react-router-dom";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      try {
        const cast = await fetchMovieCast(movieId);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            {/* <Link to={`/movies/${movieId}/cast`}></Link> */}
            <p>
              <strong>{actor.name}</strong> as {actor.character}
            </p>
            {actor.profile_path && (
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultPoster
                }
                alt={actor.name}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
