import React from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Box from '@mui/material/Box';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import InfoBox from "./components/InfoBox/InfoBox"




const App = () => {
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
                <Map/>
            </Grid>

         </Grid>
        </>
    );
}

export default App;