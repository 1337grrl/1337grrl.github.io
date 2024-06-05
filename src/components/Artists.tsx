import { Grid } from "@mui/material";
import Title from "./Utils/Title";
import ArtistCard from "./Cards/ArtistCardHoch";
import ArtistCardBreit from "./Cards/ArtistCardBreit";
import ArtistCardHoch from "./Cards/ArtistCardHoch";

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
                <Title title={'Die Künstler:innen 2024'} color='primary.dark'/>
            </Grid>
            {artists.map((artist, index) => (
                artist.orientation == 'landscape' ? 
                <ArtistCardBreit 
                    key={index} 
                    artist={artist}
                /> : 
                <ArtistCardHoch
                    key={index} 
                    artist={artist}
                />
                ))
            }
        </Grid> 
    );
}

export default Artists;