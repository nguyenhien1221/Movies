import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Header from 'components/Header';
import requests from 'utils/API';
import TopRateList from 'components/TVShows/TopRate/TopRateList';
import UpComingList from 'components/TVShows/UpComing/UpComingList';
import { CaretRightOutlined } from '@ant-design/icons';

const TVShows = ({ lateTV, topRateTV, popularTV }) => {
  const router = useRouter();
  const [movie, setMovie] = useState({});

  // get random movie
  useEffect(() => {
    const movies = lateTV.results;
    const singleMovie = movies[Math.floor(Math.random() * movies.length)];
    setMovie(singleMovie);
  }, []);

  const onPushRouter = (id) => {
    router.push(`watch/TVshow/${id}`);
  };

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
                <button onClick={() => onPushRouter(movie.id)}>
                  <CaretRightOutlined />
                  Play
                </button>
              </div>
            </div>
          </div>

          <div className="tvshow_inner_hero_toprate">
            <TopRateList topMovies={topRateTV} />
          </div>
          <div className="tvshow_inner_hero_upcoming">
            <UpComingList upComingTV={popularTV} />
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const lateResponse = await fetch(requests.requestLatestTVShow);
  const topRateResponse = await fetch(requests.requestTopRateTVShow);
  const popularRespone = await fetch(requests.requestPopularTVShow)

  const topRateTV = await topRateResponse.json();
  const lateTV = await lateResponse.json();
  const popularTV = await popularRespone.json();

  return {
    props: { lateTV, topRateTV, popularTV },
  };
};

export default TVShows;
