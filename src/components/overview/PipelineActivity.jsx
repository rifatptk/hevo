import { Box, ClickAwayListener, IconButton, useTheme } from '@mui/material';
import React, { useState } from 'react';
import { tokens } from '../../theme';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ReplayOutlinedIcon from '@mui/icons-material/ReplayOutlined';

const filterOptions = [
  '2h',
  '12h',
  '24h',
  'Last 2 days',
  'Last 7 days',
  'Last 15 days',
  'Last 30 days',
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
    </div>
  );
};

export default PipelineActivity;
