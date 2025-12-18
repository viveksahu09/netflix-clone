import React from "react";
import "../CSS/MoveSlider.css";

import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import movie4 from "../assets/movie4.jpg";
import movie5 from "../assets/movie5.jpg";
import movie6 from "../assets/movie6.jpg";
import movie7 from "../assets/movie7.jpg";
import movie8 from "../assets/movie8.jpg";
import movie9 from "../assets/movie9.jpg";
import movie10 from "../assets/movie10.jpg";
import MovieDetail from "./MovieDetail";

const movies = [
  {
    id: 1,
    img: movie1,
    title: "Movie 1",
    tags: [2025, "A", "Show", "Comedies", "Drames"],
  },
  {
    id: 2,
    img: movie2,
    title: "Movie 2",
    tags: [2025, "U/A 13+", "Movie", "Action", "Fantasy", "Drama"],
  },
  {
    id: 3,
    img: movie3,
    title: "Movie 3",
    tags: [2025, "U/A 16+", "Movie", "Romence", "Dramas"],
  },
  {
    id: 4,
    img: movie4,
    title: "Movie 4",
    tags: [2025, "U/A 13+", "Show", "Talk Shows", "Comedies", "Variety TV"],
  },
  {
    id: 5,
    img: movie5,
    title: "Movie 5",
    tags: [2025, "U/A 16+", "Movie", "Action", "Thrillers"],
  },
  {
    id: 6,
    img: movie6,
    title: "Movie 6",
    tags: [2025, "U/A 16+", "Show", "Comedies", "Fantasy", "Mystries"],
  },
  {
    id: 7,
    img: movie7,
    title: "Movie 7",
    tags: [2025, "U/A 16+", "Movie", "Action", "Thrillers"],
  },
  {
    id: 8,
    img: movie8,
    title: "Movie 8",
    tags: [2025, "A", "Show", "Action", "Thrillers", "Sci-Fi"],
  },
  {
    id: 9,
    img: movie9,
    title: "Movie 9",
    tags: [2023, "U/A 13+", "Movie", "Action", "Fantasy", "Drama"],
  },
  {
    id: 10,
    img: movie10,
    title: "Movie10",
    tags: [2017, "U/A 16+", "Series", "Action", "Crime", "Thriller"],
  },
];

export default function MovieSlider() {
  const sliderRef = React.useRef(null);
  const [selectMovie, setSelectMovie] = React.useState(null);

  const scroll = (direction) => {
    const { current } = sliderRef;

    if (direction === "left") {
      current.scrollLeft -= 400;
    } else {
      current.scrollLeft += 400;
    }
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      const current = sliderRef.current;

      // ✅ Check if we're at the end
      if (current.scrollLeft + current.clientWidth >= current.scrollWidth) {
        // 🔁 Go back to start
        current.scrollLeft = 0;
      } else {
        // ➡️ Otherwise, move right normally
        scroll("right");
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="swc">
      <h2>Trending Now</h2>
      <div className="slider-wrapper">
        <button className="nav-btn left" onClick={() => scroll("left")}>
          ❮
        </button>
        <ul className="movie-slider" ref={sliderRef}>
          {movies.map((movie) => (
            <li
              className="movie-card"
              key={movie.id}
              onClick={() =>
                setSelectMovie(selectMovie?.id === movie.id ? null : movie)
              } // store clicked movie
            >
              <img src={movie.img} alt={movie.title} />
              <span>{movie.title}</span>
            </li>
          ))}
        </ul>
        <button className="nav-btn right" onClick={() => scroll("right")}>
          ❯
        </button>
      </div>

      {/* Render MovieDetail as top-level overlay */}
      {selectMovie && (
        <MovieDetail movie={selectMovie} onClose={() => setSelectMovie(null)} />
      )}
    </div>
  );
}
