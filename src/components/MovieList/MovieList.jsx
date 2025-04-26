import { Link } from "react-router-dom";

const MovieList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
