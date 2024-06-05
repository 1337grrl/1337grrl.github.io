import {  Box, Card, CardContent, Typography } from "@mui/material";
import { ArtistType } from "../Artists";
import React from "react";

export type ArtistCardProps = {
    artist: ArtistType,
}

const ArtistCardBreit: React.FC<ArtistCardProps> = (props) : React.ReactElement => {
    const { artist } = props;

    return (
        <Card
            sx={{
                backgroundColor: 'primary.main',
                boxShadow: 10,
                display: 'flex',
                flexDirection: 'column',
                width: '75%',
                padding: '5%',
            }}
        >
            <Box sx={{ 
                width: '100%',
                }}
            >
                <img src={artist.image} alt={artist.name} style={{width: '100%', height: 'auto'}}/>
            </Box>
            <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <Typography variant="h2" display='inline'>{artist.name[0]}</Typography>                        
                    <Typography variant="body2" display='inline'>{' ' + artist.name.slice(1)}</Typography>
                </div>
                <Typography variant="body1">
                {artist.description.split('\n').map((line, index) => (
                    <React.Fragment key={index}>
                    {line}
                    <br />
                    </React.Fragment>
                ))}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default ArtistCardBreit;