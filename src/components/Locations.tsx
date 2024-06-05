import { Box, Card, CardContent, CardMedia, Chip, Grid, Typography } from "@mui/material";
import Title from "./Utils/Title";


type LocationType= {
    name: string,
    image: string,
    description: string,
    address: string,
    url?: string,
}

const locations: LocationType[] = [
    {
        name: 'Kirche am Stölpchensee',
        image: 'Locations/Stölpchenseekirche.png',
        description: 'Die Kirche befindet sich im alten Dorfkern des Dorfes Stolpe. Sie wurde 1859 geweiht. Der Architekt der Kirche war F. A. Stüler. In ihrem Turm befindet sich ein mechanisches Glockenspiel, das zu jeder vollen Stunde einen von drei Chorälen passend zum Kichenjahr spielt.',
        address: 'Wilhelmplatz 1, 14109 Berlin',
        url: 'https://www.google.com/maps/place/Wilhelmpl.+1,+14109+Berlin/@52.4119456,13.1388765,17z/data=!3m1!4b1!4m6!3m5!1s0x47a858c7b4b03d3f:0xbd39994147b2b66d!8m2!3d52.4119456!4d13.1414514!16s%2Fg%2F11bw43blsn?entry=ttu',
    },
    {
        name: 'St. Peter und Paul auf Nikolskoe',
        image: 'Locations/St._Peter_und_Paul.png',
        description: 'Die Evangelische Kirche St. Peter und Paul auf Nikolskoe wurde zwischen 1834 und 1837 für die Bewohner der Pfaueninsel und von Kleinglienicke auf Erlass des Königs Friedrich Wilhelm III. erbaut. Die schlichte beschauliche Kirche mit ihrem romantischen Ambiente zieht heute nicht nur Wanderer in ihren Bann, sondern immer mehr junge Leute, die in dieser ruhigen, von aller Hektik der Stadt abgewandten Kirche, den Bund der Ehe schließen und ihre Kinder taufen lassen wollen.',
        address: 'Nikolskoer Weg 17, 14109 Berlin',
        url: 'https://www.google.com/maps/place/Hundeauslaufgebiet+Wannsee-D%C3%BCppel,+Nikolskoer+Weg+17,+14109+Berlin/@52.4247097,13.1151359,17z/data=!3m1!4b1!4m6!3m5!1s0x47a8589f71076ec3:0x9cdfd66eaeee2dd4!8m2!3d52.4247097!4d13.1177108!16s%2Fg%2F11b8vddzk4?entry=ttu',
    },
    {
        name: 'Andreaskirche',
        image: 'Locations/Andreas_Kirche.png',
        description: 'Lassen Sie sich begeistern durch dieses Kleinod in neugotischem Stil. Diese, 1896, ohne auffälligen Prunk gebaute Kirche bildet zusammen mit der zuvor begonnenen Anlage des Friedhofs und der ursprünglich als Aussegnungshalle geschaffenen Vorhalle ein in Berlin einzigartiges Ensemble.',
        address: 'Lindenstraße 1, 14109 Berlin',
        url: 'https://www.google.com/maps/place/Lindenstra%C3%9Fe+1,+14109+Berlin/@52.4247729,13.154347,17z/data=!4m6!3m5!1s0x47a858eeccbab2db:0x107a68b11e611c0b!8m2!3d52.4251623!4d13.1541646!16s%2Fg%2F11c4kfrxmr?entry=ttu',
    },
]

const Locations: React.FC = () => {
    return (
        <Grid
        sx={{
            display: 'flex',
            flexDirection: 'column',
            bgcolor: 'secondary.main',
            alignItems: 'center',
        }}
        >                         
            <Title title={'Die Konzertorte'} color='primary.dark'/>
            <Grid 
                sx={{
                    display: 'flex', 
                    flexDirection: {
                        lg: 'row',
                        xs: 'column',
                    },
                    justifyContent: {
                        lg: 'space-evenly',
                        xs: 'center',
                    }, 
                    width: '90%'
                }}
            >
                {locations.map((location, index) => (
                    <Card key={index} 
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            maxWidth: {
                            lg: '30%',
                            xs: '90%',
                                },
                            marginBottom: {
                                xs: '2%',
                            },
                            boxShadow: 15,
                            bgcolor: 'primary.main'
                        }}
                    >
                        <CardMedia
                            component="img"
                            src={location.image}
                            alt={location.name}
                            sx={{ height: '50%', maxWidth: '100%' }}
                        />
                        <CardContent>
                            <Typography variant='body2'>{location.name}</Typography>
                            <Typography>{location.description}</Typography>
                        </CardContent>
                        <Box sx={{ padding: '30px', display: 'flex', justifyContent: 'center'}}>
                            <Chip 
                                label={location.address} 
                                sx={{margin: '10px'}} 
                                component="a" 
                                href={location.url} 
                                clickable 
                                target="_blank"
                            />
                        </Box>
                    </Card>
                    ))
                }
            </Grid>
            <Grid 
                sx={{
                    display: 'flex', 
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    alignItems: 'center',
                    width: '90%'
                }}
            >
                <Box
                    sx={{
                        maxWidth: '90%',
                        width: {
                            lg: '70%',
                            xs: '90%',
                                },
                        height: 'auto',
                        margin: '2.5%',
                        display: 'flex',
                        justifyContent: 'center',     
                    }}
                >
                    <iframe
                        src={'https://www.google.com/maps/embed?pb=!1m40!1m12!1m3!1d11263.185444849798!2d13.127066847415565!3d52.42058421961294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m25!3e2!4m5!1s0x47a8589f70e949a1%3A0xf470b8b3e9c07fcb!2sEv.%20Kirche%20St.%20Peter%20und%20Paul%20auf%20Nikolskoe%2C%20Nikolskoer%20Weg%2C%20Berlin!3m2!1d52.4247097!2d13.1177108!4m5!1s0x47a859df624f8189%3A0x3d2bfd380a19a06f!2sAndreaskirche%20-%20Ev.%20Kirchengemeinde%20Berlin-Wannsee%2C%20Lindenstra%C3%9Fe%203%2C%2014109%20Berlin!3m2!1d52.4252432!2d13.1559449!4m5!1s0x47a858c7b4c80d89%3A0xf69cf2746c37a06a!2sKirche%20am%20St%C3%B6lpchensee%20-%20Ev.%20Kirchengemeinde%20Berlin-Wannsee%2C%20Wilhelmplatz%2C%20Berlin!3m2!1d52.411975!2d13.141425!4m5!1s0x47a8589f70e949a1%3A0xf470b8b3e9c07fcb!2sSs.%20Peter%20and%20Paul%2C%20Wannsee%2C%20Westlicher%20D%C3%BCppeler%20Forst%2C%20Hundeauslaufgebiet%20Wannsee-D%C3%BCppel%2C%20Nikolskoer%20Weg%2C%20Berlin!3m2!1d52.4247097!2d13.1177108!5e0!3m2!1sen!2sde!4v1716990871644!5m2!1sen!2sde'}
                        width='100%'
                        height='450'
                        style={{ 
                            border: 0,
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Locations;