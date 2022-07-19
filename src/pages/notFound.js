import React from "react";

function notFound() {
  return (
    <div
      className="w-full h-screen bg-fixed
      flex flex-col items-center justify-center
      bg-gradient-to-r 
    from-blue-200 
    to-orange-500 
    via-purple-500
      animate-gradient-x
    "
    >
      <h1 className="text-4xl font-bold  border-b-4 border-[#000]">Page not Found,</h1>
      <h1 className="text-4xl font-bold  border-b-4 border-[#000]">
       please try another page</h1>
    </div>
  );
}

export default notFound;
