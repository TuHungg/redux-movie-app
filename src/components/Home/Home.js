import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../../common/api/movieApi";
import { APIKEY } from "../../common/api/MovieApiKey";
import { addMovies } from "../../features/movies/movieSlice";
import MovieListing from "../MovieListing/MovieListing";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKEY}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error: ", err);
        });
      // console.log(response.data);
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
