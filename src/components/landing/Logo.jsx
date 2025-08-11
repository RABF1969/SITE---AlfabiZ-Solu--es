import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <a href="/">
        <img
          src="/logo.svg"
          alt="Alfabiz"
          className="h-12 w-42 object-contain"
        />
      </a>
      <span className="text-2xl font-bold text-foreground"></span>
    </div>
  );
};

export default Logo;