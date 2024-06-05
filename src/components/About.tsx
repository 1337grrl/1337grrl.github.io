import { Box, Grid, Typography } from "@mui/material";

const About: React.FC = () => {
    return (
        <Grid 
        container 
        sx={{ 
            backgroundColor: 'secondary.light',
            padding: '2%',
            display: 'flex', 
            flexDirection: {
                lg: 'row',
                xs: 'column',
            }
        }}
        >
            <Box
                sx={{
                    width: {
                        lg: '40%',
                        xs: '100%',
                    },
                    backgroundImage: 'url("/birds.png")',
                    backgroundSize: '50%',
                    backgroundPosition: 'bottom left',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <img 
                    src={'Untertitel_auf_Zettel.png'} 
                    style={{
                        width: '100%', 
                        height: 'auto',
                    }}
                />
            </Box>
            <Box 
                component='section'
                sx={{ 
                    width: {
                        lg: '55%',
                        xs: '100%',
                    },                  
                }}
            >
                <Typography>
                    Das <Typography variant="body2" display='inline'>Musikfest Wannsee</Typography> ist ein neues Musikfestival für Lied, Kammer- und Vokalmusik und findet im malerischen Stadtteil Berlin-Wannsee vom 20. bis 22. September 2024 erstmals statt.<br/><br/>
                    Zwischen Havel und den anliegenden Seen möchten wir mit der Konzertreihe einen Raum kreieren, der Grenzen zwischen Musik und Kunst, Natur und Gemeinschaft verschwimmen lässt. Die einzigartige Natur- und Kulturlandschaft zwischen Berlin und Potsdam lädt dazu ein.<br/><br/>
                    Menschen können zusammenkommen, ihre Sinne erfreuen, sich inspirieren und berühren lassen und sich austauschen. Für Musikliebhaber jeden Alters bietet das Musikfest Wannsee eine ideale Umgebung, das Live-Erlebnis des lebendigen Musizierens mit uns zu feiern.<br/><br/>
                    Auf dem Programm stehen sowohl Vokal- als auch Instrumentalmusik in verschiedenen Formaten von Alter Musik über Musik der Klassik und Romantik bis hin zur Moderne. In Verbindung damit sind auch Kunstformen wie Lesung, Tanz und Performance geplant.
                    Den roten Faden bildet jedes Jahr ein Motto, welches alle Formate miteinander verbindet und den Anhaltspunkt für inhaltliche Auseinandersetzung gibt. Ergänzende Vorträge, Diskussionen sowie Elemente der Musikvermittlung können wertvolle Anregungen geben.<br/><br/>
                    Das Festival stellt die Musik in den Kontext sozialer, politischer, philosophischer und theologischer Fragestellungen. Es bietet Raum für Reflexion, Austausch und Begegnungen.<br/><br/>
                    Für die kommenden Jahre sind Themen wie Umwelt, der Mensch in Beziehung zur Natur, soziale Themen wie Ausgrenzung, Beziehungen und Geschlechter, Wannsee im Kontext seiner Geschichte sowie theologische Themen wie der Mensch in seiner Auseinandersetzung mit Gott geplant.
                </Typography>
            </Box>
        </Grid>
    );
}

export default About;