import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { Resend } from "resend";
dotenv.config();

//const resend = new Resend(process.env.RESEND_API_KEY);

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for sending email
app.post("/send-email", async (req, res) => {
  const { name, subject, email, message } = req.body;

  try {
    //Configure transporter
    const transporter = nodemailer.createTransport({
     host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.ADMIN_EMAIL, // your Hostinger email
      pass: process.env.APP_PASSWORD // your email password
    },
    });

    //Send mail
    await transporter.sendMail({
       from: `"${name}" <${process.env.ADMIN_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: email,
      subject: subject,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });
    // await resend.emails.send({
    //   from: process.env.ADMIN_EMAIL, // must be verified on Resend
    //   to: process.env.ADMIN_EMAIL,
    //   replyTo: email,
    //   subject: subject,
    //   text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    // });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Instead of app.listen, export app (Vercel will handle it)
//module.exports = app;
const PORT = 5000;
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });
