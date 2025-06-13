import React, { useRef,useState } from 'react'
import emailjs from '@emailjs/browser';

const Contactcard = () => {
    const form = useRef('');
    const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_nuqo1ig', 'template_jyog84s', form.current, {
        publicKey: 'KY4sFwumfZE1k3Ar7',
      })
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
           setStatus('Failed to send message.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="w-full flex justify-center items-center py-16 bg-[#121212]">
      <form
        className="w-full max-w-lg p-6 bg-[#1a1a1a] rounded-lg shadow-lg flex flex-col gap-4"
        onSubmit={sendEmail}
        ref={form}
      >
        <h2 className="text-2xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] mb-4 text-center">
          Contact Me
        </h2>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}

            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            required
          ></textarea>
        </div>
        <button
          className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white font-semibold py-2 px-4 rounded shadow-lg hover:scale-105 hover:shadow-1xl hover:shadow-amber-700 transition-transform duration-300 w-full mt-2"
          type="submit"
        >
          Send Message
        </button>
        {status && (
          <div className="text-center text-white mt-2">{status}</div>
        )}
      </form>
    </div>
  )
}

export default Contactcard
