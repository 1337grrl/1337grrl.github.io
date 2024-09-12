import { Box, Grid, Typography } from "@mui/material";

const Sponsoren: React.FC = () => {
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
            <Grid>
                <Typography variant="h1" display='inline'>F</Typography>                        
                <Typography variant="h6" display='inline'>örderer &</Typography>
                <Typography variant="h1" display='inline'>S</Typography>                        
                <Typography variant="h6" display='inline'>ponsoren</Typography>
            </Grid>
            <Grid
            sx={{ 
                display: 'flex',       
                justifyContent: 'space-evenly', 
                flexDirection: {
                    lg: 'row',
                    xs: 'column',
                },
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
                        Wir bedanken uns von Herzen für die Finanzierung des Gottesdienstes und des Konzertes "Wandel der Zeit" am 22. September 2024 bei <br/><br/>  
                        <br/><br/>                      
                    </Typography>
                    <a href="http://www.db-law.de/" target="_blank">
                        <img 
                            src={'Logos/D+B_Logo.png'} 
                            style={{
                                alignItems: 'center',
                                width: '70%', 
                                height: 'auto',
                            }}
                        />
                    </a>
                    <Typography>
                    <br/><br/>Mehr Informationen unter <a href="http://www.db-law.de/" target="_blank">www.db-law.de</a><br/><br/>
                    </Typography>
                </Box>
                <Box 
                    component='section'
                    sx={{ 
                        width: {
                            lg: '45%',
                            xs: '100%',
                        },     
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',     
                    }}
                >
                    <Typography sx={{ textAlign: 'left', width: '100%' }}>
                        Wir bedanken uns von Herzen beim Freundeskreis Nikolskoe für die Finanzierung des Konzerts "Der Arkadische Traum an den Ufern der Havel" am 21. September 2024 <br/><br/>
                    </Typography>
                    <a 
                        href="https://freundeskreis-nikolskoe.de/" 
                        target="_blank" 
                        style={{ 
                            display: 'flex', 
                            justifyContent: 'center', 
                            width: '100%' 
                        }}
                    >
                        <img 
                            src={'Logos/Freundeskreis_Nikolskoe.png'} 
                            style={
                                {
                                alignItems: 'center',
                                width: '30%', 
                                height: 'auto',
                            }
                        }
                        />
                    </a>
                    <Typography sx={{ textAlign: 'left', width: '100%' }}>
                    <br/><br/><br/>Mehr Informationen unter <a href="https://freundeskreis-nikolskoe.de/" target="_blank">freundeskreis-nikolskoe.de</a>
                    <br/><br/><br/>
                    </Typography>
                </Box>
            </Grid>
            <Grid
            sx={{ 
                display: 'flex',       
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: {
                    xs: 'column',
                },
            }}>
            <Typography>
            Wir bedanken uns außerdem von Herzen bei<br/><br/>  
            </Typography>
                <Box 
                    component='section'
                    sx={{ 
                        width: {
                            lg: '50%',
                            xs: '100%',
                        }, 
                        display: 'flex',       
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: {
                            lg: 'row',
                            xs: 'column',
                        },          

                    }}
                >
                    <Box style={
                                {
                                    display: 'flex', 
                                    justifyContent: 'center',
                                }
                            }
                        >
                        <img 
                            src={'Logos/Logo_Foerderverein_Ev_Kirchengemeinde_Wannsee.png'} 
                            style={
                                {
                                    display: 'flex', 
                                    alignItems: 'center',
                                    width: '50%', 
                                    height: 'auto',
                                }
                            }
                        />
                    </Box>
                    <Box style={
                                {
                                    display: 'flex',
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                }
                            }>
                        <img 
                            src={'Logos/Logo_Stiftung_Ev_Kirchengemeinde_Wannsee.png'} 
                            style={
                                {
                                    display: 'flex', 
                                    alignItems: 'center',
                                    width: '100%', 
                                    height: 'auto',
                                }
                            }
                        />
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default Sponsoren;