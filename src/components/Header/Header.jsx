
import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={headerbar}>
      <Toolbar className={classes.toolbar}>
        <div className={classes.title}>
         <h3>Ma'Hike</h3>
        </div>
        <Box className={classes.searchbox}>
          <div className={classes.bartext}>
            <h4>Explore Your Nature</h4>
          </div>
         {/*    <Autocomplete > */}
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
           {/* </Autocomplete> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;