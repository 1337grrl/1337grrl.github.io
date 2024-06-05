import { Box, Card, CardContent, CardMedia, Chip, Stack, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";

export type ProgrammCardProps = {
    image: string,
    name?: string,
    description?: string,
    location?: string,
    date?: string,
}

const ProgrammCard: React.FC<PropsWithChildren<ProgrammCardProps>> = (props) : React.ReactElement => {
    const { image, name = 'TBA', description = 'Lorem ipsum', location = 'TBA', date = 'TBA' } = props;

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
                width:  {
                    lg: '80%',
                    xs: '95%',
                },
            }}
        >
            <CardMedia sx={{ 
                    width: {
                        lg: '35%',
                        xs: '100%',
                    },
                    padding: '5%',
                }}
                >
                <img src={image} style={{width: '100%', height: 'auto'}}/>
            </CardMedia>                
            <Box sx={{  
                width: {
                    lg: '65%',
                    xs: '100%',
                    }, 
                }}
            >
                <CardContent sx={{ padding: '10%'}}>
                    <div>
                        <Typography variant="h2" display='inline'>{name[0]}</Typography>                        
                        <Typography variant="body2" display='inline'>{' ' + name.slice(1)}</Typography>
                    </div>
                    <Typography variant="body1">{description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                        ))}
                    </Typography>
                <Stack direction='row' sx={{ paddingTop: '10%'}}>
                    <Chip label={date} sx={{margin: '10px'}}></Chip>
                    <Chip label={location} sx={{margin: '10px'}}></Chip>
                </Stack>
                </CardContent>
            </Box>
        </Card>
    );
}

export default ProgrammCard;