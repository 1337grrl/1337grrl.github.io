import { Box, Grid, Typography } from "@mui/material";
import Title from "./Utils/Title";

const Spenden: React.FC = () => {
    return (
        <Grid 
        container 
        sx={{ 
            backgroundColor: 'secondary.light',
            display: 'flex', 
            flexDirection: {
                lg: 'row',
                xs: 'column',
            },
            justifyContent: 'space-evenly',
            padding: '40px',
            backgroundImage: 'url("/birds.png")',
            backgroundSize: '20%',
            backgroundPosition: 'bottom right',
            backgroundRepeat: 'no-repeat',
        }}
        >                
            <Title title={'Unterstützen Sie uns!'}/>
            <Grid
            sx={{ 
                display: 'flex', 
                flexDirection: {
                    lg: 'row',
                    xs: 'column',
                },
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Box 
                    component='section'
                    sx={{ 
                        width: {
                            lg: '50%',
                            xs: '100%',
                        },           

                    }}
                >
                    <Typography>
                        Helfen Sie uns, Arkadien und das Musikfest Wannsee zum Leben  zu erwecken - Wir freuen uns über Ihre Spende!<br/><br/> 
                        Mit Ihrer Hilfe finanzieren wir u.a. Werbung für das Musikfest Wannsee, Künstlerhonorare sowie Büro- und Reisekosten.<br/><br/>
                        Jede/r Spender/in, der/die mit Anmeldung über musikfest.wannsee@gmail.com zu einem oder mehreren Konzerten kommt, erhält eine Sitzplatzreservierung und eine arkadische Überraschung.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: {
                            lg: '40%',
                            xs: '100%',
                        },
                    }}
                >
                    <img 
                        src={'Spendenkonto.png'} 
                        style={{
                            alignItems: 'center',
                            width: '100%', 
                            height: 'auto',
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Spenden;