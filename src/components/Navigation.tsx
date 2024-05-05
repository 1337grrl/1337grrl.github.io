import { AppBar, Stack, Toolbar, Typography } from "@mui/material";

const Navigation: React.FC = () => {
    return (
      <AppBar position='fixed' sx= {{ backgroundColor: 'secondary.light'}}>
        <Toolbar>
           <Stack 
            direction="row"
            spacing={2}
            sx={{
            width: '80%', // Set the width to 80% of the AppBar
            margin: '0 auto', // Center the Stack horizontally
            justifyContent: 'center', // Evenly space items
            alignItems: 'center', // Center items vertically
          }}>
          <Typography variant='h4'>Musikfest Wannsee</Typography>
          </Stack> 
        </Toolbar>
      </AppBar>
    );
}

export default Navigation;