import { Box, Card, CardContent, Chip, Typography } from "@mui/material";
import React, { PropsWithChildren } from "react";
import Title from "../Utils/Title";

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
            <Box sx={{ 
                    width: {
                        lg: '35%',
                        xs: '100%',
                    },
                    m: '5%',
                }}
                >
                <img src={image} style={{width: '100%', height: 'auto'}}/>
            </Box>                
            <Box sx={{  
                width: {
                    lg: '65%',
                    xs: '100%',
                    }, 
                }}
            >
                <CardContent sx={{ paddingLeft: '40px', paddingTop: '40px'}}>
                    <Title title={name} ratio={'1'}/>
                    <Typography variant="body1">{description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                        ))}
                    </Typography>
                </CardContent>
                <Box sx={{ padding: '30px'}}>
                    <Chip label={date} sx={{margin: '10px'}}></Chip>
                    <Chip label={location} sx={{margin: '10px'}}></Chip>
                </Box>
            </Box>
        </Card>
    );
}

export default ProgrammCard;