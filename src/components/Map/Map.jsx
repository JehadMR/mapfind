import React from "react";
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons';
import Rating from '@mui/material/Rating';
import GoogleMapReact from 'google-map-react';
import useStyles from './styles';


const Map = () => { 
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
    const coordinates = {lat: 40.7128, lng: 74.0060 };
    const defaultProps = {
        center: {
          lat: 40.758858,
          lng: -73.979918
        },
        zoom: 11
      };
    return(
       <div className={classes.mapContainer}>

            <GoogleMapReact 
               bootstrapURLKeys={{key: 'AIzaSyD_1xKlAlU1mLdHS7tXl4Iczo5SyFHjWq4'}}
               defaultCenter={defaultProps.center}
               defaultZoom={defaultProps.zoom}
               center={coordinates}
               margin={[50, 50, 50, 50]}
               options={''}
               onchange={''}
               onChildClick={''}>

            </GoogleMapReact>
        </div>
    );
}


export default Map;