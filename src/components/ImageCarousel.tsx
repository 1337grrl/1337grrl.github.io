/* import React from 'react';
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export type ImageCarouselProps = {
  images: string[],
  imageHeight?: string,
}

const ImageCarousel: React.FC<ImageCarouselProps> = (props) => {
  const {images, imageHeight = '365px' } = props;
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((image, index) => (
        <div key={index}>
          <img src={image} alt={``} style={{height: imageHeight, padding: '20px'}}/>
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
 */

import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from '@mui/material';

export type ImageCarouselProps = {
  images: string[],
  imageHeight?: string,
}

const ImageSlide: React.FC<ImageCarouselProps> = (props) => {
  const {images, imageHeight = '365px' } = props;

  return (
    <Grid 
      container
      xs={12}
      alignContent={'space-evenly'}
      sx={{ backgroundColor: 'primary.main', height: imageHeight}}
    >
        {images.map((image, index) => (
            <img 
              src={image} 
              alt={`Image ${index + 1}`} 
              style={{ height: '100%', objectFit: 'cover', margin: 'auto' }} 
              />
        ))}
    </Grid>
  );
};

export default ImageSlide;
