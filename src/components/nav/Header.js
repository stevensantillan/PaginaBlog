import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./header.scss";

const headerTheme = createTheme({
  palette: {
    primary: {
      main: '#b8860b',
    },
  },
});

const Header = () => {
  return (
    <ThemeProvider theme={headerTheme}>
      <Box sx={{ flexGrow: 1}}>
        <AppBar position="static">

            <Box className='boxHeader'>
              <Button color="inherit"><Typography className="linksHeader">Noticias</Typography></Button>
              <Button color="inherit"><Typography className='linksHeader'>Contacto</Typography></Button>
              <Button color="inherit"><Typography className='linksHeader'>Cursos</Typography></Button>
            </Box>
  
        </AppBar>
      </Box>
    </ThemeProvider>
      
  )
}

export default Header