import { Box, Grid, Typography } from "@mui/material";

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
            <Grid>
                <Typography variant="h1" display='inline'>E</Typography>                        
                <Typography variant="h6" display='inline'>intritt, </Typography>
                <Typography variant="h1" display='inline'>F</Typography>                        
                <Typography variant="h6" display='inline'>örderer &</Typography>
                <Typography variant="h1" display='inline'>S</Typography>                        
                <Typography variant="h6" display='inline'>ponsoren</Typography>
            </Grid>
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
                        In diesem Jahr ist der <Typography variant="body2" display='inline'>Eintritt frei</Typography>. Um Anmeldung wird gebeten unter musikfest.wannsee@gmail.com. Wir freuen uns auf alle Zuhörer:innen!<br/><br/>
                        Um das Musikfest Wannsee auf musikalisch höchstem Niveau auch in Zukunft nachhaltig und verlässlich stattfinden lassen zu können, benötigen wir Ihre Unterstützung.<br/><br/> 
                        Jede/r Spender/in mit Anmeldung erhält eine "Arkadische Überraschung".
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