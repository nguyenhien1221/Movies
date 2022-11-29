import React from 'react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import requests from 'utils/API';
import TopRate from 'components/Home/TopRate';
import UpComingList from 'components/Home/UpComing/UpComingList';

import { CaretRightOutlined } from '@ant-design/icons';

const home = ({ popularMovies, topMovies, TVShows }) => {
  const router = useRouter();
  const [movie, setMovie] = useState({});

  // get random movie
  useEffect(() => {
    const movies = popularMovies.results;
    const listMovie = [...movies]
    
    const singleMovie = listMovie[Math.floor(Math.random() * movies.length)];
    setMovie(singleMovie);
  }, []);

  const onPushRouter = (id) => {
    router.push(`watch/movie/${id}`);
  };

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div className="home_wrapper">
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
                  <button onClick={() => onPushRouter(movie.id)}>
                    <CaretRightOutlined />
                    Watch
                  </button>
                </div>
              </div>
            </div>

            <div className="home_inner_hero_toprate">
              <TopRate topMovies={topMovies} />
            </div>
            <div className="home_inner_hero_upcoming">
              <UpComingList upComingMovie={TVShows} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const popularResponse = await fetch(requests.requestTrending);
  const topRes = await fetch(requests.requestPopular);
  const TVShowsRes = await fetch(requests.requestPopularTVShow);

  const TVShows = await TVShowsRes.json();
  const topMovies = await topRes.json();
  const popularMovies = await popularResponse.json();

  return {
    props: { popularMovies, topMovies, TVShows },
  };
};

export default home;
