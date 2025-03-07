import React from 'react';
import img1 from '../images/img1.PNG';
import img2 from '../images/img2.PNG';
import img3 from '../images/img3.PNG';
import img4 from '../images/img4.PNG';
import img5 from '../images/img5.PNG';
import img6 from '../images/img6.PNG';
import imgCenter from '../images/img_center.PNG';
import './section4.css'; // Assurez-vous d'ajouter votre fichier CSS pour les styles
import { useTranslation } from 'react-i18next';

const Section4 = () => {
  const { t } = useTranslation();

  return (
    <div className="section4-container">
      {/* Colonne de gauche */}
      <div className="left-column">
        <div className="advantage">
          <img src={img1} alt="Avantage 1" className="advantage-image" />
          <div className="advantage-text">
            <h3>{t('section4.left_column.0.title')}</h3>
            <p>{t('section4.left_column.0.description')}</p>
          </div>
        </div>
        <div className="advantage">
          <img src={img2} alt="Avantage 2" className="advantage-image" />
          <div className="advantage-text">
            <h3>{t('section4.left_column.1.title')}</h3>
            <p>{t('section4.left_column.1.description')}</p>
          </div>
        </div>
        <div className="advantage">
          <img src={img3} alt="Avantage 3" className="advantage-image" />
          <div className="advantage-text">
            <h3>{t('section4.left_column.2.title')}</h3>
            <p>{t('section4.left_column.2.description')}</p>
          </div>
        </div>
      </div>

      {/* Image centrale */}
      <div className="center-image">
        <img src={imgCenter} alt="Image centrale" />
      </div>

      {/* Colonne de droite */}
      <div className="right-column">
        <div className="advantage">
          <img src={img4} alt="Avantage 4" className="advantage-image" />
          <div className="advantage-text">
            <h3>{t('section4.right_column.0.title')}</h3>
            <p>{t('section4.right_column.0.description')}</p>
          </div>
        </div>
        <div className="advantage">
          <img src={img5} alt="Avantage 5" className="advantage-image" />
          <div className="advantage-text">
            <h3>{t('section4.right_column.1.title')}</h3>
            <p>{t('section4.right_column.1.description')}</p>
          </div>
        </div>
        <div className="advantage">
          <img src={img6} alt="Avantage 6" className="advantage-image" />
          <div className="advantage-text">
            <h3>{t('section4.right_column.2.title')}</h3>
            <p>{t('section4.right_column.2.description')}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
