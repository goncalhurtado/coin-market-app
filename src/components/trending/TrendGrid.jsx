import React from "react";
import CardTrend from "./CardTrend";

const TrendGrid = () => {
  return (
    <>
      <h5>Temas en tendencia:</h5>
      <div className="row">
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
        <CardTrend />
      </div>
    </>
  );
};

export default TrendGrid;
