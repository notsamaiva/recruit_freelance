import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Section2 = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: 'transparent',
        color: 'black',
        padding: 4,
      }}
    >
      {/* Titre traduit depuis section2b */}
      <Typography
        variant="h4"
        sx={{
          color: '#13017c',
          fontWeight: 'bold',
          marginLeft: '5px',
          marginBottom: 4,
          textAlign: 'center',
        }}
      >
        {t('section2b.title')}
      </Typography>

      {/* Description traduite depuis section2b */}
      <Typography
        variant="body1"
        sx={{
          color: 'black',
          marginLeft: '20%',
          marginRight: '20%',
          lineHeight: 1.5,
          textAlign: 'center',
          fontSize: '0.89rem',
        }}
      >
        {t('section2b.description')}
      </Typography>
    </Box>
  );
};

export default Section2;
