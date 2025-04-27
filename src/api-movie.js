import axios from "axios";
import toast from "react-hot-toast";

export const fetchWithMovies = async () => {
  try {
    const response = await axios.get(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE3OTMwNmNlNWQzMTk3NjEwMzk4YjdlYWUwNzc5MyIsIm5iZiI6MTc0NTQ3OTA2MS45NDU5OTk5LCJzdWIiOiI2ODA5ZTU5NThiY2VhNjZhODZhYThiMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pwg2049AaBiC90_k1fOaGzGb0MLCmIg74Bt2qtugYqs",
        },
      }
    );

    return response.data.results;
  } catch (error) {
    toast.error("Failed to fetch trending movies");
    console.log("Error fetching trending movies:", error);
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=3aa79306ce5d3197610398b7eae07793`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE3OTMwNmNlNWQzMTk3NjEwMzk4YjdlYWUwNzc5MyIsIm5iZiI6MTc0NTQ3OTA2MS45NDU5OTk5LCJzdWIiOiI2ODA5ZTU5NThiY2VhNjZhODZhYThiMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pwg2049AaBiC90_k1fOaGzGb0MLCmIg74Bt2qtugYqs",
        },
      }
    );
    return response.data;
  } catch (error) {
    toast.error("Failed to fetch movie details...");
    console.log("Error fetching movie details...", error);
  }
};

export const fetchMovieCast = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE3OTMwNmNlNWQzMTk3NjEwMzk4YjdlYWUwNzc5MyIsIm5iZiI6MTc0NTQ3OTA2MS45NDU5OTk5LCJzdWIiOiI2ODA5ZTU5NThiY2VhNjZhODZhYThiMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pwg2049AaBiC90_k1fOaGzGb0MLCmIg74Bt2qtugYqs",
        },
      }
    );
    return response.data.cast;
  } catch (error) {
    toast.error("Failed to fetch movie details...");
    console.log("Error fetching movie details...", error);
  }
};

export const fetchMovieReviews = async (movieId) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE3OTMwNmNlNWQzMTk3NjEwMzk4YjdlYWUwNzc5MyIsIm5iZiI6MTc0NTQ3OTA2MS45NDU5OTk5LCJzdWIiOiI2ODA5ZTU5NThiY2VhNjZhODZhYThiMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pwg2049AaBiC90_k1fOaGzGb0MLCmIg74Bt2qtugYqs",
        },
      }
    );
    return response.data.results;
  } catch (error) {
    toast.error("Failed to fetch movie details...");
    console.log("Error fetching movie details...", error);
  }
};

export const fetchMovieSearch = async (query) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYWE3OTMwNmNlNWQzMTk3NjEwMzk4YjdlYWUwNzc5MyIsIm5iZiI6MTc0NTQ3OTA2MS45NDU5OTk5LCJzdWIiOiI2ODA5ZTU5NThiY2VhNjZhODZhYThiMDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.pwg2049AaBiC90_k1fOaGzGb0MLCmIg74Bt2qtugYqs",
        },
      }
    );
    return response.data.results;
  } catch (error) {
    toast.error("Failed to fetch movies search results...");
    console.log("Error fetching movie details...", error);
  }
};

export default fetchWithMovies;
