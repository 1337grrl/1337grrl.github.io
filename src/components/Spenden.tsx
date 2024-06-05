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
            <Title title={'Förderer & Sponsoren'}/>
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
                        Um das Musikfest Wannsee auf musikalisch höchstem Niveau auch in Zukunft nachhaltig und verlässlich stattfinden lassen können, benötigen wir Ihre Unterstützung.<br/><br/> 
                    </Typography>
                    <Typography variant='body2'>
                        Evangelische Kirchengemeinde Wannsee <br/>
                        IBAN: DE85 5206 0410 3903 9663 99<br/>
                        BIC: GENODEF1EK1<br/>
                        Zweck: Musikfest<br/><br/>
                    </Typography>
                    <Typography>
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