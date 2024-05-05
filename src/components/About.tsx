import { Grid, Typography, styled } from "@mui/material";

const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    padding: '50px',
    backgroundImage: 'url("/birds.png")',
    backgroundSize: '30%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  }));

const About: React.FC = () => {
    return (
        <StyledGrid 
        container 
        justifyContent="center" 
        alignItems="center" 
        >
            <Grid xs={10} md={9} lg={8} xl={7} sx={{ padding: '40px'}}>
                <Typography variant="body1">
                    Das Musikfest Wannsee ist ein neues Musikfestival für Lied, Kammer- und Vokalmusik und findet im malerischen Stadtteil Berlin-Wannsee vom 20. bis 22. September 2024 erstmals statt.<br/>
                    Zwischen Havel und den anliegenden Seen möchten wir mit der Konzertreihe einen Raum kreieren, der Grenzen zwischen Musik und Kunst, Natur und Gemeinschaft verschwimmen lässt. Die einzigartige Natur- und Kulturlandschaft zwischen Berlin und Potsdam lädt dazu ein.<br/>
                    Menschen können zusammenkommen, ihre Sinne erfreuen, sich inspirieren und berühren lassen und sich austauschen. Für Musikliebhaber jeden Alters bietet das Musikfest Wannsee eine ideale Umgebung, das Live-Erlebnis des lebendigen Musizierens mit uns zu feiern.<br/>
                    Auf dem Programm stehen sowohl Vokal- als auch Instrumentalmusik in verschiedenen Formaten von Alter Musik über Musik der Klassik und Romantik bis hin zur Moderne. In Verbindung damit sind auch Kunstformen wie Lesung, Tanz und Performance geplant.<br/>
                </Typography>
            </Grid>
        </StyledGrid>
    );
}

export default About;