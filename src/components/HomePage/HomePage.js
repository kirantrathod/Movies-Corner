import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import "./HomePage.css";
import { getAllMovies, getGenerList } from "../../CRUD/Movies";
import Movie from "../Movie/Movie";
export default function HomePage() {
  const [genreList, setGenreList] = useState(null);
  const [moviesList, setMoviesList] = useState(null);
  useEffect(() => {
    async function getGenreList() {
      const genre = await getGenerList();
      setGenreList(genre.data.genres);
    }
    getGenreList();
  }, []);
  useEffect(() => {
    async function getDefaultData() {
      const res = await getAllMovies();
      setMoviesList(res.data.results);
    }
    getDefaultData();
  }, []);

  return (
    <div className="HomePage">
      <Navbar></Navbar>
      <section className="filter-section">
        <div className="genre-container"></div>
      </section>
      <section className="main-container-section">
        <div className="innner-main-container-section">
          {moviesList &&
            moviesList.map((item, index) => {
              return (
                <Movie
                  key={item.id}
                  title={item.title}
                  posterPath={item.poster_path}
                  releaseDate={item.release_date}
                ></Movie>
              );
            })}
        </div>
      </section>
    </div>
  );
}
