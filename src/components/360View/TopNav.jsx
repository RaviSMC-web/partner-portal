import React, { useState } from 'react';
import './tab360view.css'

// Components
import IncomeCard from "../Dashboard/IncomeCard";

// Primereact components
import { TabView, TabPanel } from 'primereact/tabview';
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";

// MUI components
import { Stack } from "@mui/material";
import { SegmentDetails } from './business-summary/SegmentDetails';
import { DetailsView } from './business-summary/DetailsView';
import ClientSummary from './clientSummary/ClientSummary';
import RecommendationSummary from './recommendation-summary/RecommendationSummary';
import InvestmentSummary from './investment-summary/InvestmentSummary';


const TopNav = () => {
  const [selectValue, setSelectValue] = useState("week");

  const valueSelect = [
    { label: "Week", value: "Week" },
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
  ];

    // const items = [
    //     {
    //       title: "New KYC Today",
    //       subtitle: "No. of KYC received Today",
    //       client: "12 Clients Today",
    //     },
    //     {
    //       title: "Received Till Yesterday",
    //       subtitle: "No. of KYC received till Yesterday",
    //       client: "12 Clients Today",
    //     },
    //     {
    //       title: "Pending",
    //       subtitle: "No. of KYC in Pending",
    //       client: "15 Clients Today",
    //     },
    //     {
    //         title: "New KYC Today",
    //         subtitle: "No. of KYC received Today",
    //         client: "12 Clients Today",
    //       },
    //       {
    //         title: "Received Till Yesterday",
    //         subtitle: "No. of KYC received till Yesterday",
    //         client: "12 Clients Today",
    //       },
    //       {
    //         title: "Pending",
    //         subtitle: "No. of KYC in Pending",
    //         client: "15 Clients Today",
    //       },
    //   ];

  return (
    <>
    <div className="top_bg_col_nav">
    <TabView>
                    <TabPanel header="Business Summary" style={{borderRadius: 10}}>
                        <div className='business_summery_style'>
                    <TabView>
                    <TabPanel header="Segmment">
                        <SegmentDetails />
                    </TabPanel>
                    <TabPanel header="Details">
                       <DetailsView />
                    </TabPanel>
                </TabView>
                </div>
                    </TabPanel>
                    <TabPanel header="Client Summary">
                        
                        <ClientSummary />
                        
                       
                    </TabPanel>
                    <TabPanel header="Recomendation Summary">
                        <RecommendationSummary />
                    </TabPanel>
                    <TabPanel header="Investment Summary">
                       <InvestmentSummary />
                    </TabPanel>
                    <TabPanel header="Income Details">
                    <Stack direction={"row"} justifyContent="space-between">
        <h3 style={{ marginLeft: 20 }}>Income Details</h3>
        <div className="drop_down_income">
          <Dropdown
            value={selectValue}
            options={valueSelect}
            onChange={(e) => setSelectValue(e.value)}
            placeholder={selectValue}
            style={{ marginRight: 30 }}
          />
        </div>
      </Stack>

      <div className="grid p-4" style={{ marginTop: "-50px" }}>
        <Divider />
        <div className="col-12 md:col-6 lg:col-4">
          <IncomeCard />
        </div>
        <Divider layout="vertical" />
        <div className="col-12 md:col-6 lg:col-4">
          <IncomeCard />
        </div>
        <Divider layout="vertical" />
        <div className="col-12 md:col-6 lg:col-4">
          <IncomeCard />
        </div>
        <Divider />
      </div>
                    </TabPanel>
                   
                </TabView>
    </div>
    </>
  )
}

export default TopNav