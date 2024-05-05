import {  Divider, Grid, Typography } from "@mui/material";
import { ArtistType } from "../Artists";
import React from "react";

export type ArtistCardProps = {
    artist: ArtistType,
}

const ArtistCard: React.FC<ArtistCardProps> = (props) : React.ReactElement => {
    const { artist } = props;

    return (
        <>
            <Grid 
                container 
                sx={{ padding: '30px', backgroundColor: 'primary.main' }} 
                justifyContent="center" 
                alignItems="center" 
                xs={12}
            >
                <Grid item xs={12} sm={10} lg={8} sx={{ padding: '30px' }}>
                    <Typography variant="h4">{artist.name}</Typography>
                    <Typography variant="body1">
                    {artist.description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                        {line}
                        <br />
                        </React.Fragment>
                    ))}
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10} lg={4} sx={{ padding: '20px' }}>
                    <img 
                        src={artist.image} 
                        alt={artist.name} 
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Grid>
            </Grid>
            <Divider/>
        </>
    );
}

export default ArtistCard;