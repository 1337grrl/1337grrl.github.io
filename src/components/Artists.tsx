import { Grid } from "@mui/material";
import ArtistCard from "./Cards/ArtistCard";
import Title from "./Utils/Title";

export type ArtistType = {
    name: string,
    image: string,
    description: string,
    orientation?: string,
}

export type ArtistProps = {
    artists: ArtistType[],
}


const Artists: React.FC<ArtistProps> = (props) => {
    const { artists } = props;

    return (
        <Grid
            justifyContent='center'
            alignItems='center'
            sx={{
                display: 'grid',
                padding: '5%',
                bgcolor: 'secondary.main', 
                '& > :not(style)': {
                    m: 1,
                },
                backgroundImage: 'url("/birds2.png")',
                backgroundSize: '50%',
                backgroundPosition: 'center',
                justifyItems: 'center',
            }}
        >
            <Grid>            
                <Title title={'Unsere Künstler:innen 2024'}/>
            </Grid>
            {artists.map((artist, index) => (
                <ArtistCard 
                    key={index} 
                    artist={artist}
                />
                ))
            }
        </Grid> 
    );
}

export default Artists;