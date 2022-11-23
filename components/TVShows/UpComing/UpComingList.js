import React from 'react';
import UpComingItem from './UpComingItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const UpComingList = ({ upComingTV }) => {

  const movies = upComingTV.results;

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
      <p className="upcoming_wrapper_title">Popular TVShows</p>
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
