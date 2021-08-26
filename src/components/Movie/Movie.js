import "./Movie.css";
export default function Movie(props) {
  const imageInitURL = "https://image.tmdb.org/t/p/w500";
  return (
    <div className="Movie">
      <div className="movie-card">
        <img
          className="poster-image"
          src={`${imageInitURL}/${props.posterPath}`}
          alt="Poster"
        />
        <div className="movie-desc-container">
          <h4 className="movie-title">{props.title}</h4>
          <p className="movie-desc">{props.releaseDate}</p>
        </div>
      </div>
    </div>
  );
}
