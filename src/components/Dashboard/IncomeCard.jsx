import React from "react";

// Primereact components
import { Button } from "primereact/button";

// MUI components
import { Stack } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

// Components
import BarChartDemo from "./Chart/Bar";

const IncomeCard = () => {
  return (
    <>
      <Stack direction="row">
        <div style={{ marginLeft: 7 }}>
          <h4>Today’s Income</h4>
          <Stack
            direction="row"
            spacing={2}
            style={{ color: "#0CA750", marginTop: 20 }}
          >
            <h4>₹ 62,722</h4>
            <Button
              label="5% up"
              icon={<TrendingUpIcon />}
              className="p-button-sm"
            />
          </Stack>
          <p style={{ fontSize: 13, marginTop: "-8px" }}>From 3000 Cilents</p>
        </div>
        <div className="income_bar" style={{ width: 100 }}>
          <BarChartDemo />
        </div>
      </Stack>
    </>
  );
};

export default IncomeCard;
