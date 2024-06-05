import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
        main: '#ebe2d9', // sand
        dark: '#fefce8',
      },
      secondary: {
        light: '#B2BFD7',
        main: '#4a6390', // blau
      },
    },
    typography: {
      fontFamily: [
        '"Whisper", cursive',
        '"Marcellus", serif',
      ].join(','), 
      h1: {
        fontFamily: '"Whisper", cursive',
        fontSize:'12rem',
        '@media (max-width:1200px)': {
          fontSize: '9rem',
        },
        '@media (max-width:600px)': {
          fontSize: '4rem',
        },
        fontWeight: 700, // Example heading 1 font weight
        marginBottom: '1rem', // Example heading 1 margin bottom
        color: '#1f293d',
      },
      h2: {
        fontFamily: '"Whisper", cursive',
        fontSize: '7rem',
        '@media (max-width:1200px)': {
          fontSize: '6rem',
        },
        '@media (max-width:600px)': {
          fontSize: '3rem',
        }, // Example heading 1 font size
        fontWeight: 600, // Example heading 1 font weight
        marginBottom: '1rem', // Example heading 1 margin bottom
        color: '#1f293d',
      },
      h4: {
        fontFamily: '"Marcellus", cursive',
        fontSize: '2.5rem', // Example heading 1 font size
        fontWeight: 700, // Example heading 1 font weight
        color: '#1f293d',
        marginBottom: '1rem', // Example heading 1 margin bottom
      },
      h5: {
        fontFamily: '"Whisper", cursive',
        fontSize: '2rem', // Example heading 1 font size
        fontWeight: 700, // Example heading 1 font weight
        color: '#1f293d',
        marginBottom: '1rem', // Example heading 1 margin bottom
      },
      h6: {
        fontFamily: '"Marcellus SC", serif',
        fontSize: '4.5rem',
        '@media (max-width:1200px)': {
          fontSize: '3rem',
        },
        '@media (max-width:600px)': {
          fontSize: '1.5rem',
        },
        color: '#1f293d',
        textAlign: 'center',
      },
      body1: {
        fontFamily: '"Marcellus", serif',
        fontSize: 24,
        '@media (max-width:1200px)': {
          fontSize: 20,
        },
        '@media (max-width:600px)': {
          fontSize: 16,
        },
        color: '#1f293d',
        textAlign: 'justify',
      },
      body2: {
        fontFamily: '"Marcellus SC", serif',
        fontSize: 36,
        '@media (max-width:1200px)': {
          fontSize: 28,
        },
        '@media (max-width:600px)': {
          fontSize: 24,
        },
        color: '#1f293d',
        textAlign: 'center',
      },
    },
    components: {
      MuiChip: {
        styleOverrides: {
          root: {
            fontFamily: '"Ojuju", sans-serif',
            fontSize: 20,
            '@media (max-width:1200px)': {
              fontSize: 16,
            },
            '@media (max-width:600px)': {
              fontSize: 14,
            },
            padding: '20px',
            backgroundColor: '#4a6390', // Custom background color for chips
            color: '#ebe2d9',
            borderRadius: 20, // Custom border radius for chips
          },
        },
      },
    },
});


export default theme;