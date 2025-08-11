import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="\public\logo.svg"
        alt="Logo Alfabiz"
        className="h-16 w-32 object-contain"
      />
      <span className="text-2xl font-bold text-foreground"></span>
    </div>
  );
};

export default Logo;