import { AppBar, Toolbar } from "@mui/material";
import Title from "./Title";

const Navigation: React.FC = () => {
    return (
      <AppBar position='fixed' sx= {{ backgroundColor: 'secondary.light', height: '7.5%'}}>
        <Toolbar sx={{ justifyContent: 'center'}}>
            <Title title={'Musikfest Wannsee'} ratio='0.6'/>
        </Toolbar>
      </AppBar>
    );
}

export default Navigation;