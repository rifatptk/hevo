import { Box } from '@mui/material';
import React from 'react';
import OverviewTop from '../../components/overview/OverviewTop';
import PipelineActivity from '../../components/overview/PipelineActivity';

const Overview = () => {
  return (
    <Box p="20px">
      <OverviewTop />
      <PipelineActivity />
    </Box>
  );
};

export default Overview;
