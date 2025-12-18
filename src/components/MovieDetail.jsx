import "../CSS/MovieDetail.css";

function MovieDetail({ movie, onClose }) {
  if (!movie) return null;
 console.log(movie);
 
  return (
    <div className="overlay" onClick={onClose}>
      <div className="movie-detail" onClick={(e) => e.stopPropagation()}>
        <div
          className="detail-header"
          style={{
            backgroundImage: `url(${movie.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <button className="close-btn" onClick={onClose}>
            X
          </button>
          <img src={movie.img} alt={movie.title} />
        </div>
        <div className="detail-body">
          <ul className="movie-tags">
          {
            movie.tags?.map((tags)=>(
                <li>{tags}</li>
            ))
          }
          </ul>
          <p>
            When a talented musician and a passionate writer fall for each
            other, burgeoning success and a devastating medical diagnosis
            threaten to pull them apart.
          </p>
          <button className="watch-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
