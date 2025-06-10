import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <span className="ml-2 text-xl font-bold">
      <img src="/images/icon.png" alt="AI" className="inline-block w-20 h-20" />
      </span>
    </div>
  );
};

export default Logo;
