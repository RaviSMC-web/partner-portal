import React from "react";
import Cards from "./Cards";
import axios from 'axios';


// External CSS
import "./Dashboard.css";
import IncomeDetails from "./IncomeDetails";
import BottomCards from "./BottomCards";
import ProductSlider from "../common-components/carousal/SlickSlider";
import { useState } from "react";
import { useEffect } from "react";

const Dasboard = () => {
  const [clientData, setClientData] = useState('');
  

  const [error, setError] = useState('');
  const URL = process.env.REACT_APP_BASE_URL;

  const allClients = async() => {
    try {
      const response = await axios.post(`${URL}/clientDetails`, {group3:'AGAR03'});
      console.log(response);
      setClientData(response.data.data) 
    } catch (error) {
      setError(error.response.data.data.message);
    }
  }

  useEffect(()=> {
    allClients();
  }, []);

  console.log(clientData);

  return (
    <>
      <div className="top_bg_col">
        <div className="">
        <div className="grid p-4">
          <div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
            <Cards title={'Client at Risk'}  subtitle={'Total Clients risk you have'} client={'20 Clients Today'} />
          </div>
          <div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
            <Cards title={'Growth Opportunities'} subtitle={'Total Opportunities you have'} client={'13 Today'} />
          </div>
          <div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
            <Cards title={'Follow up of the Day'} subtitle={'Total Clients'} client={'21 Today'} />
          </div>
        </div>
        <div className="slider_dash">
        <h3>Client Details</h3>   
        <ProductSlider 
        clientData={clientData} 
        />
        </div>
        <div>
          <IncomeDetails />
        </div>
        {/* <Divider /> */}
        <div>
        <BottomCards />
        </div>
        </div>
      </div>
    </>
  );
};

export default Dasboard;
