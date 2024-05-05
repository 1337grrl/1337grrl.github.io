import { Chip, Divider, Grid, Typography } from "@mui/material";
import React from "react";

export type ProgrammCardProps = {
    image: string,
    name?: string,
    description?: string,
    location?: string,
    date?: string,
}

const ProgrammCard: React.FC<ProgrammCardProps> = (props) : React.ReactElement => {
    const { image, name = 'TBA', description = 'Lorem ipsum', location = 'TBA', date = 'TBA' } = props;

    return (
        <>
            <Grid
                container 
                sx={{ 
                    padding: '30px',
                    flexDirection: { xs: 'column', md: 'row' },
                    alignItems: 'stretch',
                }} 
                justifyContent="center" 
                alignContent="center" 
                xs={12}
            >
                <Grid item md={4} sx={{ padding: '20px' }}>
                    <img src={image} alt="Description of the image" style={{ width: '100%', height: 'auto' }}/>
                </Grid>
                <Grid item md={8} sx={{ padding: '20px', display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="h4">{name}</Typography>
                    <Typography variant="body1">{description.split('\n').map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                        ))}
                    </Typography>
                    <div  style={{ marginTop: 'auto' }}>
                        <Grid container justifyContent={'space-between'}>
                            <Chip label={date}></Chip>
                            <Chip label={location}></Chip>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
            <Divider/>
        </>
    );
}

export default ProgrammCard;