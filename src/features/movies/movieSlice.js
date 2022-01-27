import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import { APIKey } from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&s=${term}`);
    return response.data;
  }
);

export const fetchAsyncMovieDetails = createAsyncThunk(
  "movies/fetchAsyncMovieDetails",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: {},
  movieDetails: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, action) => {
      state.movies = action.payload;
    },
    removeMovieDetails: (state) => {
      state.movieDetails = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.fulfilled]: (state, action) => {
      state.movies = action.payload;
    },
    [fetchAsyncMovieDetails.fulfilled]: (state, action) => {
      state.movieDetails = action.payload;
    },
  },
});

export const { addMovies, removeMovieDetails } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getMovieDetails = (state) => state.movies.movieDetails;
export default movieSlice.reducer;
