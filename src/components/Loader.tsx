// components/Loader.tsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-2 animate-pulse">
          Julius Olajumoke
        </h2>
        <p className="text-lg animate-bounce">
          Intersection between technology and humanity
        </p>
      </div>
    </div>
  );
};

export default Loader;
