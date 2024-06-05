import { Box, Grid, Typography } from "@mui/material";
import Title from "./Utils/Title";

const Motto: React.FC = () => {
    return (
        <Grid 
        container 
        sx={{ 
            backgroundColor: 'secondary.light',
            padding: '40px',
            display: 'flex', 
            flexDirection: {
                lg: 'row',
                xs: 'column',
            },
            justifyContent: 'space-around'
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
                    justifyContent: 'center',           
                }}
            >
                <Title title={'Apropos Arkadien'}/>
                <Typography>
                    2024 wird das Festival unter dem Motto <Typography variant="body2" display='inline'>Apropos Arkadien...</Typography> stattfinden.<br/><br/>
                    Arkadien, als mythologische Idylle, als das Land unserer Sehnsucht, in dem Menschen und Tiere im Einklang mit der Natur leben, hat Künstler seit jeher fasziniert. Zu Beginn des 19. Jahrhunderts ließen die Preußischen Könige Friedrich Wilhelm III. und Friedrich Wilhelm IV. die Landschaft zwischen Potsdam und Berlin, die von der Havel, den anliegenden Seen und Wäldern geprägt ist, in eine weitläufige Park- und Kulturlandschaft umgestalten, die bis heute als "Preußisches Arkadien" bekannt <br/><br/>
                    Arkadien als persönlicher Sehnsuchtsort hat auch für uns heutzutage nicht an Aktualität verloren. Wo könnten wir dem besser nachspüren als in Wannsee, mitten im Herzen des preußischen Arkadiens?
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
                    src={'Theodor_Fontane.png'} 
                    style={{
                        width: '90%', 
                        height: 'auto',
                    }}
                />
            </Box>
        </Grid>
    );
}

export default Motto;