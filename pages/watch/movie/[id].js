import React from 'react';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import requests from 'utils/API';
import { getApi } from 'utils/fetchAPI';

const id = ({ movieDetails }) => {
  
  useEffect(() => {
    async function getApi() {
      const res = fetch(requests.requestTrending);
      const res2 = fetch(requests.requestTopRated);

      const urls = [res, res2];

      Promise.all(
        urls.map((item) => {
          return item.then((res) => res.json());
        })
      ).then((res) => {
        const listMovie = res.map((item) => item.results).flat();
        return listMovie;
      });
    }

    getApi();
  });

  return (
    <>
      <Head>
        <title>{movieDetails.title}</title>
      </Head>
      <div>
        <div>{movieDetails.title}</div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const popMovie = await fetch(requests.requestTrending)
    .then((r) => r.json())
    .then((r) => r.results);

  const topMovie = await fetch(requests.requestTopRated)
    .then((r) => r.json())
    .then((r) => r.results);

  const TVShows = await fetch(requests.requestPopularTVShow)
  .then((r) => r.json())
  .then((r) => r.results)

  const listMovie = [popMovie, topMovie, TVShows].flat();

  const movie = listMovie.map((item) => ({
    params: {
      id: item.id.toString(),
    },
  }));

  return {
    paths: [...movie],
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { id } = params;
  const key = '6a1487178aa02cdf9bae783ed33ac6b5';

  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
  const movieDetails = await res.json();

  return {
    props: { movieDetails },
  };
};

export default id;
