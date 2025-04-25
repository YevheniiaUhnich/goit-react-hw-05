import axios from "axios";

export const fetchWithMovies = async () => {
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
};

export default fetchWithMovies;
