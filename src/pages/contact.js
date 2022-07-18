import { useState } from "react";
import { send } from "emailjs-com";

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_tsoy336", "template_w1m6jtg", toSend, "-kSNwiZXZw7RrUzMo")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="w-full h-screen bg-fixed
      bg-gradient-to-r 
    from-blue-200 
    to-orange-500 
    via-purple-500
      animate-gradient-x
    "
    >
      <div className="w-8/12 max-w-[800px] mx-auto flex flex-col justify-center h-screen z-10">
        <p className="text-gray-700] mx-auto">Reach out to me for any enquiries</p>
        <h1 className="text-4xl mx-auto sm:text-5xl font-bold text-[#000000]">
          Arshad Khan
        </h1>
        <a href="tel:+447570007297" className="text-2xl mx-auto sm:text-3xl font-bold text-gray-900 hover:text-gray-700">
        0757 000 7297
        </a>
        <a href="mailto:arshadk88@gmail.com" className="text-2xl mx-auto sm:text-3xl font-bold text-gray-900 hover:text-gray-700 pb-4">
          arshadk88@gmail.com
        </a>
        <form
          onSubmit={onSubmit}
          className="w-full sm:w-8/12 mx-auto flex flex-col justify-center z-10"
        >
          <input
            type="text"
            name="from_name"
            placeholder="Your name"
            value={toSend.from_name}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border-2 rounded-lg border-gray-700"
          />
          <input
            type="text"
            name="reply_to"
            placeholder="Your email"
            value={toSend.reply_to}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border-2 rounded-lg border-gray-700"
          />
          <input
            type="text"
            name="message"
            placeholder="Your message"
            value={toSend.message}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border-2 rounded-lg border-gray-700"
          />

          <button
            type="submit"
            className="w-full px-4 py-2 mb-4 border-2 rounded-lg border-gray-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
