import React from 'react';
import { Box, Chip, Grid, Typography } from '@mui/material';
import Title from './Title';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import DownloadIcon from '@mui/icons-material/Download';

const Footer: React.FC = () => {
  return (
    <Grid 
        container 
        sx=
        {{ 
            backgroundColor: 'secondary.main', 
            marginTop: 'auto', 
            padding: '40px',
            paddingLeft: '80px', 
            justifyContent: 'center',
        }}
    >
      <Box 
          component='section'
          sx={{ 
              width: {
                  lg: '50%',
                  xs: '100%',
              },
              display: 'flex',
              flexDirection: 'column',                  
          }}
      >
        <Grid>            
          <Title title={'Kontakt'}/>
        </Grid>
        <Typography sx={{
            padding: '40px',
        }}>
          c/o Johanna Kaldewei<br/>
          E-Mail: musikfest.wannsee@gmail.com<br/>
          Social Media:
                <Box sx={{ padding: '30px'}}>
                    <Chip 
                      label={'musikfestwannsee'} 
                      sx={{margin: '10px'}} 
                      icon={<FacebookIcon color='primary'/>} 
                      clickable 
                      component="a" 
                      href={''} 
                      target="_blank"
                    />
                    <Chip 
                      label={'musikfestwannsee'} 
                      sx={{margin: '10px'}} 
                      icon={<InstagramIcon color='primary'/>} 
                      clickable 
                      component="a" 
                      href={''} 
                      target="_blank"
                    />
                </Box>
        </Typography>
      </Box>

      <Box 
          component='section'
          sx={{ 
              width: {
                  lg: '50%',
                  xs: '100%',
              },
              display: 'flex',
              flexDirection: 'column',                  
          }}
      >
        <Grid>            
          <Title title={'Downloads'}/>
        </Grid>
        <Box
          component="a"
          href="Flyer.png"
          download="Flyer_Musikfest_Wannsee_2024.png"
          sx={{ textDecoration: 'none' }}
        >
          <Chip
            label={'Flyer "Musikfest Wannsee 2024"'} 
            sx={{ margin: '10px' }}
            clickable
            variant='outlined'
            icon={<DownloadIcon color='primary'/>}
          />
        </Box>
      </Box>
    </Grid>
  );
}

export default Footer;
