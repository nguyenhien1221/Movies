import React from 'react';

const UpComingItem = ({ movie }) => {
  return (
    <div className="comingitem_wrapper">
      <a href={`/watch/TVshow/${movie.id}`}>
        <div className="comingitem_inner">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />

          <div className="comingitem_inner_info">
            <div className="title">
              <p>{movie.name}</p>
            </div>
            <div className="description">
              <p>{movie.overview}</p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default UpComingItem;
