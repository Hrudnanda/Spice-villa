import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaMotorcycle, FaMapMarkerAlt, FaClock, FaBirthdayCake, FaRegCalendarAlt, FaGlassCheers, FaUtensils } from "react-icons/fa";

const DeliveryBooking = () => {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");
  const [booking, setBooking] = useState({ name: "", event: "", date: "", guests: "" });
  const [bookingStatus, setBookingStatus] = useState("");
  const [progress, setProgress] = useState(0);

  const trackOrder = (e) => {
    e.preventDefault();
    if (orderId.trim() === "") {
      setStatus("⚠️ Please enter a valid Order ID.");
      setProgress(0);
    } else {
      setStatus(`🚚 Order #${orderId} is on the way!`);
      // Animate progress bar
      setProgress(25);
      setTimeout(() => setProgress(50), 1000);
      setTimeout(() => setProgress(75), 2000);
      setTimeout(() => {
        setProgress(100);
        setStatus(`✅ Order #${orderId} Delivered! Enjoy your meal!`);
      }, 3000);
    }
  };

  const handleBookingChange = (e) => setBooking({ ...booking, [e.target.name]: e.target.value });
  const handleBookingSubmit = (e) => {
    e.preventDefault();
    if (!booking.name || !booking.event || !booking.date || !booking.guests) {
      setBookingStatus("⚠️ Please fill all fields to book your event.");
    } else {
      setBookingStatus(`🎉 Thank you ${booking.name}! Your ${booking.event} booking is confirmed for ${booking.date}.`);
      setBooking({ name: "", event: "", date: "", guests: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-red-500 text-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-12 px-6">
        <div className="flex-1 flex flex-col gap-6">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-6xl font-extrabold drop-shadow-lg"
          >
            Home Delivery <span className="text-white/90">Made Easy</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white/80 text-lg md:text-xl"
          >
            Enjoy your favorite meals from <span className="font-bold">Spice Villa</span> delivered hot & fresh. Fast, safe, and on time!
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row gap-6 mt-4"
          >
            <div className="flex items-center gap-3"><FaMotorcycle className="text-white text-3xl animate-bounce" />Fast & Reliable</div>
            <div className="flex items-center gap-3"><FaMapMarkerAlt className="text-white text-3xl animate-pulse" />Track Live</div>
            <div className="flex items-center gap-3"><FaClock className="text-white text-3xl" />30-45 mins</div>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <motion.img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
            alt="Delivery"
            className="rounded-full shadow-2xl w-80 h-80 object-cover"
            whileHover={{ scale: 1.05, rotate: 5 }}
          />
        </motion.div>
      </div>

      {/* Track Order Section */}
      <div className="max-w-3xl mx-auto flex flex-col items-center py-10 px-6">
        <h2 className="text-4xl font-bold mb-6 text-white/90">Track Your Order</h2>
        <form className="w-full flex flex-col md:flex-row gap-4 mb-6" onSubmit={trackOrder}>
          <input
            type="text"
            placeholder="Enter Order ID"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            className="flex-1 p-4 rounded-full border-2 border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: "#FFA500" }}
            className="bg-white text-red-500 font-bold px-8 py-4 rounded-full shadow-lg"
          >
            Track
          </motion.button>
        </form>

        {/* Animated Progress Bar */}
        <div className="w-full bg-white/30 rounded-full h-4 overflow-hidden mb-4">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-4 bg-green-400"
          ></motion.div>
        </div>
        {status && <p className="text-white/90 font-semibold animate-pulse">{status}</p>}
      </div>

      {/* Booking Section */}
      <div className="max-w-5xl mx-auto py-12 px-6 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6">Book Your Event</h2>
        <p className="mb-8 text-white/80 text-center">Celebrate birthdays, anniversaries, or parties with us. Memorable experience guaranteed!</p>

        {/* Event Booking Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 w-full">
          {["Birthday", "Anniversary", "Party"].map((event, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white/20 backdrop-blur-md rounded-3xl p-6 flex flex-col items-center text-center hover:scale-105 transition transform shadow-lg"
            >
              <FaBirthdayCake className="text-yellow-400 text-5xl mb-4" />
              <h3 className="text-2xl font-bold mb-2">{event}</h3>
              <p className="text-white/80 mb-4">Book your {event.toLowerCase()} event with customized themes and catering options.</p>
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#FFA500" }}
                className="bg-white text-red-500 font-bold px-6 py-3 rounded-full shadow-lg"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Booking Form */}
        <motion.form
          className="w-full max-w-3xl flex flex-col gap-4 mb-6"
          onSubmit={handleBookingSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <input type="text" name="name" placeholder="Your Name" value={booking.name} onChange={handleBookingChange} className="p-4 rounded-full border-2 border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition" />
          <input type="text" name="event" placeholder="Event Type" value={booking.event} onChange={handleBookingChange} className="p-4 rounded-full border-2 border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition" />
          <input type="date" name="date" value={booking.date} onChange={handleBookingChange} className="p-4 rounded-full border-2 border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition" />
          <input type="number" name="guests" placeholder="Number of Guests" value={booking.guests} onChange={handleBookingChange} className="p-4 rounded-full border-2 border-white/50 bg-white/20 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/80 transition" />
          <motion.button whileHover={{ scale: 1.05, backgroundColor: "#FFA500" }} className="bg-white text-red-500 font-bold px-8 py-4 rounded-full shadow-lg">Submit Booking</motion.button>
        </motion.form>
        {bookingStatus && <p className="text-white/90 font-semibold animate-pulse">{bookingStatus}</p>}

        {/* Key Booking Features */}
        <motion.div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-white/90">
          <div className="flex items-center gap-3"><FaBirthdayCake className="text-yellow-400 text-3xl" /> Customized Decorations & Themes</div>
          <div className="flex items-center gap-3"><FaRegCalendarAlt className="text-yellow-400 text-3xl" /> Flexible Date & Time</div>
          <div className="flex items-center gap-3"><FaUtensils className="text-yellow-400 text-3xl" /> Special Catering Options</div>
          <div className="flex items-center gap-3"><FaGlassCheers className="text-yellow-400 text-3xl" /> Professional Event Management</div>
        </motion.div>
      </div>

      {/* Animated Wave Background */}
      <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="w-full h-40 bg-gradient-to-t from-red-500 via-orange-400 to-yellow-400 rounded-t-full opacity-50"></motion.div>
    </div>
  );
};

export default DeliveryBooking;
