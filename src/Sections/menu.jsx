import React, { useState } from "react";
import { motion } from "framer-motion";

const Menu = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState([]);

  const menuItems = {
    Indian: [
      { name: "Butter Chicken", price: "₹320", oldPrice: "₹400", discount: "20% OFF", img: "https://www.spiceroots.com/spiceroots/wp-content/uploads/2008/05/butterchicken-1024x682-1.jpg" },
      { name: "Paneer Tikka Masala", price: "₹280", oldPrice: "₹340", discount: "18% OFF", img: "https://carameltintedlife.com/wp-content/uploads/2020/02/Instant-Pot-Paneer-Tikka-Masala-18.jpg" },
      { name: "Hyderabadi Biryani", price: "₹350", oldPrice: "₹420", discount: "17% OFF", img: "https://www.ruchifoodline.com/recipes//cdn/recipes/chicken-biryani.jpg" },
    ],
    Chinese: [
      { name: "Veg Hakka Noodles", price: "₹220", oldPrice: "₹260", discount: "15% OFF", img: "https://images.unsplash.com/photo-1604909053034-96e8eabe9a39?auto=format&fit=crop&w=600&q=80" },
      { name: "Chilli Chicken", price: "₹280", oldPrice: "₹330", discount: "15% OFF", img: "https://images.unsplash.com/photo-1600628422018-8b1a1b5e769c?auto=format&fit=crop&w=600&q=80" },
      { name: "Spring Rolls", price: "₹180", oldPrice: "₹210", discount: "14% OFF", img: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80" },
    ],
    Tandoor: [
      { name: "Tandoori Chicken", price: "₹320", oldPrice: "₹380", discount: "16% OFF", img: "https://images.unsplash.com/photo-1625938144875-d7b4b58c17ec?auto=format&fit=crop&w=600&q=80" },
      { name: "Malai Paneer Tikka", price: "₹290", oldPrice: "₹340", discount: "15% OFF", img: "https://images.unsplash.com/photo-1632823461977-04a9482b1668?auto=format&fit=crop&w=600&q=80" },
      { name: "Tandoori Roti", price: "₹40", oldPrice: "₹50", discount: "20% OFF", img: "https://images.unsplash.com/photo-1615996001375-87b83e8e414b?auto=format&fit=crop&w=600&q=80" },
    ],
    Mocktails: [
      { name: "Virgin Mojito", price: "₹180", oldPrice: "₹220", discount: "18% OFF", img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?auto=format&fit=crop&w=600&q=80" },
      { name: "Blue Lagoon", price: "₹200", oldPrice: "₹250", discount: "20% OFF", img: "https://images.unsplash.com/photo-1603052875306-36c2c90e6b02?auto=format&fit=crop&w=600&q=80" },
      { name: "Pineapple Punch", price: "₹190", oldPrice: "₹230", discount: "17% OFF", img: "https://images.unsplash.com/photo-1621799754520-6a1c4e8b7e3a?auto=format&fit=crop&w=600&q=80" },
    ],
    Desserts: [
      { name: "Gulab Jamun", price: "₹120", oldPrice: "₹150", discount: "20% OFF", img: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80" },
      { name: "Chocolate Lava Cake", price: "₹160", oldPrice: "₹200", discount: "20% OFF", img: "https://images.unsplash.com/photo-1605475128023-9cf79f1c9d65?auto=format&fit=crop&w=600&q=80" },
      { name: "Rasmalai", price: "₹140", oldPrice: "₹180", discount: "22% OFF", img: "https://images.unsplash.com/photo-1608219959300-6a06f6bdf2ce?auto=format&fit=crop&w=600&q=80" },
    ],
  };

  // Flatten menu for search filter
  const filteredMenu = Object.keys(menuItems).reduce((acc, cuisine) => {
    const filteredItems = menuItems[cuisine].filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (filteredItems.length > 0) acc[cuisine] = filteredItems;
    return acc;
  }, {});

  const handleAddToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart! 🛒`);
  };

  return (
    <section className="relative min-h-screen py-16 px-6 md:px-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,100,100,0.5),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(255,50,50,0.5),transparent_60%),linear-gradient(135deg,rgba(180,0,0,0.9),rgba(255,60,60,0.8))] animate-gradientMove"></div>

      {/* Glow Blobs */}
      <motion.div
        animate={{ x: [0, 50, 0], y: [0, -30, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-10 left-10 w-72 h-72 bg-red-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
      ></motion.div>
      <motion.div
        animate={{ x: [0, -60, 0], y: [0, 40, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
      ></motion.div>

      {/* Header + Search */}
      <div className="relative z-10 text-center mb-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] mb-4">
          Our Delicious Menu
        </h1>
        <p className="text-orange-50 text-lg md:text-xl max-w-2xl mx-auto mb-6">
          Indulge in a journey of flavors at{" "}
          <span className="font-semibold text-yellow-300">Spice Villa</span>, where taste meets tradition.
        </p>

        {/* Search Bar */}
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Search your favorite dish..."
            className="w-full max-w-md px-5 py-3 rounded-full border border-yellow-300 bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Menu Grid */}
      {Object.keys(filteredMenu).length === 0 ? (
        <p className="text-center text-white text-lg mt-20">No items found 🔍</p>
      ) : (
        Object.keys(filteredMenu).map((cuisine, index) => (
          <motion.div
            key={cuisine}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            viewport={{ once: true }}
            className="mb-16 relative z-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-200 mb-6 border-b-4 border-yellow-400 inline-block drop-shadow-lg">
              {cuisine} Cuisine
            </h2>

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredMenu[cuisine].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl shadow-2xl overflow-hidden group hover:shadow-red-400/50 transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition duration-500"></div>
                  </div>

                  {/* Info */}
                  <div className="p-5 text-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-yellow-300 transition">
                      {item.name}
                    </h3>

                    <div className="flex justify-center items-center gap-2 mt-2">
                      <span className="text-yellow-200 font-bold text-lg">{item.price}</span>
                      <span className="text-gray-300 line-through text-sm">{item.oldPrice}</span>
                      <span className="text-green-300 text-sm font-semibold">{item.discount}</span>
                    </div>

                    {/* Buttons */}
                    <div className="mt-4 flex justify-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-red-500 to-yellow-400 hover:from-yellow-400 hover:to-red-500 text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
                      >
                        Order Now
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleAddToCart(item)}
                        className="bg-gradient-to-r from-green-500 to-lime-400 hover:from-lime-400 hover:to-green-500 text-white font-semibold py-2 px-5 rounded-full shadow-md transition"
                      >
                        Add to Cart
                      </motion.button>
                    </div>
                  </div>

                  {/* Badge */}
                  <motion.span
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="absolute top-4 right-4 bg-red-500 text-white font-bold px-3 py-1 rounded-full text-sm shadow-md"
                  >
                    Hot
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))
      )}
    </section>
  );
};

export default Menu;
