import React from 'react';
import Link from 'next/link';
import { PlayCircleOutlined } from '@ant-design/icons';

const TopRateItem = ({ movie }) => {
  return (
    <div className="TVStoprate_wrapper">
      <Link href={`watch/TVshow/${movie.id}`}>
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
      </Link>
    </div>
  );
};

export default TopRateItem;
