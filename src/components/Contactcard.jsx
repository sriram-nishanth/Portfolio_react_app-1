import React, { useState } from 'react'
import { motion } from 'framer-motion'

const contactVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

const Contactcard = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('Message sent successfully!')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('Failed to send message.')
      }
    } catch (err) {
      setStatus('Failed to send message.')
    }
  }

  return (
    <motion.div
      className="w-full flex justify-center items-center py-16"
      variants={contactVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
    >
      <form
        className="w-full max-w-lg p-6 bg-[#1a1a1a]/20 backdrop-blur-sm rounded-lg shadow-lg flex flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl md:text-[40px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FA6E00] to-[#E60026] mb-4 text-center">
          Get in Touch
        </h2>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:text-amber-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:text-amber-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 focus:text-amber-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="message"
            rows="4"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
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
    </motion.div>
  )
}

export default Contactcard
