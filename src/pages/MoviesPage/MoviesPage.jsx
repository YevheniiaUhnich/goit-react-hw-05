import s from "./MoviesPage.module.css";
import { LiaSearchSolid } from "react-icons/lia";
import toast from "react-hot-toast";

// const initialValues = {
//   query: "",
// };
const MoviesPage = ({ onSubmit }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const query = form.elements.query.value.trim();

    if (query) {
      toast.error("This is an error!");
      return;
    }
    onSubmit(query);
    form.reset();
  };

  return (
    <form
      onSubmit={handleSubmit}
      // initialValues={initialValues}
      className={s.formSearch}>
      <div>
        <LiaSearchSolid />
        <input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
      </div>
      <button className={s.btnSearchMovie}>Search</button>
    </form>
  );
};

export default MoviesPage;
