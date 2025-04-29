import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import Navigation from "./components/Navigation/Navigation";
// import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
// import HomePage from "./pages/HomePage/HomePage";
// import MoviesPage from "./pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./components/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));
const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);
const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
const Navigation = lazy(() => import("./components/Navigation/Navigation"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() =>
  import("./components/MovieDetailsPage/MovieDetailsPage")
);
function App() {
  return (
    <>
      <div>
        <Suspense fallback={<h2>Loading...</h2>}>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
