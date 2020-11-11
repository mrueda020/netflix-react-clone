import React from "react";
import { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./Banner.css";
const posterBaseUrl = "https://image.tmdb.org/t/p/original";

function Banner() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }

    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div>
      <div
        className="banner"
        style={{
          backgroundImage: `url("${posterBaseUrl}${movie?.backdrop_path}")`,
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.name || movie?.tittle || movie?.original_name}
          </h1>
          <div className="banner__buttons">
            <button className="banner__button">Play </button>
            <button className="banner__button">Add to my list</button>
          </div>
          <h1 className="banner__description">
            {truncate(movie.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadebottom"></div>
      </div>
    </div>
  );
}

export default Banner;
