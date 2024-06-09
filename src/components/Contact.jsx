const Contact = () => {
  return (
    <div>
      <h2 className="text-3xl text-center m-2 p-2">Contact Page</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.43602408006!2d75.62574481854843!3d26.885421390638445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1717853102569!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="w-full">
        <form
          action="https://formspree.io/f/xwkggebd"
          method="POST"
          className="cursor-pointer object-center grid grid-rows-2 gap-4  mx-[34rem] m-4 w-80" 
        >
          <input
            type="text"
            placeholder="Enter your name"
            className="border border-black rounded-lg pl-2 col-span-1 p-3"
            required
            autoComplete="off"
          ></input>
          <input
            type="email"
            placeholder="Enter email"
            className="border border-black rounded-lg pl-2 col-span-1 p-3"
            required
            autoComplete="off"
          ></input>
          <textarea
            name="Message"
            className="border border-black rounded-lg"
          ></textarea>
          <input type="submit" value="Send" className="bg-blue-600 hover:bg-blue-400 p-2 m-2 rounded-lg w-[25%]" ></input>
        </form>
      </div>
    </div>
  );
};

export default Contact;
