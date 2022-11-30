import { Box, ClickAwayListener, IconButton, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../../theme';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import StorageIcon from '@mui/icons-material/Storage';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import TransformIcon from '@mui/icons-material/Transform';
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';

const filterOptions = [
  '2h',
  '12h',
  '24h',
  'Last 2 days',
  'Last 7 days',
  'Last 15 days',
  'Last 30 days',
];

const data = [
  {
    title: 'INGESTION',
    eventCount: 252,
    average: 0.18,
    icon: <StorageIcon />,
    timeline: [
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 320,
        total: 320,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 252,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
    ],
  },
  {
    title: 'TRANSFORMATIONS',
    eventCount: 252,
    average: 0.18,
    icon: <TransformIcon />,
    timeline: [
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 230,
        total: 230,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 252,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
    ],
  },
  {
    title: 'SCHEMA MAPPER',
    eventCount: 252,
    average: 0.18,
    icon: <SchemaOutlinedIcon />,
    timeline: [
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 320,
        total: 320,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 252,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
    ],
  },
  {
    title: 'LOAD',
    eventCount: 252,
    average: 0.18,
    icon: <CloudCircleOutlinedIcon />,
    timeline: [
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 320,
        total: 320,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 252,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
      {
        timestamp: 'Nov 29th 2022 6:00PM - 7:00PM',
        billable: 0,
        nonBillable: 0,
        total: 0,
      },
    ],
  },
];

const PipelineActivity = () => {
  const [activeFilter, setactiveFilter] = useState('24h');
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  return (
    <div id="pipeline-activity">
      {/* top bar */}
      <div
        style={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h4>Pipeline Activity</h4>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 4,
            }}
          >
            {filterOptions.slice(0, 3).map((el, i) => (
              <Box
                key={i}
                onClick={() => setactiveFilter(el)}
                sx={{
                  cursor: 'pointer',
                  px: 1,
                  borderRadius: '4px',
                  backgroundColor:
                    activeFilter === el ? colors.blueAccent[500] : '',
                }}
              >
                {el}
              </Box>
            ))}
            <ClickAwayListener onClickAway={handleClickAway}>
              <Box sx={{ position: 'relative' }}>
                <IconButton onClick={handleClick}>
                  <KeyboardArrowDownOutlinedIcon />
                </IconButton>
                {open ? (
                  <Box
                    sx={{
                      zIndex: 9,
                      position: 'absolute',
                      top: 40,
                      right: 0,
                      background: colors.primary[500],
                      border: `1px solid ${colors.grey[700]}`,
                      width: '180px',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      boxShadow: '0 0 5px #0005',
                    }}
                  >
                    {filterOptions.slice(3).map((el, i) => (
                      <Box
                        key={i}
                        onClick={() => setactiveFilter(el)}
                        sx={{
                          padding: '12px 20px',
                          cursor: 'pointer',
                          background:
                            activeFilter === el ? colors.blueAccent[500] : '',
                          '&:hover': {
                            background: colors.grey[500],
                          },
                        }}
                      >
                        {el}
                      </Box>
                    ))}
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
            <Box
              sx={{
                height: '20px',
                width: '1px',
                backgroundColor: colors.primary[300],
              }}
            />
            <IconButton>
              <ReplayOutlinedIcon />
            </IconButton>
          </div>
        </div>
      </div>

      {/* main panel */}
      <Box
        sx={{
          p: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 3,
          backgroundColor: colors.primary[400],
          borderRadius: '5px',
        }}
      >
        {data.map((el, i) => (
          <Box key={i}>
            {/* top */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <span>{el.icon}</span>
              <span>{el.title}</span>
            </Box>
            {/* middle */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '40px',
                color: colors.blueAccent[500],
              }}
            >
              <h1 style={{ margin: 0 }}>{el.eventCount}</h1>
              {/* chart */}
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-betweeen',
                  alignItems: 'baseline',
                  gap: '2px',
                }}
              >
                {el.timeline.map((el, i) => (
                  <Box
                    key={i}
                    sx={{
                      width: '5px',
                      height: `${el.total / 10}px`,
                      borderRadius: `${el.total ? '4px' : '0'}`,
                      minHeight: '1px',
                      background: colors.blueAccent[500],
                    }}
                  ></Box>
                ))}
              </Box>
            </Box>
            {/* bottom */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: colors.grey[500],
              }}
            >
              <NetworkCheckIcon />
              <small>{el.average} epm</small>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default PipelineActivity;
