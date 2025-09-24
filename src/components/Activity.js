import React from "react";
import './styles/activity.css';

const Activity = ({ backgroundImage, title, content, backgroundColor }) => {
  return (
    <div className="activity">
      <div
        className="activity-background"
        style={{
          backgroundImage: backgroundImage
            ? `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${backgroundImage})`
            : undefined,
          backgroundColor: backgroundColor || 'black',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <div className="activity-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Activity;