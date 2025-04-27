import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

const MovieList = ({ data }) => {
  return (
    <div>
      <ul>
        {data.map((item) => (
          <li key={item.id} className={s.itemList}>
            <Link to={`/movies/${item.id}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
