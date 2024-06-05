import { Grid } from "@mui/material";
import ProgrammCard, { ProgrammCardProps } from "./Cards/ProgrammCard";

type ProgramProps = {
    programItems: ProgrammCardProps[];
}


const Programm: React.FC<ProgramProps> = (props) => {
    const { programItems } = props;

    return (
        <Grid
            justifyContent='center'
            alignItems='center'
            sx={{
                display: 'grid',
                bgcolor: 'secondary.light', 
                '& > :not(style)': {
                    m: 1,
                }, 
                justifyItems: 'center'
            }}
        >
            {programItems.map((item, index) => (
                <ProgrammCard 
                    key={index}
                    image={item.image} 
                    name={item.name} 
                    description={item.description}
                    date={item.date}
                    location={item.location}
                />
                ))
            }
        </Grid>
    );
}

export default Programm;