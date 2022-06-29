import React from "react";

const LocationInfo = ({trail}) => {

    return(
        <div>
        <h1>{trail.name}</h1> 
        <h2>{trail.location.lat}</h2>
        <h3>{trail.rating}</h3>

        </div>
        
    );
}


export default LocationInfo;