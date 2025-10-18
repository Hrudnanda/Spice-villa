import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 via-pink-500 to-red-600 min-h-screen flex flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-white mb-10">Contact Us</h1>

      <div className="bg-white rounded-3xl shadow-xl p-10 w-full max-w-5xl flex flex-col md:flex-row gap-10">
        {/* Contact Information */}
        <div className="flex-1 flex flex-col gap-6">
          <h2 className="text-3xl font-semibold text-red-600">Get in Touch</h2>
          <p className="text-gray-600">
            We'd love to hear from you! Reach out through any of the following ways or follow us on social media.
          </p>

          <div className="flex items-center gap-4 text-gray-700">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <span>123 Spice Villa Street, Foodie City, India</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaPhoneAlt className="text-red-600 text-xl" />
            <span>+91 98765 43210</span>
          </div>
          <div className="flex items-center gap-4 text-gray-700">
            <FaEnvelope className="text-red-600 text-xl" />
            <span>contact@spicevilla.com</span>
          </div>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-pink-500 text-white p-3 rounded-full hover:bg-pink-600 transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-sky-400 text-white p-3 rounded-full hover:bg-sky-500 transition">
              <FaTwitter />
            </a>
            <a href="#" className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-red-600 mb-4">Send Us a Message</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
