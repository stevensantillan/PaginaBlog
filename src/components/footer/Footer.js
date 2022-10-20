import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';

const headerTheme = createTheme({
    palette: {
      primary: {
        main: '#bf930d',
      },
    },
  });

const Footer = () => {

    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

  return (
    <ThemeProvider theme={headerTheme}>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display:"flex", justifyContent: "center" }} elevation={4} >
          <BottomNavigation 
            sx={{ width: 1000, height: 80 }} 
            value={value} 
            onChange={handleChange}>
    
          <BottomNavigationAction
            label="Instagram"
            value="instagram"
            icon={<InstagramIcon />}
          />
          <BottomNavigationAction
            label="Twitter"
            value="twitter"
            icon={<TwitterIcon />}
          />
          <BottomNavigationAction
            label="Facebook"
            value="facebook"
            icon={<FacebookIcon />}
          />
          <BottomNavigationAction 
            label="Ubicación" 
            value="ubicacion" 
            icon={<LocationOnIcon />} />
          </BottomNavigation>
        </Paper>
    </ThemeProvider>
    

  )
}

export default Footer