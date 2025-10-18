import React from "react";
import { motion } from "framer-motion";

const comboOffers = [
  {
    name: "Spicy Feast Combo",
    description: "Butter Chicken + Veg Hakka Noodles + Tandoori Roti",
    price: 699,
    prevPrice: 850,
    discount: 18,
    img: "https://images.unsplash.com/photo-1617196030195-5b7a3d86765d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Veg Delight Combo",
    description: "Paneer Tikka Masala + Spring Rolls + Roti",
    price: 499,
    prevPrice: 600,
    discount: 17,
    img: "https://images.unsplash.com/photo-1604909053034-96e8eabe9a39?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Tandoori Feast",
    description: "Tandoori Chicken + Malai Paneer Tikka + Roti",
    price: 799,
    prevPrice: 950,
    discount: 16,
    img: "https://images.unsplash.com/photo-1625938144875-d7b4b58c17ec?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Chinese Combo",
    description: "Chilli Chicken + Veg Hakka Noodles + Spring Rolls",
    price: 599,
    prevPrice: 720,
    discount: 17,
    img: "https://images.unsplash.com/photo-1600628422018-8b1a1b5e769c?auto=format&fit=crop&w=600&q=80",
  },
];

const Combo = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 md:px-20 bg-gray-50 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Combo Offers 🍽️
        </h1>
        <p className="text-gray-600 mt-3 text-lg md:text-xl max-w-2xl mx-auto">
          Save big with our curated combos at <span className="font-semibold text-red-500">Spice Villa</span>!
        </p>
      </motion.div>

      {/* Combo Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comboOffers.map((combo, index) => (
          <motion.div
            key={combo.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden group cursor-pointer transition-all"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={combo.img}
                alt={combo.name}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm">
                {combo.discount}% OFF
              </div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-red-500 transition">
                {combo.name}
              </h3>
              <p className="text-gray-600 mt-1 text-sm">{combo.description}</p>

              <div className="flex items-center justify-between mt-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-gray-900 font-bold text-lg">₹{combo.price}</span>
                  <span className="text-gray-400 line-through text-sm">₹{combo.prevPrice}</span>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-semibold text-sm py-1 px-4 rounded-full transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Combo;
