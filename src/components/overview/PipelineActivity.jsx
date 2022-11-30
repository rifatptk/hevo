import {
  Box,
  Checkbox,
  ClickAwayListener,
  FormControlLabel,
  FormGroup,
  IconButton,
  Tooltip,
  tooltipClasses,
  Typography,
  useTheme,
} from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../../theme';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';
import StorageIcon from '@mui/icons-material/Storage';
import NetworkCheckIcon from '@mui/icons-material/NetworkCheck';
import TransformIcon from '@mui/icons-material/Transform';
import CloudCircleOutlinedIcon from '@mui/icons-material/CloudCircleOutlined';
import SchemaOutlinedIcon from '@mui/icons-material/SchemaOutlined';
import { styled } from '@mui/material/styles';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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
];

const objects = [
  {
    title: 'Apple daily.Sheet1',
    position: 'Nov 24,2022 22:02:58 MYT',
    eventCount: 236,
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
];

const NoMaxWidthTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 'none',
  },
});

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

  const barChartTooltip = (data) => {
    return (
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <Box>
            <Typography>
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  background: colors.blueAccent[500],
                  marginRight: 8,
                }}
              ></span>
              Billable
            </Typography>
            <Typography>{data.billable}</Typography>
          </Box>
          <Box>
            <Typography>
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 8,
                  background: colors.blueAccent[500],
                  marginRight: 8,
                }}
              ></span>
              Non-Billable
            </Typography>
            <Typography>{data.nonBillable}</Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 1, alignItems: 'center', mt: 2 }}>
          <AccessTimeOutlinedIcon />
          <Typography>{data.timestamp}</Typography>
        </Box>
      </Box>
    );
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
          <Box
            key={i}
            sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}
          >
            <Box>
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
                <NoMaxWidthTooltip
                  title={barChartTooltip({
                    billable: 0,
                    nonBillable: 243,
                    timestamp: 'Nov 10th 2022 - Nov 30th 2022',
                  })}
                >
                  <h1 style={{ margin: 0 }}>{el.eventCount}</h1>
                </NoMaxWidthTooltip>
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
                    <NoMaxWidthTooltip
                      arrow
                      key={i}
                      title={barChartTooltip(el)}
                    >
                      <Box
                        sx={{
                          width: '5px',
                          height: `${el.total / 10}px`,
                          borderRadius: `${el.total ? '4px' : '0'}`,
                          minHeight: '1px',
                          background: colors.blueAccent[500],
                          cursor: 'pointer',
                          '&:hover': {
                            opacity: 0.5,
                          },
                        }}
                      ></Box>
                    </NoMaxWidthTooltip>
                  ))}
                </Box>
              </Box>
              {/* bottom */}
              <Tooltip
                arrow
                title={
                  <Typography>
                    Average Throughput <br /> (Events Per Minute)
                  </Typography>
                }
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1,
                    color: colors.grey[500],
                  }}
                >
                  <NetworkCheckIcon sx={{ fontSize: '14px' }} />
                  <small>{el.average} epm</small>
                </Box>
              </Tooltip>
            </Box>
            <ArrowForwardIosIcon sx={{ color: colors.grey[500] }} />
          </Box>
        ))}
      </Box>

      {/* objects */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          alignItems: 'center',
          color: colors.grey[400],
        }}
      >
        <Box sx={{ p: '20px' }}>
          <FormGroup>
            <FormControlLabel
              control={
                <IconButton>
                  <Checkbox
                    sx={{
                      color: colors.grey[500],
                      '&.Mui-checked': {
                        color: colors.blueAccent[500],
                      },
                    }}
                  />
                </IconButton>
              }
              label="Objects (0 of 1)"
            />
          </FormGroup>
        </Box>
        <Typography>Events Ingested</Typography>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            alignItems: 'center',
            color: colors.grey[400],
          }}
        >
          {/* search */}
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ArrowBackIosNewIcon sx={{ color: colors.grey[500] }} />
          </IconButton>
          <Typography>1 - 1 of 1</Typography>
          <IconButton>
            <ArrowForwardIosIcon sx={{ color: colors.grey[500] }} />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
};

export default PipelineActivity;
