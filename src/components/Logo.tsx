import { Grid, styled } from "@mui/material";

const logo = 'Logos/Logo_Groß_Musikfest_Wannsee_2024_ohne_Hintergrund.png';

export const ResponsiveImg = styled('img')({
    maxWidth: '100%',
    height: 'auto',
  });

const Logo: React.FC = () => {
    return (
        <Grid
            container  
            justifyContent='center'
            alignItems="center" 
            sx={{
                maxWidth: '100%', 
                padding: '40px', 
                backgroundColor: 'secondary.light',
            }}
        >
          <ResponsiveImg src={logo} alt={'Logo Musikfest Wannsee mit drei Wellen'}/>
        </Grid>
    );
}

export default Logo;