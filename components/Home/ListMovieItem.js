import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';

const ListMovieItem = ({ movie }) => {

  return (
    <div className="movieitem_wrapper">
      <div className="movieitem_inner">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} />

          <div className="movieitem_inner_info">
            <div className="title">
              <p>{movie.title}</p>
            </div>
            <div className="rate">
              <p>Rate: {movie.vote_average} </p>
            </div>
            <PlayCircleOutlined className="control"/>
           
          </div>
      </div>    
    </div>
  );
};

export default ListMovieItem;
