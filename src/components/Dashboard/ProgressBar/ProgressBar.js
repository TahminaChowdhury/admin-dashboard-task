import React from 'react';
import './ProgressBar.css';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import { Box, Typography } from '@mui/material';

// Line progress bar
const BorderLinearProgress = styled(LinearProgress)(() => ({
  width: 165,
  height: 28,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: ' rgba(0, 0, 0, 0.05)',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#C6C7F8',
  },
}));

const ProgressBar = () => {
  return (
    <Box className="task-summ-container">
      <p>Total Task</p>
      <h3>112</h3>
      {/* Completed */}
      <Box margin="10px 0px">
        <p>Completed</p>
        <BorderLinearProgress variant="determinate" value={50} />
      </Box>

      <Box margin="10px 0px">
        <p>In Progress</p>
        <BorderLinearProgress variant="determinate" value={15} />
      </Box>

      <Box margin="10px 0px">
        <p>Pending</p>
        <BorderLinearProgress variant="determinate" value={30} />
      </Box>
    </Box>
  );
};

export default ProgressBar;
