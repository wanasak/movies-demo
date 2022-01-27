import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const dispatch = useDispatch();
  const term = "Harry";

  useEffect(() => {
    dispatch(fetchAsyncMovies(term));
  }, [dispatch]);
  return (
    <div>
      <h4>Home</h4>
      <MovieListing />
    </div>
  );
};

export default Home;
