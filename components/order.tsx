import React from "react";

interface TitleProps {
  title: string;
  subtitle: string;
}

const TitleContainer: React.FC<TitleProps> = ({ title, subtitle }) => (
  <div className="text-center mx-auto">
    <h2 className="text-5xl font-medium">{title}</h2>
    <p className="text-sm m-5">{subtitle}</p>
  </div>
);

export default TitleContainer;
