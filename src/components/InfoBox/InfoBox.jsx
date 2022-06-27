import React from 'react';
import {Box, Grid}  from '@material-ui/core';
import Button from '@mui/material/Button';
import {FcGlobe } from "react-icons/fc";
import useStyles from './styles';


const InfoBox = () => {
    const classes= useStyles();
    return(

        <Grid container spaceing={2} className={classes.infogrid}>
         <Grid item xs={4}>
          <div className={classes.mycard}>
                <span className={classes.cardhead}>
                🚀 Hiking To The Moon!
                </span>
                <span className={classes.cardtext}>
                    When we hike, not only do we live to the fullest of our humanity, but we unite with nature.

                </span>
           </div> 
         </Grid>
         <Grid item xs={6}>
            <h1>LOOK UP HIKING PATHS & ACTIVITES AROUND YOU AND ANYWHERE! <FcGlobe/> </h1>
            <Button variant="outlined"   onClick={() => {
                                                console.log('change to random path');
                                            }}>RANDOM PATH</Button>


         </Grid>
        </Grid>

        

    );


}

export default InfoBox;