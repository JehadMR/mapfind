import React from 'react';
import {Box}  from '@material-ui/core';

import useStyles from './styles';


const InfoBox = () => {
    const classes= useStyles();
    return(

        <Box>

          <div className={classes.mycard}>
                <span className={classes.cardhead}>
                🚀 Hiking To The Moon!
                </span>
                <span className={classes.cardtext}>
                    When we hike, not only do we live to the fullest of our humanity, but we unite with nature.

                </span>
           </div> 

        </Box>

        

    );


}

export default InfoBox;