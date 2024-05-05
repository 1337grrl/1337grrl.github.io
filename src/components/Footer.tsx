import React from 'react';
import { Grid, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Grid 
        container 
        sx=
        {{ 
            backgroundColor: 'secondary.main', 
            marginTop: 'auto', 
            padding: '20px', 
            justifyContent: 'center',
        }}
    >
      <Grid item xs={6} sm={3}>
        <Typography variant="body1">Kontakt: musikfest.wannsee@gmail.com</Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
