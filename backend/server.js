import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for sending email
app.post("/send-email", async (req, res) => {
  const { name, subject, email, message } = req.body;

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,   // use environment variable
        pass: process.env.APP_PASSWORD,  // use environment variable
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.ADMIN_EMAIL,
      subject: subject,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

// Instead of app.listen, export app (Vercel will handle it)
// export default app;
const PORT = 5000;
app.listen(PORT, () => { console.log(`Server running on http://localhost:${PORT}`); });
