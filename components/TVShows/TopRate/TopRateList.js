import React from 'react'
import TopRateItem from './TopRateItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TopRateList = ({topMovies}) => {
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
    <div className="TVtoprate_wrapper">
      <p className='TVtoprate_wrapper_title'>Top Rate</p>
      <div className="TVtoprate_wrapper_movies">
        <Slider className='slider'{...settings} >
            {movies.map((item) => (
              <TopRateItem movie={item} key={item.id} />
            ))}
        </Slider>
      </div>
    </div>
  )
}

export default TopRateList