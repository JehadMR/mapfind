import React from 'react';
import { Autocomplete } from "@react-google-maps/api";
import {Toolbar, Typography, InputBase, Box  } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@mui/material/TextField';


import useStyles from './styles';


const SearchBox = () => {
    const classes= useStyles();
    return(

        <Toolbar className={classes.toolbar}>
              <div className={classes.mycard}>
                  <span className={classes.cardhead}>
                  🚀 Hiking To The Moon!
                  </span>
                  <span className={classes.cardtext}>
                    When we hike, not only do we live to the fullest of our humanity, but we unite with nature.

                  </span>
              </div>
            <Box>
               {/* <Autocomplete>*/}
                    <div className={classes.search}>
                        <TextField label="Any Hike, Anywhere!" color="secondary" focused />
                       {/* <InputBase placeholder="Seach..." classes={{root: classes.inputRoot, input: classes.inputInput}} />*/}

                    </div>

               {/* </Autocomplete>*/}
               
            </Box>


        </Toolbar>

    );


}

export default SearchBox;