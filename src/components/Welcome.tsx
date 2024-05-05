import { Grid, styled } from "@mui/material";

const logo = '../../public/Logo_Groß_Musikfest_Wannsee_2024.png';

export const ResponsiveImg = styled('img')({
    maxWidth: '100%',
    height: 'auto',
  });

const Welcome: React.FC = () => {
    return (
        <Grid 
            container 
            justifyContent="center" 
            alignItems="center" 
            sx={{
                width: '100%', 
                padding: '100px', 
                backgroundColor: 'primary.main'
            }}
        >
            <Grid>
                <ResponsiveImg src={logo} alt={'Logo Musikfest Wannsee mit drei Wellen'}/>
            </Grid>
        </Grid>
    );
}

export default Welcome;