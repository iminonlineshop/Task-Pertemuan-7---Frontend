import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";
// import data movies
import { nanoid } from "nanoid";

function Movies(props) {
   // Membuat state movies
  const {movies, setMovies}= props;

// Membuat fungsi untuk handle onClick
function handleClick() {
  const movie = {
    id: nanoid(),
    title: "Aquament",
    year: 2020,
    type: "Movie",
    poster : "https://picsum.photos/300/400",
  };
  
  // Menjalankan fungsi setMovie
  // Menambahkan movie ke dalam movies
  // Spread operator : copy data array
  setMovies([...movies, movie]);

}

  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movie__judul}>Latest Movies</h2>
        <div className={styles.movie__container}>
          {/* 
            *Looping : Map 
            *Merender component movie
            mengirim props ke movie
          */}
          {
            movies.map((movie) => (
              <Movie key={movie.id} movie={movie}/> 
            ))}
        </div>
        {/* Menambahkan Button Add Movie */}
        {/* Menambahkan icon onclick */}
        <button onClick={handleClick}>Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;