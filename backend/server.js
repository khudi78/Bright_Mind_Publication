import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route for sending email
app.post("/send-email", async (req, res) => {
  const { name, subject, email, message } = req.body;

  try {
    // Configure transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // You can use Outlook, Yahoo, or custom SMTP
      auth: {
        user: "krkhushi2001@gmail.com",      // admin email
        pass: "fzpx fkns xbmd fsev",          // app password (NOT your Gmail password)
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "krkhushi2001@gmail.com",
      subject: subject,
      text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
