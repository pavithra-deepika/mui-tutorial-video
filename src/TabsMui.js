import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { AppBar, Toolbar } from "@mui/material";

export default function TabsMui() {
  const [value, setValue] = useState();
  return (
    <div>
      <div>
        <AppBar sx={{ ml:3 , width:1000, height: 50}}>
          <Toolbar>
            <Tabs
              indicatorColor="secondary"
              textColor="secondary"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              <Tab label="first" />
              <Tab label="second " />
              <Tab label="third" />
            </Tabs>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
}
