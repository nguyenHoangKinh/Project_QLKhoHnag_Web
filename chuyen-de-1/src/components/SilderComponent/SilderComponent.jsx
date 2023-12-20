import React from "react";
import Silder from "react-slick";
import {Image} from "antd";

const SilderComponent = ({arrImages}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000
  };
  return (
    <Silder {...settings}>
    {arrImages.map((image) =>{
        return (
            <Image src={image} alt="slider" width="400px" height="400px"/>
        )
    })}
    </Silder>
  );
};

export default SilderComponent;
