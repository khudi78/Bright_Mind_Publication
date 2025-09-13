import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("https://bright-mind-publication-yn5o.vercel.app/send-email", formData);
      alert("Message sent successfully!");
      setFormData({ name: "", subject: "", email: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="sm:w-[350px] mx-auto p-6 bg-neutral-200 rounded-lg shadow-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 bg-neutral-300 shadow-lg "
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full p-2  bg-neutral-300 shadow-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2  bg-neutral-300 shadow-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows="4"
          required
          className="w-full p-2  bg-neutral-300 shadow-lg"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-black  text-white py-2 rounded hover:bg-gradient-to-br hover:from-gray-700 hover:to-neutral-400 hover:shadow-lg hover:shadow-gray-700 transition"
      >
        Send
      </button>
    </form>
  );
}
