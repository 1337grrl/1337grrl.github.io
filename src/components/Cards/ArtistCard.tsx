import {  Box, Card, CardContent, Typography } from "@mui/material";
import { ArtistType } from "../Artists";
import React from "react";

export type ArtistCardProps = {
    artist: ArtistType,
}

const ArtistCard: React.FC<ArtistCardProps> = (props) : React.ReactElement => {
    const { artist } = props;
    const imageWidth = artist.orientation == 'landscape' ? '70%' : '30%';

    return (
        <Card
            sx={{
                backgroundColor: 'primary.main',
                boxShadow: 10,
                display: 'flex',
                flexDirection: {
                    lg: 'row',
                    xs: 'column',
                },
                width: '85%',
            }}
        >
            <Box sx={{ 
                width: {
                    lg: '70%',
                    xs: '100%',
                    }, 
                }}
            >
                <CardContent sx={{ padding: '10%', display: 'flex', flexDirection: 'column' }}>
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
            </Box>
            <Box sx={{ 
                width: {
                lg: imageWidth,
                xs: '100%',
                    }, 
                padding: '5%' 
                }}
            >
                <img src={artist.image} alt={artist.name} style={{width: '100%', height: 'auto'}}/>
            </Box>
        </Card>
    );
}

export default ArtistCard;