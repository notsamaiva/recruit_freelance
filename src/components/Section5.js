import React, { useState } from "react";
import img3 from "../images/form.PNG";

const Section5 = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    facebook: "",
    linkedin: "",
    country: "",
    city: "",
    airport: "",
    cv: null,
  });
  const [submissionStatus, setSubmissionStatus] = useState(null); // Track submission status

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create a FormData object to send data to API
      const form = new FormData();
      for (const [key, value] of Object.entries(formData)) {
        form.append(key, value);
      }

      // Send the form data to the backend (replace with your API URL)
      const response = await fetch("http://localhost/api/send-email.php", {
        method: "POST",
        body: form,
      });

      if (response.ok) {
        setSubmissionStatus("success"); // On success
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          facebook: "",
          linkedin: "",
          country: "",
          city: "",
          airport: "",
          cv: null,
        }); // Reset form data
        setStep(1); // Reset to first step
      } else {
        setSubmissionStatus("failure"); // On failure
      }
    } catch (error) {
      setSubmissionStatus("failure"); // Handle error case
    }
  };

  return (
    <div style={styles.container}>
      {/* Formulaire Multistep */}
      <div style={styles.formWrapper}>
        {step === 1 && (
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Nom"
                style={styles.input}
              />
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Prénom"
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adresse mail"
                style={styles.input}
              />
              <div style={styles.phoneGroup}>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Téléphone"
                  style={{ ...styles.input, marginLeft: 0 }}
                />
              </div>
            </div>
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="Lien du profil Facebook"
                style={styles.input}
              />
              <input
                type="text"
                name="linkedin"
                value={formData.linkedin}
                onChange={handleChange}
                placeholder="Lien du profil LinkedIn"
                style={styles.input}
              />
            </div>
            {/* Bouton CONTINUER aligné */}
            <div style={styles.buttonWrapper}>
              <button
                type="button"
                style={styles.button}
                onClick={handleNext}
              >
                CONTINUER
              </button>
            </div>
          </form>
        )}

        {step === 2 && (
          <form
            style={styles.form}
            encType="multipart/form-data"
            method="POST"
            onSubmit={handleSubmit}
          >
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Pays"
                style={styles.input}
              />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Ville"
                style={styles.input}
              />
            </div>
            <div style={styles.inputGroup}>
              <input
                type="text"
                name="airport"
                value={formData.airport}
                onChange={handleChange}
                placeholder="Aéroports"
                style={{ ...styles.input, marginRight: 0 }}
              />
            </div>
            <div style={styles.inputGroup}>
              <label style={{ marginRight: "10px" }}>Importez votre CV :</label>
              <input
                type="file"
                name="cv"
                onChange={handleChange}
                accept=".pdf"
                style={{ ...styles.input, border: "none" }}
              />
            </div>
            <div style={styles.buttonWrapper}>
              <button
                type="button"
                style={{ ...styles.button, marginRight: "10px" }}
                onClick={handleBack}
              >
                RETOUR
              </button>
              <button type="submit" style={styles.button}>
                SOUMETTRE
              </button>
            </div>
          </form>
        )}

        {/* Show notification based on submission status */}
        {submissionStatus && (
          <div
            style={{
              ...styles.notification,
              backgroundColor: submissionStatus === "success" ? "#4CAF50" : "#F44336",
            }}
          >
            {submissionStatus === "success"
              ? "Candidature envoyée avec succès !"
              : "Une erreur s'est produite lors de l'envoi de votre candidature."}
          </div>
        )}
      </div>

      {/* Image */}
      <div style={styles.imageWrapper}>
        <img src={img3} alt="Form" style={styles.image} />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#ffffff", // Arrière-plan de la page en blanc
    minHeight: "100vh",
    marginTop: "-50px",
  },
  formWrapper: {
    flex: 1,
    maxWidth: "50%",
    marginLeft: "50px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    width: "100%",
    maxWidth: "400px",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "15px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    outline: "none",
    backgroundColor: "#f0f0f0", // Arrière-plan des inputs en gris
    marginRight: "10px",
  },
  phoneGroup: {
    display: "flex",
    alignItems: "center",
    flex: 1,
  },
  buttonWrapper: {
    display: "flex",
    justifyContent: "flex-end", // Aligne le bouton sur la deuxième colonne
    width: "100%",
    marginTop: "20px", // Espace au-dessus du bouton
  },
  button: {
    width: "48%", // Même largeur que les champs de la deuxième colonne
    padding: "10px",
    borderRadius: "20px",
    backgroundColor: "#13017c",
    color: "#fff",
    border: "none",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    textAlign: "center",
  },
  imageWrapper: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    objectFit: "contain",
  },
  notification: {
    marginTop: "20px",
    padding: "10px",
    borderRadius: "5px",
    color: "#fff",
    textAlign: "center",
    width: "100%",
    fontSize: "16px",
  },
};

export default Section5;
