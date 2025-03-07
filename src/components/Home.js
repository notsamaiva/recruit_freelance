import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import homeImage from "../images/home.PNG";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="40px"
      style={{
        height: "100vh",
        marginTop: "-80px", // Ajout d'une marge supérieure
      }}
    >
      {/* Section de gauche : Texte */}
      <Box maxWidth="450px" textAlign="left">
        {/* Titre */}
        <Typography
          variant="h4"
          style={{
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: "20px",
          }}
        >
          {t("home.become_ambassador")}{" "}
          <span style={{ color: "#13017c" }}>flypool</span>
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          style={{
            fontSize: "18px",
            lineHeight: "1.6",
            marginBottom: "30px",
          }}
        >
          {t("home.join_team")}{" "}
          <span
            style={{
              color: "#13017c",
              fontWeight: "bold",
            }}
          >
            {t("home.eco_carpooling")}
          </span>
          .
        </Typography>

        {/* Bouton Rejoindre */}
        <Box display="flex" alignItems="center" gap="20px">
          <Button
            variant="contained"
            style={{
              backgroundColor: "#13017c",
              color: "#ffffff",
              fontWeight: "bold",
              padding: "10px 20px",
              fontSize: "16px",
              borderRadius: "25px",
            }}
          >
            {t("home.join_adventure")}
          </Button>

          {/* Icône pour la vidéo */}
          <IconButton
            onClick={handleOpen}
            style={{
              backgroundColor: "#ed1e79",
              color: "#ffffff",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
            }}
          >
            <PlayCircleIcon style={{ fontSize: "32px" }} />
          </IconButton>
        </Box>
      </Box>

      {/* Section de droite : Image */}
      <Box>
        <img
          src={homeImage}
          alt={t("home.home_illustration")}
          style={{
            marginRight: "100px",
            maxHeight: "80%",
            maxWidth: "300px",
            objectFit: "contain",
          }}
        />
      </Box>

      {/* Dialog pour la vidéo */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <Box position="relative" padding="0">
          <iframe
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/T681K1vm7_o"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>
      </Dialog>
    </Box>
  );
};

export default Home;
