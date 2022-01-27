import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchAsyncMovieDetails,
  getMovieDetails,
  removeMovieDetails,
} from "../../features/movies/movieSlice";
import "./MovieDetail.scss";

const MovieDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieDetails);

  console.log("data", data);

  useEffect(() => {
    dispatch(fetchAsyncMovieDetails(id));

    return () => {
      dispatch(removeMovieDetails());
    };
  }, [dispatch, id]);

  return (
    <div className="movie-section">
      {Object.keys(data).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <div className="section-left">
            <div className="movie-rating">{data.Title}</div>
            <div className="movie-rating">
              <span>
                IMDB Rating <i className="fa fa-star"> : {data.imdbRating}</i>
              </span>
              <span>
                IMDB Votes{" "}
                <i className="fa fa-thumbs-up"> : {data.imdbVotes}</i>
              </span>
              <span>
                Runtimes <i className="fa fa-film"> : {data.Runtime}</i>
              </span>
              <span>
                Year <i className="fa fa-calendar"> : {data.Year}</i>
              </span>
            </div>
            <div className="movie-plot">{data.Plot}</div>
            <div className="movie-info">
              <div>
                <span>Director</span>
                <span>{data.Diretor}</span>
              </div>
              <div>
                <span>Stars</span>
                <span>{data.Actors}</span>
              </div>
              <div>
                <span>Generes</span>
                <span>{data.Genere}</span>
              </div>
              <div>
                <span>Languages</span>
                <span>{data.Language}</span>
              </div>
              <div>
                <span>Awards</span>
                <span>{data.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img src={data.Poster} alt={data.Title} />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
