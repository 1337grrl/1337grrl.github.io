import { Grid, styled } from "@mui/material";
import ArtistCard from "./Cards/ArtistCard";

export type ArtistType = {
    name: string,
    image: string,
    description: string,
}

export type ArtistProps = {
    artists: ArtistType[],
}


const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    padding: '50px',
    backgroundImage: 'url("/birds2.png")',
    backgroundSize: '50%',
    backgroundPosition: 'center',
}));


const Artists: React.FC<ArtistProps> = (props) => {
    const { artists } = props;
    return (
        <StyledGrid container justifyContent="center" alignItems="center" sx={{backgroundColor: 'secondary.main', padding: '50px' }}>
            <Grid md={10} lg={8}>
                {artists.map(artist => (
                    <ArtistCard artist={artist}/>
                    ))
                }
            </Grid>
        </StyledGrid>
    );
}

export default Artists;