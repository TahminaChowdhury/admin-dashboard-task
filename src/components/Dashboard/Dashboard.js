import { Box, Grid } from '@mui/material';
import React from 'react';
import Chart from './Chart/Chart';
import './Dashboard.css';
import ProgressBar from './ProgressBar/ProgressBar';
import Widget from './Widget/Widget';

const Dashboard = () => {
  return (
    <Box>
      <p className="heading">Dashboard</p>

      {/* Company status widgets */}
      <Box sx={{ flexGrow: 1 }}>
        <Widget />
      </Box>

      {/* Charts */}
      <Box marginTop="130px">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            <p
              style={{ fontSize: '14px', fontWeight: 700, margin: '20px 0px' }}
            >
              Expense Report
            </p>
            <Chart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
            {/* Task Summary */}
            <p
              style={{ fontSize: '14px', fontWeight: 700, margin: '20px 0px' }}
            >
              Task Summary
            </p>
            <ProgressBar />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
