import { useParams } from "react-router-dom";

const MovieDetailsPage = () => {
  const params = useParams();
  console.log(params);

  return <div>movieId</div>;
};

export default MovieDetailsPage;
