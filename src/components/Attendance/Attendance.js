import React from 'react';
import './Attendance.css';
import { Box, Grid } from '@mui/material';
import AttendanceTable from './AttendanceTable';
import SettingsIcon from '@mui/icons-material/Settings';
import AttendaceTableCompo from './AttendaceTableCompo';

const Attendance = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '80px 0px',
        }}
      >
        <Box>
          <p className="heading">Attendance</p>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <button className="simple-btn">Download Report</button>
          </Box>

          <Box style={{ marginLeft: '10px' }}>
            <SettingsIcon />
          </Box>
        </Box>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <AttendaceTableCompo />
        </Grid>
      </Box>
      <Box sx={{ flexGrow: 1, marginTop: '130px' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
            <AttendanceTable />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Attendance;
