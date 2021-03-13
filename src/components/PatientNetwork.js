import React, { useState, useEffect } from 'react';
import ContactForm from "./ContactForm";
import firebaseDb from "../firebase";
import GetLocation from './GetLocation';
import DatePicker from "react-datepicker";
import { format } from 'date-fns'
import ImgCan from './Images/green.jpg';
import ImgCannot from './Images/red.jpg';

import "react-datepicker/dist/react-datepicker.css";

const PatientNetwork = () => {

	var [currentId, setCurrentId] = useState('');
    var [contactObjects, setContactObjects] = useState({})
    const [startDate, setStartDate] = useState(new Date());
    //Once components load complete
    useEffect(() => {
        firebaseDb.child('scanned_data').on('value', snapshot => {
            if (snapshot.val() != null) {
                setContactObjects({
                    ...snapshot.val()
                });
            }
        })
    }, [])


    const filterWithDate = (date) => {
        //console.log(date);
        setStartDate(date);
        //console.log(format(date, 'dd-MM-yyyy'));
        firebaseDb.child("scanned_data").orderByChild('currentDateTimeString').equalTo(format(date, 'dd-MM-yyyy')).on('value', snapshot => {
                if (snapshot.val() != null) {
                    setContactObjects({
                        ...snapshot.val()
                    });
                }
            })
    }

  return (
        <>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4 text-center">Patient Network</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 ">
                   
                </div>

                <div className="col-md-14 mt-5">

                    <div className="form-group input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    

                    <DatePicker
                    className="form-control"
                    selected={startDate}//when day is clicked
                    onChange={filterWithDate} //only when value has changed
                    />
                    </div>
                    
                    <table className="table table-borderless table-stripped">
                        <thead className="thead-light">
                            <tr>
                            
                                <th>Date</th>
                                <th>Name</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th>NIC</th>
                                <th>Location</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(contactObjects).map((key) => (
                                    <tr key={key}>
                                        
                                        <td>{contactObjects[key].currentDateTimeString}</td>
                                        <td>{contactObjects[key].name}</td>
                                        <td>{contactObjects[key].contactNo}</td>
                                        <td>{contactObjects[key].email}</td>
                                        <td>{contactObjects[key].address}</td>
                                        <td>{contactObjects[key].nic}</td>

                                        {/* <td className="bg-light">
                                            <a className="btn text-primary" onClick={() => { setCurrentId(key) }}>
                                                <i className="fas fa-pencil-alt"></i>
                                            </a>
                                            <a className="btn text-danger" onClick={() => { onDelete(key) }}>
                                                <i className="far fa-trash-alt"></i>
                                            </a>
                                        </td> */}
                                        <td className="bg-light">
                                          <GetLocation lat={contactObjects[key].latitude} sub={contactObjects[key].subscription} long={contactObjects[key].longitude} nic={contactObjects[key].nic} key={contactObjects[key].nic} />
                                           {/* {(contactObjects[key].subscription == 0) ? <GetLocation lat={contactObjects[key].latitude} long={contactObjects[key].longitude} nic={contactObjects[key].nic} key={contactObjects[key].nic} /> : <i className="fas fa-search-location"></i>} */}
                                            
                                            
                                            
                                        </td>
                                        <td>
                                        <img src={contactObjects[key].subscription == 0 ? ImgCan : ImgCannot} height = "20" width="20"></img>
                                            {/* {contactObjects[key].subscription == 0 ? "Can Track" : "Cannot Track"} */}
                                            {/* {contactObjects[key].subscription == 0 ? img.src={Image} : "Cannot Track"} */}
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default PatientNetwork;