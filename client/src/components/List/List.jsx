import React, {useState, useEffect} from "react";
import {CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select } from "@material-ui/core";
import LocationInfo from "../LocationInfo/LocationInfo";
import useStyles from "./styles"

const List = () => {
    const classes = useStyles();
    const [type, setType] = useState('hikepaths');
    const [rating, setRating] = useState('');
 


    return(
        <div className={classes.container}>
            <Typography variant="h5">Hiking Paths, Scenary & Nature Observatories Around You</Typography>
            <FormControl className={classes.formControl}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                    <MenuItem value="hikepaths">Hiking Paths</MenuItem>
                    <MenuItem value="scenary">Scenary</MenuItem>
                    <MenuItem value="observatory">Nature Observatories</MenuItem>

                </Select>
            </FormControl>
            <FormControl className={classes.formControl}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={(e) => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>

                </Select>
            </FormControl>
            <Grid container spacing={3} className={classes.list}>
               {/* {listOfTrails.map((trail, i) => (
                    <Grid item key={i} xs={12}>
                       <LocationInfo trail={trail}/>
                    </Grid>
               ))} */}

            </Grid> 
        </div>
    );
}


export default List;