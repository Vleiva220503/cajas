import React from "react";

export const Card = ({ title, subtitle }) => {
  return (
    <div className="caja">
      <h1 className="h1">{title}</h1>
      <p>{subtitle}</p>
      <button className="boton">Ver mas</button>
    </div>
  );
};
