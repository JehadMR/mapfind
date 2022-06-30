import React, {useState, useEffect, useRef} from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Box from '@mui/material/Box';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import InfoBox from "./components/InfoBox/InfoBox"
import {getLocationInfo} from "./API/index";





const App = () => {

    const [listOfTrails, setListOfTrails] = useState([]);
   
    const [coordinates, setCoordinates] = useState({lat: 32.74652229245906,
        lng: 35.025173386673046});
    const [bounds, setBounds] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        getLocationInfo()
            .then((data) => {
                console.log(data);
                setListOfTrails(data);
        })
    },[]);

     
    return(
        <>
         
         <CssBaseline/>

         <Header/>
         <InfoBox/>
         <Grid container spacing={3} style={{height: "45em", width: '95.7%', paddingTop: '1em'}} >
            <Grid item xs={12} md={4}>
                <List/>
            </Grid>

            <Grid item xs={12} md={8}>
                <Map
                setCoordinates= {setCoordinates} 
                setBounds= {setBounds}   
                coordinates= {coordinates}    
                mapRef = {mapRef}
                />
            </Grid>

         </Grid>
        </>
    );
}

export default App;