import React from 'react';
import ListMovieItem from './ListMovieItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopRate = ({ topMovies }) => {
  const movies = topMovies.results;

  //settign for slider
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    centerMode: true
  };

  return (
    <div className="toprate_wrapper">
      <p className='toprate_wrapper_title'>Top Rate</p>
      <div className="toprate_wrapper_movies">
        <Slider className='slider'{...settings} >
            {movies.map((item) => (
              <ListMovieItem movie={item} key={item.id} />
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRate;
