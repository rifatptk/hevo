import { Box, Tooltip, Typography, useTheme } from '@mui/material';
import React from 'react';
import { tokens } from '../../theme';
import NorthIcon from '@mui/icons-material/North';

const Overview = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box px="20px">
      <Box
        p="20px"
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          backgroundColor: colors.primary[400],
          borderRadius: '5px',
        }}
      >
        <Tooltip title="Click to assign a higher priority" place="right">
          <NorthIcon
            color={colors.primary[400]}
            sx={{
              p: '4px',
              backgroundColor: colors.primary[300],
              borderRadius: '4px',
            }}
          />
        </Tooltip>
        <Typography>#1</Typography>
        <Box
          sx={{
            height: '20px',
            width: '1px',
            backgroundColor: colors.primary[300],
          }}
        />
      </Box>
    </Box>
  );
};

export default Overview;
