import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';

const TopRateItem = ({ movie }) => {
  return (
    <div className="TVStoprate_wrapper">
      <div className="TVStoprate_inner">
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />

        <div className="TVStoprate_inner_info">
          <div className="title">
            <p>{movie.name}</p>
          </div>
          <div className="rate">
            <p>Rate: {movie.vote_average} </p>
          </div>
          <PlayCircleOutlined className="control" />
        </div>
      </div>
    </div>
  );
};

export default TopRateItem;
