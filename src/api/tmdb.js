import axios from "axios";

const token = import.meta.env.VITE_TMDB_API_KEY;

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 5000,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default tmdb;
