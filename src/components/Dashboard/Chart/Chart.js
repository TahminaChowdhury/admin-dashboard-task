import React from 'react';
import './Chart.css';
import Button from '@mui/material/Button';

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
  { name: 'February', Total: 2100 },
  { name: 'March', Total: 800 },
  { name: 'April', Total: 1600 },
  { name: 'May', Total: 900 },
  { name: 'June', Total: 1700 },
  { name: 'July', Total: 800 },
  { name: 'August', Total: 1500 },
  { name: 'September', Total: 1900 },
  { name: 'October', Total: 100 },
  { name: 'November', Total: 1700 },
  { name: 'October', Total: 1200 },
];

const Chart = () => {
  return (
    <div className="chart-container">
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
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
        </div>
        <div>
          <button className="simple-btn">Export Details</button>
        </div>
      </div>
      <div style={{ width: '100%', height: '200px', marginTop: '50px' }}>
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
    </div>
  );
};

export default Chart;
