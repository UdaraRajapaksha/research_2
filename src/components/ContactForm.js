import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from 'date-fns'


const ContactForm = (props) => {
    const initialFieldValues = {
        currentDateTimeString: '',
        nic: '',
        fullName: '',
        mobile: '',
        email: '',
        address: ''
        
    }
    
    var [values, setValues] = useState(initialFieldValues)
    const [startDate, setStartDate] = useState(new Date());

    useEffect(() => {
        if (props.currentId === '')
            setValues({ ...initialFieldValues })
        else
            setValues({
                ...props.contactObjects[props.currentId]
            })
    }, [props.currentId, props.contactObjects])

    const handleInputChange = e => {
        var { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }

    const filterWithDate = (date) => {
        //console.log(date);
        setStartDate(date);
       
        var name = "currentDateTimeString";
        var value =  format(date, 'dd-MM-yyyy');
        setValues({
            ...values,
            [name]: value
        })
    }

    const disableFutureDt = current => {
        return current.isBefore(new Date())
      }

    const handleFormSubmit = e => {
        e.preventDefault()
        props.addOrEdit(values);
    }


    return (
        <form autoComplete="off" onSubmit={handleFormSubmit}>
            <div className="form-row"> 
            <div className="form-group input-group ">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-calendar-alt"></i>
                    </div>
                </div>
                
                <DatePicker
                className="form-control"
                isValidDate={disableFutureDt}
                selected={startDate}//when day is clicked
                onChange={filterWithDate} //only when value has changed
                />
                {/* <input className="form-control" name="currentDateTimeString" required placeholder="Date and Time" 
                    value={values.currentDateTimeString}
                    onChange={handleInputChange}
                /> */}
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="nic" pattern="[0-9]{9}[V]" required placeholder="NIC"
                    value={values.nic}
                    onChange={handleInputChange}
                />
            </div>
            </div>
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>
                </div>
                <input className="form-control" name="fullName" required placeholder="Full Name"
                    value={values.fullName}
                    onChange={handleInputChange}
                />
            </div>
            <div className="form-row">
                <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-mobile-alt"></i>
                        </div>
                    </div>

                    <input className="form-control" type="number" pattern="[0]{1}[1-9]{9}" name="mobile" required placeholder="Mobile"
                        value={values.mobile}
                        onChange={handleInputChange}
                    />
                </div>
            <div className="form-group input-group col-md-6">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-envelope"></i>
                        </div>
                    </div>
                    <input className="form-control" type='email' name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required placeholder="Email"
                        value={values.email}
                        onChange={handleInputChange}
                    />
                </div>
            
            </div>

            <div className="form-group input-group">
                <div className="input-group-prepend">
                        <div className="input-group-text">
                            <i className="fas fa-home"></i>
                        </div>
                    
               <input className="form-control" name="address" placeholder="Address"
                    value={values.address}
                    onChange={handleInputChange}
                />
               </div>
            </div>

            <div className="form-group">
                <input type="submit" value={props.currentId === "" ? "Save" : "Update"} className="btn btn-primary btn-block" />
            </div>

            
        </form>
        
        
    );

    
    
}

export default ContactForm;