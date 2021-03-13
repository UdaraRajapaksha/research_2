
import axios from 'axios';

export const getLocation = async (number) => {
  try {
    const res = await axios.get(`https://ideabiz.lk/apicall/location?address=${number}&requestedAccuracy =1000`);
    const locationData = await res.terminalLocationList.terminalLo0cation.currentLocation;
    return locationData;
  } catch (error) {
      console.log(error);
  }
};

/* Content-Type: application/json<br>
Authorization: Bearer [access token]<br>
Accept: application/json<br>

{
    "terminalLocationList": {
        "terminalLocation": {
            "address": "tel:+94777123456",
            "currentLocation": {
                "accuracy": "10.0",
                "altitude": "",
                "latitude": "6.893967",
                "longitude": "79.857292",
                "timestamp": "2014-09-03T08:27:08"
            },
            "locationRetrievalStatus": "Retrieved"
        }
    }
}

*/
