import { Avatar, Grid, Typography } from "@mui/material";
import { TeamMemberType } from "../Team";
import React from "react";

export type TeamCardProps = {
    teamMember: TeamMemberType,
}

const TeamCard: React.FC<TeamCardProps> = (props) : React.ReactElement => {
    const { teamMember } = props;

    return (
        <>
            <Grid
                sx={{ padding: '30px' }}
            >
                {teamMember.image && 
                    <Avatar
                        sx={{ width: 120, height: 120, margin: 'auto' }}
                        src={teamMember.image} 
                        alt={teamMember.name}
                    />
                }
                    <Typography 
                        variant="h6"
                        textAlign={'center'}
                    >
                        {teamMember.name}
                    </Typography>
                    <Typography 
                        variant="body2" 
                        textAlign={'center'}
                    >
                        {teamMember.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </Typography>
            </Grid>
        </>
    );
}

export default TeamCard;