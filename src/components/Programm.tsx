import { Grid, styled } from "@mui/material";
import ProgrammCard, { ProgrammCardProps } from "./Cards/ProgrammCard";

type ProgramProps = {
    programItems: ProgrammCardProps[];
}


const StyledGrid = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.light,
    padding: '50px',
    backgroundImage: 'url("/birds.png")',
    backgroundSize: '30%',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  }));

const Programm: React.FC<ProgramProps> = (props) => {
    const { programItems } = props;

    return (
        <StyledGrid 
            container 
            justifyContent="center" 
            alignItems="center" 
            sx={{backgroundColor: '#B2BFD7', padding: '50px' }}
        >
            <Grid xs={10} lg={7}>
                {programItems.map(item => (
                    <ProgrammCard 
                    image={item.image} 
                    name={item.name} 
                    description={item.description}
                    date={item.date}
                    location={item.location}
                    />
                    ))
                }
            </Grid>
        </StyledGrid>
    );
}

export default Programm;