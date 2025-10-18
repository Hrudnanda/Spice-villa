import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 text-white">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content container */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 md:px-20 py-20 md:py-32">
        {/* Left content */}
        <div className="max-w-lg space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg">
            Welcome to <span className="text-yellow-300">Spice Villa</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-gray-100">
            Taste the magic of authentic flavors, freshly made with passion and
            perfection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full shadow-md transition">
              Order Now
            </button>
            <button className="bg-transparent border border-white hover:bg-white hover:text-red-600 font-semibold py-3 px-6 rounded-full shadow-md transition">
              View Menu
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="mt-10 md:mt-0 md:ml-10">
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=600&q=80"
            alt="Delicious Indian Dish"
            className="rounded-3xl shadow-2xl w-full max-w-md transform hover:scale-105 transition duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

