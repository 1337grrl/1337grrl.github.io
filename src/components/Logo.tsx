import { Grid, styled } from "@mui/material";

const logo = 'Logos/Logo_mit_Platzreservierung.png';

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
                backgroundColor: 'secondary.light',
            }}
        >
          <ResponsiveImg src={logo} alt={'Logo Musikfest Wannsee mit drei Wellen'}/>
        </Grid>
    );
}

export default Logo;