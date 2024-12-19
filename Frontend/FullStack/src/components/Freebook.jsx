import React from "react";
import list from "../../public/list.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./Cards";

function Freebook() {
  // filtermethod
  const filterData = list.filter((data) => data.category === "NewRelease");
  // console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div>
          <h1 className="font-bold text-2xl md:text-6xl  pb-2 text-center ">New Release Books</h1><br></br> 
          <p className="text-1xl md:text-21xl text-center pb-10">Explore the new release books by famous authors. Connect<br></br> with the world in new, unexpected ways</p>
        </div>
        <div>
          <Slider {...settings}>
             {filterData.map((item)=>(
              <Cards item={item} key={item.id}/>
             ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
