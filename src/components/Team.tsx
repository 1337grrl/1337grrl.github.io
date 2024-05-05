import { Grid } from "@mui/material";
import TeamCard from "./Cards/TeamCard";

export type TeamMemberType = {
    name?: string,
    image?: string,
    description: string,
}

export type TeamProps = {
    teamMembers: TeamMemberType[],
}

const Team: React.FC<TeamProps> = (props) => {
    const { teamMembers } = props;
    return (
        <Grid 
            container 
            justifyContent='center' 
            sx={{backgroundColor: 'secondary.light', padding: '50px' }}
        >
            {teamMembers.map(member => (
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <TeamCard teamMember={member}/>
                    </Grid>
                ))
            }
        </Grid>
    );
}

export default Team;