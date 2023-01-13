import React from 'react';
import './Widget.css'
import { Avatar, AvatarGroup, Grid } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';

import img5 from '../../../images/image 5.png';
import img6 from '../../../images/image 6.png';
import img7 from '../../../images/image 7.png';
import img8 from '../../../images/image 8.png';
import img9 from '../../../images/image 9.png';
import img13 from '../../../images/image 13.png';

const Widget = () => {
  return (
    <>
      <p style={{ fontSize: '14px', fontWeight: 700, margin: '20px 0px' }}>
        Company Status
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <div className="widget-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>
                <GroupsIcon sx={{ width: '13px', height: '13px' }} />
              </span>
              <span style={{ fontSize: '12px', paddingLeft: '10px' }}>
                Total Employee
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px 0px',
              }}
            >
              <div>
                <p className="total">450</p>
              </div>
              <div>
                {' '}
                <button className="simple-btn">View All</button>
              </div>
            </div>

            <hr style={{ border: '1px solid #E6E6E6' }} />
            {/* Avatar div */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '20px 0px',
              }}
            >
              <AvatarGroup max={6}>
                <Avatar alt="" src={img5} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img6} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img7} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img8} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img9} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img13} sx={{ width: 30, height: 30 }} />
              </AvatarGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <div className="widget-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>
                <GroupsIcon sx={{ width: '13px', height: '13px' }} />
              </span>
              <span style={{ fontSize: '12px', paddingLeft: '10px' }}>
                Attend Today
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px 0px',
              }}
            >
              <div>
                <p className="total">420</p>
              </div>
              <div>
                {' '}
                <button className="simple-btn">View All</button>
              </div>
            </div>

            <hr style={{ border: '1px solid #E6E6E6' }} />
            {/* Avatar div */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '20px 0px',
              }}
            >
              <AvatarGroup max={6}>
                <Avatar alt="" src={img5} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img6} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img7} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img8} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img9} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img13} sx={{ width: 30, height: 30 }} />
              </AvatarGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <div className="widget-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>
                <GroupsIcon sx={{ width: '13px', height: '13px' }} />
              </span>
              <span style={{ fontSize: '12px', paddingLeft: '10px' }}>
                Employees on Leave
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px 0px',
              }}
            >
              <div>
                <p className="total">15</p>
              </div>
              <div>
                {' '}
                <button className="simple-btn">View All</button>
              </div>
            </div>

            <hr style={{ border: '1px solid #E6E6E6' }} />
            {/* Avatar div */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '20px 0px',
              }}
            >
              <AvatarGroup max={6}>
                <Avatar alt="" src={img5} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img6} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img7} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img8} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img9} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img13} sx={{ width: 30, height: 30 }} />
              </AvatarGroup>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
          <div className="widget-container">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span>
                <GroupsIcon sx={{ width: '13px', height: '13px' }} />
              </span>
              <span style={{ fontSize: '12px', paddingLeft: '10px' }}>
                New Expense Request
              </span>
            </div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '30px 0px',
              }}
            >
              <div>
                <p className="total">5</p>
              </div>
              <div>
                {' '}
                <button className="simple-btn">View All</button>
              </div>
            </div>

            <hr style={{ border: '1px solid #E6E6E6' }} />
            {/* Avatar div */}
            <div
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '20px 0px',
              }}
            >
              <AvatarGroup max={6}>
                <Avatar alt="" src={img5} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img6} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img7} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img8} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img9} sx={{ width: 30, height: 30 }} />
                <Avatar alt="" src={img13} sx={{ width: 30, height: 30 }} />
              </AvatarGroup>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Widget;
