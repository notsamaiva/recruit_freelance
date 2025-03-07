import React from "react";

import logo from "../images/logo1.png"; // Importer le logo
import rs from "../images/rs.PNG";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#13017c", color: "#fff", padding: "20px 40px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        {/* Section gauche */}
        <div style={{ maxWidth: "40%" }}>
          <img src={logo} alt="Logo" style={{ width: "120px", marginBottom: "10px", marginLeft: "-310px"}} />
          <p style={{ fontSize: "14px", textAlign: "left" }}>
            Bienvenue sur FlyPool, votre partenaire de confiance pour tout service de covoiturage aéroportuaires.
          </p>
        </div>
      
        {/* Section droite */}
        <div style={{ textAlign: "right" }}>
          <p style={{ marginBottom: "10px" }}>info@flypool.me</p>
          <p style={{ marginBottom: "20px" }}>+33 7 81 42 95 52</p>
          <img src={rs} alt="Réseaux sociaux" style={{ width: "100px" }} />
        </div>
      </div>

      {/* Divider */}
      <hr style={{ border: "none", height: "1px", backgroundColor: "#fff", margin: "20px 0" }} />

      {/* Copyright */}
      <div style={{ textAlign: "center", fontSize: "12px" }}>
        © {new Date().getFullYear()} FlyPool. Tous droits réservés.
      </div>
    </div>
  );
};

export default Footer;
