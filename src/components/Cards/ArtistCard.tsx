import {  Box, Card, CardContent, Typography } from "@mui/material";
import { ArtistType } from "../Artists";
import React from "react";
import Title from "../Utils/Title";

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
                <CardContent sx={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
                    <Title title={artist.name} ratio={'1'}/>
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
                m: '5%' 
                }}
            >
                <img src={artist.image} alt={artist.name} style={{width: '100%', height: 'auto'}}/>
            </Box>
        </Card>
    );
}

export default ArtistCard;