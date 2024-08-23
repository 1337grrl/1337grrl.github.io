import { Box, Grid, Typography } from "@mui/material";

const Eintritt: React.FC = () => {
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
            <Grid
            sx={{ 
                display: 'flex', 
                flexDirection: {
                    lg: 'row',
                    xs: 'column',
                },
                justifyContent: 'center',
                alignItems: 'start',
            }}>
                <Box 
                    component='section'
                    sx={{ 
                        width: {
                            lg: '50%',
                            xs: '95%',
                        },           

                    }}
                >
                <Grid>
                    <Typography variant="h1" display='inline'>E</Typography>                        
                    <Typography variant="h6" display='inline'>intritt</Typography>
                </Grid>
                    <Typography>
                        In diesem Jahr ist der <Typography variant="body2" display='inline'>Eintritt frei</Typography>.<br/><br/> 
                        Um Anmeldung wird gebeten unter <br/><br/>
                        <Typography variant="body2" display='inline'sx={{ textAlign: 'center'}}>musikfest.wannsee@gmail.com</Typography><br/><br/> 
                        Wir freuen uns auf alle Zuhörer:innen!<br/><br/>
                    </Typography>
                </Box>
                <Box
                    sx={{
                        width: {
                            lg: '45%',
                            xs: '95%',
                        },
                    }}
                >
                <Grid>
                    <Typography variant="h1" display='inline'>S</Typography>                        
                    <Typography variant="h6" display='inline'>penden</Typography>
                </Grid>
                    <Typography>
                        Um das Musikfest Wannsee auf musikalisch höchstem Niveau auch in Zukunft nachhaltig und verlässlich stattfinden lassen zu können, benötigen wir Ihre Unterstützung.<br/><br/> 
                        Jede/r Spender/in mit Anmeldung erhält eine "Arkadische Überraschung".<br/><br/>
                    </Typography>
                    <img 
                        src={'Spendenkonto.png'} 
                        style={{
                            alignItems: 'center',
                            width: '60%', 
                            height: 'auto',
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Eintritt;