import React from "react";

export const Error = ({children}) => {
  return (
    <div className='bg-red-800 text-white text-center mb-3 p-3 uppercase font-bold rounded-md'>
      {children}
    </div>
  );
};
