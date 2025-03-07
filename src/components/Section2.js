import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import { CheckCircleOutline, Visibility, Settings } from '@mui/icons-material';
import { useTranslation } from 'react-i18next';

const Section2 = () => {
  const { t } = useTranslation();

  const blocks = [
    {
      icon: <CheckCircleOutline />,
      title: t('section2.blocks.advantages.title'),
      description: t('section2.blocks.advantages.description'),
      color: '#64bfbe',
      highlighted: false,
    },
    {
      icon: <Visibility />,
      title: t('section2.blocks.vision.title'),
      description: t('section2.blocks.vision.description'),
      color: '#463b91',
      highlighted: true,
    },
    {
      icon: <Settings />,
      title: t('section2.blocks.howItWorks.title'),
      description: t('section2.blocks.howItWorks.description'),
      color: '#2771e2',
      highlighted: false,
    },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        textAlign: 'center',
      }}
    >
      <Typography
        variant="h4"
        sx={{
          color: '#13017c',
          fontWeight: 'bold',
          marginBottom: 4,
        }}
      >
        {t('section2.title')}
      </Typography>

      <Grid container spacing={0.5} justifyContent="center">
        {blocks.map((block, index) => (
          <Grid item xs={12} sm={8} md={4} key={index}>
            <Box
              sx={{
                textAlign: 'center',
                padding: 3,
                borderRadius: 2,
                maxWidth: 300,
                margin: '0 auto',
                boxShadow: block.highlighted
                  ? '0px 0px 30px 15px #def6e5'
                  : 'none',
                backgroundColor: 'white',
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: 80,
                  height: 80,
                  borderRadius: '50%',
                  backgroundColor: `${block.color}20`,
                  margin: '0 auto',
                }}
              >
                {React.cloneElement(block.icon, { sx: { fontSize: 40, color: block.color } })}
              </Box>
              <Typography
                variant="h6"
                sx={{
                  color: block.color,
                  fontWeight: 'bold',
                  marginTop: 2,
                  marginBottom: 1,
                }}
              >
                {block.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'black',
                  fontSize: '0.85rem',
                  lineHeight: 1.5,
                }}
              >
                {block.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Ajout du bouton "Rejoindre" */}
      <Box
        sx={{
          marginTop: 4,
          textAlign: 'center',
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#66bfbe',
            color: 'white',
            borderRadius: '20px',
            paddingX: 4,
            paddingY: 1,
            '&:hover': {
              backgroundColor: '#559fa0',
            },
          }}
        >
          {t('section2.joinButton')}
        </Button>
      </Box>
    </Box>
  );
};

export default Section2;
