import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const emailParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_ful0spc", // Replace with your EmailJS Service ID
        "template_qjzfhal", // Replace with your EmailJS Template ID
        emailParams,
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Failed to send message:", error);
        alert("Error sending your message. Please try again.");
        setIsLoading(false);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100  flex items-center justify-center px-4 py-12">
      <div className="container mx-auto flex flex-col md:flex-row bg-white  rounded-lg shadow-lg overflow-hidden">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-80 md:h-auto relative">
          <iframe
            className="w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509371!2d144.9556510153129!3d-37.81732397975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce7e33!2sVictoria%20Australia!5e0!3m2!1sen!2sus!4v1601092768123!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Contact Map"
          ></iframe>
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-800  mb-4">
            Contact Us
          </h2>
          {isSubmitted ? (
            <div className="text-green-500 text-center font-medium">
              Thank you! Your message has been sent.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 "
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300  rounded-md shadow-sm py-2 px-3 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full ${
                  isLoading ? "bg-gray-500" : "bg-blue-500 hover:bg-blue-600"
                } text-white font-medium py-2 px-4 rounded-md transition`}
              >
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
