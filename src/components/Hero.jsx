import React from "react";

const Hero = () => {
  return (
    <section
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="bg-black/40 p-10 rounded-lg  text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold">Find Your Dream Home</h1>
        <p className="text-md md:text-xl mb-6 leading-10">Luxury Appartments,Villas and Modern Flats at your finger tips</p>
        <button className="bg-blue-600 px-6 py-3 rounded-md  text-lg font-medium hover:bg-blue-700">Browse Properties</button>
      </div>
    </section>
  );
};

export default Hero;
