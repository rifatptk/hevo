import { Box, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { tokens } from '../../theme';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Activities = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState(null);
  const activities = [
    {
      title: (
        <Typography>
          Mapping created for event type <strong>Apple_Daily.Sheet1</strong>in
          pipeline<span style={{ color: colors.blueAccent[500] }}>#10</span>
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Hevo',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Pipeline <span style={{ color: colors.blueAccent[500] }}>#10</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
    {
      title: (
        <Typography>
          Load schedule for destination <strong>Snowflake Destination</strong>{' '}
          is changed to{' '}
          <span style={{ color: colors.blueAccent[500] }}>every 1 day</span>{' '}
          created
        </Typography>
      ),
      time: '17 hours ago',
      by: 'By Shankara sukumaran',
      log: {
        pipeline_id: 10,
        event_name: 'Apple_Daily.Sheet1',
        action: 'CREATED',
        activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        entity_type: 'PIPELINE',
        sub_entity_type: 'MAPPING',
        activity_time: 1669807642107,
        services_activity_type: 'SCHEMA_MAPPER_STATE_CHANGE',
        severity: 'INFO',
      },
    },
  ];
  return (
    <Box
      sx={{
        my: '24px',
      }}
    >
      {activities.map((el, i) => (
        <Box
          key={i}
          sx={{
            p: '10px 16px',
            mb: '1px',
            overFlow: 'hidden',
            background: colors.primary[400],
            borderRadius:
              i === 0
                ? '8px 8px 0 0'
                : i === activities.length - 1
                ? '0 0 8px 8px'
                : '0',
            borderLeft: `4px solid ${
              i % 2 !== 0 ? colors.blueAccent[500] : colors.greenAccent[500]
            }`,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography sx={{ flex: 3 }}>{el.title}</Typography>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography>
                {el.time}
                <span style={{ color: colors.grey[400], marginLeft: 4 }}>
                  {el.by}
                </span>
              </Typography>
              <KeyboardArrowDownIcon
                onClick={() => setSelected(i !== selected ? i : null)}
                sx={{ cursor: 'pointer' }}
              />
            </Box>
          </Box>
          {/* expanded */}
          {selected === i && (
            <Box
              sx={{
                p: '10px 20px',
                mt: '10px',
                background: colors.primary[900],
                borderRadius: '8px',
              }}
            >
              <pre>{JSON.stringify(el.log, null, 2)}</pre>
            </Box>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Activities;
