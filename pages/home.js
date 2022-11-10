import React from 'react';
import requests from 'utils/API';
import Header from 'components/Header';

const home = ({ popularMovies }) => {
  const movies = popularMovies.results;

  return (
    <div>
      <Header/>
      <button>
        <a href="/">home page</a>
      </button>
    </div>
  );
};

export const getStaticProps = async () => {
  const popularResponse = await fetch(requests.requestPopular);
  const popularMovies = await popularResponse.json();

  return {
    props: { popularMovies },
  };
};

export default home;
