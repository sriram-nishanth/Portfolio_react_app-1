import React from 'react'

const Contactcard = () => {
  return (
    <div className="w-full flex justify-center items-center py-16 bg-[#121212]">
      <form className="w-full max-w-lg p-6 bg-[#1a1a1a] rounded-lg shadow-lg flex flex-col gap-4">
        <h2 className="text-2xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] mb-4 text-center">
          Contact Me
        </h2>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your Name"
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your Email"
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button
          className="bg-gradient-to-r from-[#FD6F00] to-[#E46400] text-white font-semibold py-2 px-4 rounded shadow-lg hover:scale-105 transition-transform duration-300 w-full mt-2"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contactcard
