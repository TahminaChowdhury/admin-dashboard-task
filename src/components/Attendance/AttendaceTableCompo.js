import React from 'react';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import SelectField from './SelectField';

const AttendaceTableCompo = () => {
  return (
    <>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <TextField
          id="date"
          type="date"
          defaultValue="2017-05-24"
          sx={{ width: 220 }}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Department" />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Attendance" />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Present" />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Check In" />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Location" />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Designation" />
      </Grid>
      <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
        <SelectField value="Department" />
      </Grid>
    </>
  );
};

export default AttendaceTableCompo;
