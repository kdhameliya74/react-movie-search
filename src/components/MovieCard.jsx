function MovieCard ({ movie: { Poster, Title, Year, Type, imdbID } }) {
    return (
        <>
        <div className="card" key={imdbID}>
            <div className="card__img">
              <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
            </div>
            <div className="card__info">
                <p className="card__type">{Type}</p>
                <p className="card__title">{Title}</p>
            </div>
        </div>
        </>
    )
}

export default MovieCard;
