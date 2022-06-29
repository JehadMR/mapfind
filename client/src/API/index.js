import axios from 'axios';

const trails_endpoint= "http://localhost:3001/getTrails";



 export const getLocationInfo = async  () => {

    try{
        const data = await axios.get(trails_endpoint);
        return data.data;

    } catch(error) {
          console.log(error);
    }

}