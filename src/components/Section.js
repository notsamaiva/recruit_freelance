import React from 'react';
import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
const Section2 = () => {
const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: 'transparent', // Suppression du fond bleu
        color: 'black', // Couleur par défaut du texte
        padding: 4, // Espacement global pour la section
   
      }}
    >
    
      {/* Description alignée au centre avec texte noir, taille et interligne réduits */}
      <Typography
        variant="body1"
        sx={{
          color: 'black', // Couleur noire pour la description
          marginLeft: '25%', // Grand décalage à gauche
          marginRight: '20%', // Grand décalage à droite
          lineHeight: 1.5, // Espacement entre les lignes réduit
          textAlign: 'center', // Centrer la description
          fontSize: '0.89rem', // Taille réduite de la description
        }}
      >
 {t("section2b.descriptionu")}

      </Typography>
    </Box>
  );
};

export default Section2;
