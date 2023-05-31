import { useState, useRef } from 'react';

import { BottomNavigation, BottomNavigationAction, Paper, CssBaseline, Box } from '@mui/material';
import { Link } from 'react-router-dom';

import PersonIcon from '@mui/icons-material/Person';
import LayersIcon from '@mui/icons-material/Layers';
import WorkHistoryIcon from '@mui/icons-material/WorkHistory';

export default function Directory() {
  const [value, setValue] = useState(0);
  const ref = useRef(null);

  function isMobile() {
    return window.mobileCheck();
  }

  const mobileAppBarStyle = {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
  };

  const desktopAppBarStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  };

  return (
    <Box sx={{ pb: 7 }} ref={ref} >
      <CssBaseline />
      <Paper
        sx={ isMobile() ? mobileAppBarStyle : desktopAppBarStyle }
        elevation={10}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="About Me" icon={<PersonIcon />}
            component={Link} to='/about' />
          <BottomNavigationAction label="Project Gallery" icon={<LayersIcon />}
            component={Link} to='/gallery' />
          <BottomNavigationAction label="Experience" icon={<WorkHistoryIcon />}
            component={Link} to='/work' />
        </BottomNavigation>
      </Paper>
    </Box>
  )
}