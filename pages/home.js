import React from 'react';
import { useEffect, useState } from 'react';

import Header from 'components/Header';
import requests from 'utils/API';
import TopRate from 'components/Home/TopRate';

import { CaretRightOutlined } from '@ant-design/icons';

const home = ({ popularMovies, topMovies }) => {
  const [movie, setMovie] = useState({});
  
  // get random movie
  useEffect(() => {
    const movies = popularMovies.results;
    const singleMovie = movies[Math.floor(Math.random() * movies.length)];
    setMovie(singleMovie);
  },[]);


  return (
    <div className="home_wrapper">
      <Header />
      <div className="home_inner">
        <div className="home_inner_hero">
          <div className="home_inner_hero_poster">
            <img
              className="home_inner_hero_poster_img"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <div className="home_inner_hero_poster_info">
              <p className="title">{movie.title}</p>
              <p className="description">{movie.overview}</p>

              <div className="control">
                <button>
                  <CaretRightOutlined />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className='home_inner_hero_toprate'>
            <TopRate topMovies= {topMovies}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const popularResponse = await fetch(requests.requestTrending);
  const topRes = await fetch(requests.requestPopular);
  
  const topMovies = await topRes.json();
  const popularMovies = await popularResponse.json();

  return {
    props: { popularMovies, topMovies },
  };
};

export default home;
