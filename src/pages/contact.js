import React from "react";

function Contact() {
  return (
    <div
      className="w-full h-full bg-fixed
      bg-gradient-to-r 
    from-blue-200 
    to-orange-500 
    via-purple-500
      animate-gradient-x
    "
    >
      <div className="fixed top-[45%] left-[35%] w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
      <div className="fixed top-[35%] right-[25%] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>
      <div className="fixed bottom-[35%] left-[20%] w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob"></div>

      <h1>Contact Page</h1>
    </div>
  );
}

export default Contact;
