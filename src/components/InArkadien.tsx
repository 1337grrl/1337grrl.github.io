import { Box, Grid } from "@mui/material";
import { PropsWithChildren } from "react";
import Title from "./Utils/Title";

type ArkadienProps = {};

const InArkadien: React.FC<PropsWithChildren<ArkadienProps>> = (props) => {
    const {} = props;

    return (
        <Grid
            container 
            sx={{ 
                backgroundColor: 'secondary.light',
                paddingTop: '5%',
                display: 'flex', 
                flexDirection: {
                    lg: 'row',
                    xs: 'column',
                },
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Title title={'Auch ich in Arkadien...'}/>
            <Box sx={{ 
                width: '100%', 
                }}
            >
                <img
                    src='Auch_in_Arkadien.png'
                    style={{width: '100%', height: 'auto'}}
                />
            </Box>
        </Grid>
    );
};

export default InArkadien;