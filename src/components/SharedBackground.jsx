import React from "react";

const SharedBackground = ({ children, backgroundImage }) => {
  return (
    <div
      className="relative bg-cover bg-center min-h-screen"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Optional overlay for better text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Children components like Navbar and Home Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SharedBackground;
