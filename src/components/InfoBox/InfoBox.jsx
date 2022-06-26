import React from 'react';
import {Box, Grid}  from '@material-ui/core';

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
            <h1>HOLA!</h1>

         </Grid>
        </Grid>

        

    );


}

export default InfoBox;