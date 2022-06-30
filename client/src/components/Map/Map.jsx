import React, { useEffect, useRef } from "react";
import {Paper, Typography, useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons';
import Rating from '@mui/material/Rating';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import useStyles from './styles';

const containerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '6px',
  };


const Map = ({setCoordinates, setBounds, coordinates, mapRef }) => { 
    const classes = useStyles();
    const isMobile = useMediaQuery('(min-width:600px)');
  
  
     
      
       {/* useEffect(() => {
          if ("geolocation" in navigator) 
           { navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates(position.coords);
          }); }
          else {
            coordinates = coordinates;
          }
      }, []);  */}

      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyD_1xKlAlU1mLdHS7tXl4Iczo5SyFHjWq4"
      })
    
      const [map, setMap] = React.useState(null)
    
      const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(mapRef.current);
        map.fitBounds(bounds);
        setMap(mapRef.current)
      }, [])
    
      const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
      }, [])

    
    
      const handleCenterChanged = () => {
        if (!map) return;
        const newPos = map.getCenter();
        console.log('newPos');
        setCoordinates(newPos);
        
         
      }
      
    return isLoaded ? (
       <div className={classes.mapContainer}>
        
        <GoogleMap
        mapContainerStyle={containerStyle}
        center={coordinates}
        zoom={14}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={''}
        onCenterChanged={handleCenterChanged}
        onChildClick={''}
         >
        <></>
      </GoogleMap>
      
        </div>
    ) : <></>
}


export default Map;