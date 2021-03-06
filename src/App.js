import './App.css';
import Contacts from './components/Contacts';

import React, { useState } from "react";
import DatePicker from "react-datepicker";
 


function App() {
  return (
    <div className="row">
      <div className="col-md-10 offset-md-1">
      <Contacts></Contacts> 

      </div>
    </div>
  );
}

export default App;


    