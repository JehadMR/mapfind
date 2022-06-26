
import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { GiPlantSeed } from "react-icons/gi";
import useStyles from './styles.js';

const Header = () => {
  const classes = useStyles();

  return (
    
      <div className={classes.toolbar}>
        <div className={classes.title}>
          <div className={classes.titlecontent}>
           <GiPlantSeed className={classes.headerlogo}/> <h3>Ma'Hike</h3>
          </div>
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
      </div>
  );
};

export default Header;