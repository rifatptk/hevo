import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const UsageTable = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <>
      {/* table header */}
      <Box sx={{ p: '20px' }}>
        {/* table header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ flex: 7 }}>
            <Typography sx={{ color: colors.grey[500] }}>Pipelines</Typography>
            <strong>0 active out of 2</strong>
          </Box>
          <Box sx={{ flex: 2 }}>
            <Typography sx={{ color: colors.grey[500] }}>Today</Typography>
            <strong>0</strong>
          </Box>
          <Box sx={{ flex: 2 }}>
            <Typography sx={{ color: colors.grey[500] }}>
              Nov 03 - dec 02 &darr;
            </Typography>
            <strong>4.39K</strong>
          </Box>
          <Box sx={{ flex: 1 }} />
        </Box>
      </Box>

      {/* table main */}
      <Box
        p="20px"
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          backgroundColor: colors.primary[400],
          borderRadius: '5px',
        }}
      >
        <Box
          sx={{
            flex: 7,
            display: 'flex',
            alignItems: 'center',
            gap: 4,
          }}
        >
          <Box
            sx={{
              p: '4px',
              backgroundColor: colors.grey[700],
              borderRadius: '4px',
            }}
          >
            ASIA
          </Box>
          <Box>#1</Box>
          <Box
            sx={{
              height: '20px',
              width: '1px',
              backgroundColor: colors.primary[300],
            }}
          />

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                REST API Source
              </Typography>

              <Box>REST API</Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div
                style={{
                  width: 4,
                  height: 4,
                  background: colors.greenAccent[500],
                  borderRadius: '50%',
                }}
              ></div>
              <div
                style={{
                  width: 4,
                  height: 4,
                  background: colors.greenAccent[500],
                  borderRadius: '50%',
                }}
              ></div>
              <ArrowForwardRoundedIcon
                stroke="10px"
                fontSize="large"
                sx={{
                  color: colors.greenAccent[500],
                  fontWeight: 'bold',
                  m: 0,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Typography sx={{ fontSize: 16, fontWeight: 600 }}>
                REST API Source
              </Typography>

              <Box>REST API</Box>
            </Box>
          </Box>
        </Box>

        <Box sx={{ flex: 2 }}>0</Box>
        <Box sx={{ flex: 2 }}>3.13K</Box>

        <Box sx={{ flex: 1, ml: 'auto' }}>
          <Typography
            sx={{
              fontWeight: 600,
              color: colors.redAccent[500],
              px: 1,
              py: '4px',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            DELETED
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default UsageTable;
