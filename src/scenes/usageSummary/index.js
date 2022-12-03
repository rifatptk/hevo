import React from 'react';
import { Box } from '@mui/material';
import UsageHeader from '../../components/usageSummary/UsageHeader';

const UsageSummary = () => {
  return (
    <Box sx={{ p: '20px' }}>
      <UsageHeader />
    </Box>
  );
};

export default UsageSummary;
