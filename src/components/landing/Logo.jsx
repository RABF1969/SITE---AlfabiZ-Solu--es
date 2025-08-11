import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <img
        src="/logo.svg"
        alt="Alfabiz"
        className="h-14 w-48 object-contain"
      />
      <span className="text-2xl font-bold text-foreground"></span>
    </div>
  );
};

export default Logo;