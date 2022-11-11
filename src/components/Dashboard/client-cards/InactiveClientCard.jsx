import React, { useState, useEffect } from "react";
import axios from 'axios';

//Materaiel components
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Stack } from "@mui/material";

// Primereact Components
import { Dropdown } from "primereact/dropdown";
import { Card } from "primereact/card";
import { Knob } from 'primereact/knob';



const InactiveClientCard = ({ clientData }) => {
  const [error, setError] = useState('');
  const URL = process.env.REACT_APP_BASE_URL;
  const [selectValue, setSelectValue] = useState('1');

  const valueSelect = [
    { label: "All", value: "1" },
    { label: "Month", value: "2" },
    { label: "Week", value: "3" },
    { label: "Today", value: "4" },
  ]; 

  return (
    <>
    
          
              <Card style={{background: '#ffffff', height:200, marginBottom: 20}}>
                <Stack
                  direction="row"
                  spacing={3}
                  style={{ marginTop: "-20px" }}
                >
                  <div>
                    <h5>Inactive Clients</h5>
                    <p style={{ fontSize: 13, marginTop: "-13px" }}>
                    No. of inactive clients
                    </p>
                    <Stack
                      direction="row"
                      spacing={1}
                      style={{ fontSize: 12, color: "#0CA750", marginTop: 20 }}
                    >
                      <TrendingUpIcon style={{ fontSize: 18 }} />
                      <p>102 Clients Today</p>
                    </Stack>
                  </div>
                  <div className="drop_down">
                   <Dropdown
                      value={selectValue}
                      options={valueSelect}
                      onChange={(e) => setSelectValue(e.value)}
                      placeholder={selectValue}
                      style={{ marginBottom: 10 }}
                    />  
                    <div className="card">
                <div className="grid formgrid text-center">
                    <div className="field col-12 md:col-4">
                        
                        <Knob value={clientData && selectValue == 1 ? clientData[0].inactiveclient : clientData && selectValue ==2 ? clientData[1].inactiveclient: clientData && selectValue == 3 ? clientData[2].inactiveclient : clientData && selectValue == 4 ? clientData[3].inactiveclient: '0'  } strokeWidth={5} 
                        // onChange={(e) => setValue7(e.value)}
                        />
                    </div>
                   
                </div>
            </div>
                  </div>
                                      
               
                 
                </Stack>
                <p className="btn_view_details">View Details</p>
              </Card>
            
          </>
  );
};

export default InactiveClientCard;
