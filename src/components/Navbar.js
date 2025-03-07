import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import logo from "../images/logo.png"; // Importer le logo

const Navbar = () => {
  const { t } = useTranslation(); // Hook pour accéder aux traductions
  const [languageMenuAnchor, setLanguageMenuAnchor] = useState(null);

  // Ouvrir le menu des langues
  const handleLanguageMenuOpen = (event) => {
    setLanguageMenuAnchor(event.currentTarget);
  };

  // Changer de langue
  const handleLanguageChange = (language) => {
    i18next.changeLanguage(language); // Changer la langue
    setLanguageMenuAnchor(null);
  };

  return (
    <Box
      component="nav"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      padding="20px"
      marginLeft="20px"
    >
      {/* Logo Section */}
      <Box display="flex" alignItems="center">
        <img
          src={logo}
          alt="Flypool Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
      </Box>

      {/* Menu Items */}
      <Box display="flex" alignItems="center" gap="30px">
        <Typography
          variant="h6"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#13017c",
            cursor: "pointer",
          }}
        >
          {t("navbar.about")} {/* Traduction */}
        </Typography>
        <Typography
          variant="h6"
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#13017c",
            cursor: "pointer",
          }}
        >
          {t("navbar.role")} {/* Traduction */}
        </Typography>
      </Box>

      {/* Bouton Embarquer */}
      <Button
        variant="contained"
        style={{
          backgroundColor: "#66bfbe",
          color: "#ffffff",
          padding: "10px 20px",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "10px",
        }}
      >
        {t("navbar.embark")} {/* Traduction */}
      </Button>

      {/* Sélecteur de langue */}
      <Button
        variant="text"
        onClick={handleLanguageMenuOpen}
        sx={{
          color: "#000",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
        }}
      >
        {t("navbar.language")} {/* Traduction */}
        <ArrowDropDownIcon sx={{ marginLeft: "5px" }} />
      </Button>
      <Menu
        anchorEl={languageMenuAnchor}
        open={Boolean(languageMenuAnchor)}
        onClose={() => setLanguageMenuAnchor(null)}
      >
        <MenuItem onClick={() => handleLanguageChange("en")}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("fr")}>Français</MenuItem>
        <MenuItem onClick={() => handleLanguageChange("es")}>Español</MenuItem>
      </Menu>
    </Box>
  );
};

export default Navbar;
