import React from 'react';
import UpComingItem from './UpComingItem';
import Slider from 'react-slick';

const UpComingList = ({ upComingMovie }) => {

  const movies = upComingMovie.results;

  const settings = {
    infinite: true,
    slidesToShow: 1,
    centerPadding: '90px',
    slidesToScroll: 1,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="upcoming_wrapper">
      <p className="upcoming_wrapper_title">TV Shows</p>
      <div className="upcoming_wrapper_movies">
        <Slider {...settings}>
          {movies.map((item) => (
            <UpComingItem movie={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpComingList;
