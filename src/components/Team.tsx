import { Box, Grid } from "@mui/material";
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
            {teamMembers.map((member, index) => (
                <Grid key={index}>
                    <TeamCard teamMember={member}/>
                    </Grid>
                ))
            }
            <Grid
                sx={{
                    display: 'flex', 
                    flexDirection: {
                        lg: 'row',
                        xs: 'column',
                    },
                    justifyContent: 'space-evenly', 
                }}
            >
                <Box
                    sx={{
                        width: {
                            lg: '70%',
                            xs: '95%',
                                },
                        height: 'auto',
                        margin: '10px',               
                    }}
                >
                    <img
                        src='Locations/Logo_Evangelische_Kirche_Gemeinde_Wannsee.png'
                        style={{
                            width: '100%', 
                            height: 'auto'
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        width: {
                            lg: '70%',
                            xs: '95%',
                                },
                        height: 'auto',
                        margin: '10px',               
                    }}
                >
                    <img
                        src='Locations/Logo_Nikolskoe.png'
                        style={{
                            width: '100%', 
                            height: 'auto'
                        }}
                    />
                </Box>
            </Grid>
        </Grid>
    );
}

export default Team;