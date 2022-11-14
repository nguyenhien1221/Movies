import { useEffect, useState } from 'react';

import Header from 'components/Header';
import requests from 'utils/API';
import TopRateList from 'components/TVShows/TopRate/TopRateList';
import UpComingList from 'components/TVShows/UpComing/UpComingList';
import { CaretRightOutlined } from '@ant-design/icons';

const TVShows = ({ popularTV, topRateTV}) => {
  const [movie, setMovie] = useState({});
  
  // get random movie
  useEffect(() => {
    const movies = popularTV.results;
    const singleMovie = movies[Math.floor(Math.random() * movies.length)];
    setMovie(singleMovie);
  }, []);

  return (
    <div className="tvshow_wrapper">
      <Header />
      <div className="tvshow_inner">
        <div className="tvshow_inner_hero">
          <div className="tvshow_inner_hero_poster">
            <img
              className="tvshow_inner_hero_poster_img"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            />
            <div className="tvshow_inner_hero_poster_info">
              <p className="title">{movie.name}</p>
              <p className="description">{movie.overview}</p>

              <div className="control">
                <button>
                  <CaretRightOutlined />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="tvshow_inner_hero_toprate">
            <TopRateList topMovies={popularTV} />
          </div>
          <div className="tvshow_inner_hero_upcoming">
            <UpComingList upComingTV={topRateTV} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const popularResponse = await fetch(requests.requestPopularTVShow);
  const topRateResponse = await fetch(requests.requestTopRateTVShow);

  const topRateTV = await topRateResponse.json();
  const popularTV = await popularResponse.json();

  return {
    props: { popularTV, topRateTV },
  };
};

export default TVShows;
