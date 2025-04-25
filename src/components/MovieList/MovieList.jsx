import { Link } from "react-router-dom";

const MovieList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <Link to={item.id.toString()}>
            <li key={item.id}>{item.title}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
