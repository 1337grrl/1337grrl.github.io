import { Box, Grid } from "@mui/material";
import TeamCard from "./Cards/TeamCard";
import Title from "./Utils/Title";

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
            <Title title={'Das Team'}/>
            <Grid
                container 
                justifyContent='center' 
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
                        alignItems: 'center'
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
                            src='Logos/Logo_Ev_Kirche.png'
                            style={{
                                width: '90%', 
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
                                width: '90%', 
                                height: 'auto'
                            }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Team;