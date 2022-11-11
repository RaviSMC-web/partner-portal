import React from 'react';

// Primereact Components
import { Card } from "primereact/card";

//Materaiel components
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { Stack } from '@mui/material';
import KnobDemo from './Gauge'


const Cards = ({ title, subtitle, client }) => {
  return (
   <>
   <div className='top_card'>
    <Card>
    <Stack direction='row' spacing={1} style={{marginTop: '-20px'}}>
        <div>
        <h4>{title}</h4>
        <p style={{fontSize: 13, marginTop: '-13px'}}>{subtitle}</p>
        <Stack direction='row' spacing={1} style={{fontSize: 12, color: '#0CA750', marginTop: 20}}>
        <TrendingUpIcon style={{fontSize: 18}} /><p >{client}</p>
        </Stack>
        </div>
        <div style={{marginTop:25}}>
        <KnobDemo />
        </div>
        </Stack>
        <p className="btn_view_details">View Details</p>
              </Card>
              </div>
   </>
  )
}

export default Cards