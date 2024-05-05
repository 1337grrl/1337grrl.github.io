import { createTheme } from '@mui/material/styles';

// Define your custom theme here
export const theme = createTheme({
  palette: {
    primary: {
      main: '#ebe2d9', // sand
    },
    secondary: {
      light: '#B2BFD7',
      main: '#4a6390', // blau
      dark: '#36496A',
    },
    error: {
      main: '#F88379', // Example background color
      light: '#f0c4b9',
      dark: '#640D05',
    },
  },
  typography: {
    fontFamily: [
      '"Merienda", cursive',
      '"Arizonia", cursive',
      '"Marcellus", serif',
      '"Ojuju", sans-serif',
    ].join(','), // Example font family
    h1: {
      fontFamily: '"Merienda", cursive',
      fontSize: '3rem', // Example heading 1 font size
      fontWeight: 700, // Example heading 1 font weight
      marginBottom: '1rem', // Example heading 1 margin bottom
      color: '#1f293d',
    },
    h4: {
      fontFamily: '"Arizonia", cursive',
      fontSize: '2.5rem', // Example heading 1 font size
      fontWeight: 700, // Example heading 1 font weight
      color: '#1f293d',
      marginBottom: '1rem', // Example heading 1 margin bottom
    },
    h5: {
      fontFamily: '"Arizonia", cursive',
      fontSize: '2rem', // Example heading 1 font size
      fontWeight: 700, // Example heading 1 font weight
      color: '#1f293d',
      marginBottom: '1rem', // Example heading 1 margin bottom
    },
    h6: {
      fontFamily: '"Arizonia", cursive',
      fontSize: '1.5rem', // Example heading 1 font size
      fontWeight: 700, // Example heading 1 font weight
      color: '#1f293d',
      marginBottom: '1rem', // Example heading 1 margin bottom
    },
    body1: {
      fontFamily: '"Marcellus", serif',
      fontSize: '1.5rem',
      color: '#1f293d',
      textAlign: 'justify',
    },
    body2: {
      fontFamily: '"Marcellus", serif',
      fontSize: '1rem',
      color: '#1f293d',
      textAlign: 'center',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh', // Ensure the container takes the full viewport height
          padding: '20px', // Add padding around the container
          maxWidth: '800px', // Set a maximum width for the custom container
          width: '100%', // Ensure the container takes the full width of its parent
          margin: '0 auto', // Center the container horizontally
        },
      },
    }, 
    MuiChip: {
      styleOverrides: {
        root: {
          fontFamily: '"Ojuju", sans-serif',
          fontSize: '1.3rem',
          padding: '20px',
          backgroundColor: '#4a6390', // Custom background color for chips
          color: '#ebe2d9',
          borderRadius: 20, // Custom border radius for chips
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          variant: 'middle',
        },
      },
    },
  },
  // Add more custom theme configurations as needed
});
