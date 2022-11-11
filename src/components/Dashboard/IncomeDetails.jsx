import React, { useState } from "react";

// Primereact components
import { Dropdown } from "primereact/dropdown";
import { Divider } from "primereact/divider";
import { Card } from "primereact/card";

// MUI components
import { Stack } from "@mui/material";

// Components
import IncomeCard from "./IncomeCard";
import IncomeCircularBar from "./Chart/IncomeCircularBar";
import IncomeBar from "./Chart/IncomeBar";

const IncomeDetails = () => {
  const [selectValue, setSelectValue] = useState("week");

  const valueSelect = [
    { label: "Week", value: "Week" },
    { label: "Today", value: "Today" },
    { label: "Yesterday", value: "Yesterday" },
  ];
  return (
    <>
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
      <div className="grid m-2">
        <div className="col-12 md:col-6 lg:col-8 sm:col-12 xs:col-12">
          <Card >
            <Stack direction={"row"} justifyContent="space-between">
              <div className="total_income">
                <h4>₹1,62,722</h4>
                <p style={{ fontSize: 13, marginTop: "-8px" }}>
                  Toatal income generated{" "}
                </p>
              </div>
              <div className="drop_down_income_sec">
                <Dropdown
                  value={selectValue}
                  options={valueSelect}
                  onChange={(e) => setSelectValue(e.value)}
                  placeholder={selectValue}
                  style={{ marginRight: 30 }}
                />
              </div>
            </Stack>
            <div className="p-4 total_income_bar">
              <IncomeBar />
            </div>
          </Card>
        </div>

        <div className="col-12 md:col-6 lg:col-4 sm:col-12 xs:col-12">
          <Card style={{height: 471}}>
            <h4>Analytics</h4>
            <p className="rrr">₹1,62,722 <br /> <span style={{fontSize: 12, fontWeight: 'normal', marginLeft: '-5px'}}>Over all Income</span> </p>
            <div className="analytics_chart">
              <IncomeCircularBar />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default IncomeDetails;
