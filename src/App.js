import React from "react";
import {CssBaseline, Grid} from "@material-ui/core";
import Box from '@mui/material/Box';
import Header from "./components/Header/Header";
import Map from "./components/Map/Map";
import List from "./components/List/List";
import SearchBar from "./components/SearchBar/SearchBar"
import ActivityInfo from "./components/ActivityInfo/ActivityInfo";




const App = () => {
    return(
        <>
         
         <CssBaseline/>
         <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="10vh"
            >

         <Header/>
         </Box>

         <SearchBar/>

         <Grid container spacing={3}  >
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