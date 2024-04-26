import React from "react";
import './home.css';

interface HomeProps {
  title: string; // Título de la página de bienvenida
  subtitle: string; // Subtítulo de la página de bienvenida
  description: string; // Descripción de la página de bienvenida
  buttonText: string; // Texto para el botón de acción
  buttonLink: string; // Enlace para el botón de acción
}

const Home: React.FC<HomeProps> = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
      <div className="home-content">
        <p>{description}</p>
        <a href={buttonLink} className="home-button">
          {buttonText}
        </a>
      </div>
    </div>
  );
};

export default Home;
