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
import FilterListIcon from '@mui/icons-material/FilterList';
import ReplayIcon from '@mui/icons-material/Replay';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import NotificationImportantOutlinedIcon from '@mui/icons-material/NotificationImportantOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

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
    active: true,
    lastIngested: '4 hours ago',
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
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [activeFilter, setactiveFilter] = useState('24h');

  const [open, setOpen] = useState(false);
  const [filterOpen, setfilterOpen] = useState(false);
  const [activeObjectFilter, setactiveObjectFilter] = useState('All');
  const [menuopen, setmenuOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };
  const handlefilterClick = () => {
    setfilterOpen((prev) => !prev);
  };
  const handleMenuClick = () => {
    setmenuOpen((prev) => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };
  const handlefilterClickAway = () => {
    setfilterOpen(false);
  };
  const handleMenuClickAway = () => {
    setmenuOpen(false);
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
      <Box
        sx={{
          padding: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h4>Pipeline Activity</h4>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '4px',
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
          </Box>
        </Box>
      </Box>

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
            sx={{
              flex: 1,
            }}
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
                  justifyContent: 'space-between',
                  color: colors.blueAccent[500],
                }}
              >
                <NoMaxWidthTooltip
                  arrow
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
                <ArrowForwardIosIcon sx={{ color: colors.grey[500] }} />
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
          </Box>
        ))}
      </Box>

      {/* objects-header */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 2,
          alignItems: 'center',
          color: colors.grey[400],
        }}
      >
        <Box sx={{ p: '20px', pb: 0 }}>
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
          {/* filter */}
          <ClickAwayListener onClickAway={handlefilterClickAway}>
            <Box sx={{ position: 'relative' }}>
              <IconButton onClick={handlefilterClick}>
                <FilterListIcon sx={{ color: colors.grey[300] }} />
              </IconButton>
              {filterOpen ? (
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
                  {[
                    'All',
                    'Active',
                    'Inactive',
                    'Failed',
                    'Has Failed Events',
                    'Needs Mapping',
                  ].map((el, i) => (
                    <Box
                      key={i}
                      onClick={() => setactiveObjectFilter(el)}
                      sx={{
                        padding: '12px 20px',
                        cursor: 'pointer',
                        background:
                          activeObjectFilter === el
                            ? colors.blueAccent[700]
                            : '',
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

          <IconButton>
            <ReplayIcon sx={{ color: colors.grey[300] }} />
          </IconButton>
        </Box>
      </Box>

      {/* object list */}
      {objects.map((el, i) => (
        <Box
          key={i}
          sx={{
            pr: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 3,
            backgroundColor: colors.primary[400],
            borderRadius: '5px',
            marginBottom: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
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
            <Box>
              <Typography>{el.title}</Typography>
              <small>
                <span style={{ color: colors.grey[300] }}>Position: </span>
                {el.position}
              </small>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '40px',
              color: colors.blueAccent[500],
            }}
          >
            <NoMaxWidthTooltip
              arrow
              title={barChartTooltip({
                billable: 0,
                nonBillable: 243,
                timestamp: 'Nov 10th 2022 - Nov 30th 2022',
              })}
            >
              <h2 style={{ margin: 0, color: colors.grey[100] }}>
                {el.eventCount}
              </h2>
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
                <NoMaxWidthTooltip arrow key={i} title={barChartTooltip(el)}>
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

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <Box sx={{ textAlign: 'right' }}>
              <Typography sx={{ color: colors.greenAccent[500] }}>
                {el.active ? 'ACTIVE' : 'INACTIVE'}
              </Typography>
              <small>
                <span style={{ color: colors.grey[300] }}>Last Ingested: </span>
                {el.lastIngested}
              </small>
            </Box>

            <ClickAwayListener onClickAway={handleMenuClickAway}>
              <Box sx={{ position: 'relative' }}>
                <IconButton onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
                {menuopen ? (
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
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        padding: '12px 20px',
                        '&:hover': {
                          background: colors.grey[500],
                        },
                      }}
                    >
                      <BoltOutlinedIcon />
                      <div>Run Now</div>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        padding: '12px 20px',
                        '&:hover': {
                          background: colors.grey[500],
                        },
                      }}
                    >
                      <CalendarMonthOutlinedIcon />
                      <div>Change Schedule</div>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        padding: '12px 20px',
                        '&:hover': {
                          background: colors.grey[500],
                        },
                      }}
                    >
                      <NotificationImportantOutlinedIcon />
                      <div>Data Spike Alert</div>
                    </Box>

                    <Box
                      sx={{
                        borderTop: `1px solid ${colors.grey[700]}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        color: colors.redAccent[500],
                        padding: '12px 20px',
                        '&:hover': {
                          background: colors.grey[500],
                        },
                      }}
                    >
                      <DeleteOutlineOutlinedIcon />
                      <div>Delete</div>
                    </Box>
                  </Box>
                ) : null}
              </Box>
            </ClickAwayListener>
          </Box>
        </Box>
      ))}
    </div>
  );
};

export default PipelineActivity;
