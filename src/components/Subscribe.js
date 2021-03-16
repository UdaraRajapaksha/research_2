
import axios from 'axios';

export const pinSubscription = async (method, msisdn) => {
  const config = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer toekn`,
    'Accept': 'application/json'
  };
 const res = await axios.post('https://ideabiz.lk/apicall/pin/subscription/v1/subscribe',{method,msisdn}, config);
 const pinSub = res.data;
 return pinSub;
};

export const submitPin = async (pin, serverRef) => {
  const res = await axios.post('https://ideabiz.lk/apicall/pin/subscription/v1/submitPin',{pin, serverRef});
  const data = res.statusCode;
  return data;
};

{/*{
  "statusCode": "SUCCESS",
  "message": null,
  "data": {
    "status": "PENDING_AUTH",
    "serverRef": "f07927b4030048be99dc051314b5f40e",
    "msisdn": "tel:+94766877142",
    "method": "ANC"
  }
} 

{
  "statusCode": "SUCCESS",
  "message": null,
  "data": {
    "status": "PENDING_AUTH",
    "serverRef": "f07927b4030048be99dc051314b5f40e",
    "msisdn": "tel:+94766877142",
    "serviceId" : "xxxx-xxxx-xxxxxxx",
    "method": "ANC"
  }
}

{
  "pin": "520972",
  "serverRef": "958e39b574a042c290e6019f0590e7f5"
}
{
  "statusCode": "ERROR",
  "message": "Wrong PIN",
  "data": null
}
{
  "statusCode": "SUCCESS",
  "message": "Subscription Status",
  "data": {
    "status": "SUBSCRIBED",
    "serverRef": "8f27e17b51de4b64baa6cd5525506516",
    "msisdn": "tel:+94766877142",
    "method": "ANC"
  }
}*/}
