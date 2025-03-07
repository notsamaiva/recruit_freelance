import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        backgroundColor: "transparent", // Suppression du fond bleu
        color: "black", // Couleur par défaut du texte
        padding: 4, // Espacement global pour la section
        marginTop: -10,
      }}
    >
      {/* Titre avec couleur personnalisée et en gras */}
      <Typography
        variant="h4"
        sx={{
          color: "#13017c", // Couleur personnalisée pour le titre
          fontWeight: "bold", // Texte en gras
          marginLeft: "5px", // Décalage à gauche
          marginBottom: 4, // Espace sous le titre
          textAlign: "center", // Centrer le titre
        }}
      >
        {t("section2a.title")}
      </Typography>

      {/* Description alignée au centre avec texte noir, taille et interligne réduits */}
      <Typography
        variant="body1"
        sx={{
          color: "black", // Couleur noire pour la description
          marginLeft: "20%", // Grand décalage à gauche
          marginRight: "20%", // Grand décalage à droite
          lineHeight: 1.5, // Espacement entre les lignes réduit
          textAlign: "center", // Centrer la description
          fontSize: "0.89rem", // Taille réduite de la description
        }}
      >
        {t("section2a.description")}
      </Typography>
    </Box>
  );
};

export default Section2;
