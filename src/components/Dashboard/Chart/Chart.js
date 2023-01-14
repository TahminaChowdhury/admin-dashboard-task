import React from 'react';
import './Chart.css';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'January', Total: 1200 },
  { name: 'February', Total: 1300 },
  { name: 'March', Total: 1400 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 1700 },
  { name: 'June', Total: 1700 },
];

const Chart = () => {
  return (
    <Grid container className="chart-container">
      <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
        <Button variant="text" sx={{ color: '#474747' }}>
          Day
        </Button>
        <Button variant="text" sx={{ color: '#474747' }}>
          Week
        </Button>
        <Button variant="text" sx={{ color: '#474747' }}>
          Month
        </Button>
        <Button variant="text" sx={{ color: '#474747' }}>
          Year
        </Button>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
        <button className="simple-btn">Export Details</button>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <div style={{ width: '100%', height: '150px', marginTop: '50px' }}>
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1E2772" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="gray" />
              <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="Total"
                stroke="#8884d8"
                fillOpacity={1}
                fill="url(#total)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Grid>
    </Grid>
  );
};

export default Chart;
