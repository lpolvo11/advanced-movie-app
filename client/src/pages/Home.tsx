import { useState } from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";

interface Movie {
  Title: string;
  Year: number;
  Poster: string;
  imdbID: string;
  Type: string;
}

const Home = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const fetchMovies = async (query: string) => {
    if (!query) return;
    try {
      setIsLoading(true);
      const response = await fetch(`http://localhost:3001/api?title=${query}`);
      const data = await response.json();
      if (data.Error) {
        setMovies([]);
        throw new Error(`Error: ${data.Error}`);
      }
      setMovies(data.Search);
    } catch (error) {
      console.error(error);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div>
        <h1>Movie App</h1>
        <SearchBar fetchData={fetchMovies} />
        {isLoading && <p>Loading...</p>}
        {error && <p>There was an error!</p>}
        <div>
          {movies.map((movie) => {
            return (
              <MovieCard
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                type={movie.Type}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
