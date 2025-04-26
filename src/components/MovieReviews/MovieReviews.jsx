import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api-movie";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const reviews = await fetchMovieReviews(movieId);
        setReviews(reviews);
      } catch (error) {
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length === 0 ? (
        <p>No reviews available.</p>
      ) : (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <strong>{review.author}</strong>: {review.content}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
