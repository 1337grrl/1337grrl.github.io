import React from 'react';
import { Card, CardMedia, Grid } from '@mui/material';

export type ImageSlideProps = {
  images: string[],
  imageHeight?: string,
  bgColor?: string,
}

const ImageSlide: React.FC<ImageSlideProps> = (props) => {
  const {images, bgColor = 'secondary.light' } = props;
  return (
    <Grid sx={{
      display: 'flex', 
      justifyContent: 'space-evenly', 
      padding: '10px',
      bgcolor: bgColor,
      }}
    >
      {images.map((image, index) => (
        <Card key={index} 
          sx={{
            maxWidth: '30%',
            boxShadow: 15,
          }}>
          <CardMedia
            component="img"
            src={image}
            alt={'alt'}
            sx={{ height: '100%', maxWidth: 'auto' }}
          />
        </Card>
      ))}
    </Grid>
  );
};

export default ImageSlide;
