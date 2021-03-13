// const 

// https://ideabiz.lk/apicall/subscription/v3/subscribe


// https://ideabiz.lk/apicall/subscription/v3/unsubscribe

// {
//     "method":"WEB",
//     "msisdn": "tel:+94766691500",    
//     "serviceID": "ajer78-weer2-werd-wrfed"  
// }

// {
//     "statusCode": "SUCCESS",
//     "message": "",
//     "data": {
//        "subscribeResponse":{
//            "msisdn": "tel:+94766691500",
//            "status": "UNSUBSCRIBED",
//        "serviceID": null
//          }
//      }
// }
import axios from 'axios';

export const unSubscribe = async (method,msisdn,serviceID) => {
    const res = await axios.post('https://ideabiz.lk/apicall/subscription/v3/unsubscribe',{method,msisdn,serviceID});
    const unsub = res.data;
    return unsub;
}