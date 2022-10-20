import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Articles from '../articles/Articles';

const headerTheme = createTheme({
    palette: {
      primary: {
        main: '#bf930d',
      },
    },
  });

//Panel de artículos

  function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, display: "flex", justifyContent: "center", width: "auto" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Panel de nombre de clases

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={headerTheme}>
    <Box
      sx={{ flexGrow: 1, bgcolor: '#f6f6f4', display: 'flex', height: "100%", width: "100%" }}
      color= "warning"
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', width: "250px", height: "900px", pt: 3}}
      >
        <Tab label="Clase 1" {...a11yProps(0)} sx={{ pt: 3, fontSize: "17px"}}  />
        <Tab label="Clase 2" {...a11yProps(1)} sx={{ pt: 3, fontSize: "17px"}} />
        <Tab label="Clase 3" {...a11yProps(2)} sx={{ pt: 3, fontSize: "17px"}} />
        <Tab label="Clase 4" {...a11yProps(3)} sx={{ pt: 3, fontSize: "17px"}} />
        <Tab label="Clase 5" {...a11yProps(4)} sx={{ pt: 3, fontSize: "17px"}} />
        <Tab label="Clase 6" {...a11yProps(5)} sx={{ pt: 3, fontSize: "17px"}} />
        <Tab label="Clase 7" {...a11yProps(6)} sx={{ pt: 3, fontSize: "17px"}} />
      </Tabs>

      <TabPanel value={value} index={0}>
        <Articles></Articles>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>

    </Box>
    </ThemeProvider>
  );
}
