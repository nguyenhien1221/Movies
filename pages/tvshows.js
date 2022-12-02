import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

import requests from 'utils/API';
import TopRateList from 'components/TVShows/TopRate/TopRateList';
import UpComingList from 'components/TVShows/UpComing/UpComingList';
import { getApi } from 'utils/fetchAPI';

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
    <>
      <Head>
        <title>TV Shows</title>
      </Head>
      <div className="tvshow_wrapper">
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
                    Watch
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
    </>
  );
};

export const getServerSideProps = async () => {

  const topRateTV = await getApi(requests.requestTopRateTVShow);
  const lateTV = await getApi(requests.requestLatestTVShow);
  const popularTV = await getApi(requests.requestPopularTVShow);

  return {
    props: { lateTV, topRateTV, popularTV },
  };
};

export default TVShows;
