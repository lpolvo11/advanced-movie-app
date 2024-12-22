import React from "react";

interface MovieCardProps {
  title: string;
  year: number;
  poster: string;
  type: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ title, year, poster, type }) => {
  return (
    <div className="movie-card">
      <img
        style={{ cursor: "pointer" }}
        src={poster}
        alt={title}
        className="movie-poster"
      />
      <div className="movie-details">
        <h3>{title}</h3>
        <p>{year}</p>
        <p>{type}</p>
      </div>
    </div>
  );
};

export default MovieCard;
