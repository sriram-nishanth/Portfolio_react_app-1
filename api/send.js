import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  // Basic validation
  const { name, email, message } = req.body;
  if (
    !name ||
    !email ||
    !message ||
    typeof name !== 'string' ||
    typeof email !== 'string' ||
    typeof message !== 'string'
  ) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Prevent email header injection
  if (/\r|\n/.test(name) || /\r|\n/.test(email)) {
    return res.status(400).json({ message: 'Invalid input' });
  }

  // Create transporter
  let transporter;
  try {
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.USER,
        pass: process.env.PASS,
      },
    });
  } catch (err) {
    return res.status(500).json({ message: 'Failed to create transporter', error: err.message });
  }

  // Send mail
  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.USER,
      subject: 'Portfolio Contact Form Message',
      text: message,
      html: `<p><b>Name:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Message:</b> ${message}</p>`,
    });
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send email', error: error.message });
  }
}