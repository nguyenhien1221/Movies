import React from 'react';
import requests from 'utils/API';

const home = ({ popularMovies }) => {
  const movies = popularMovies.results;
  console.log(movies);
  return (
    <div>
      {movies.map((item) => {
        return (
          <>
            <h1>{item.title}</h1>
            <img 
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} 
            width="100"
            alt={item.title}></img>
            
          </>
        );
      })}
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
