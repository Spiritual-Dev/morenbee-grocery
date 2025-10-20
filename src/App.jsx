import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ShopModal from "./components/ShopModal"; // ✅ import this instead
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import bgImage from "./assets/Images/background.jpg";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== Header ===== */}
      <header className="bg-gradient-to-r from-morenbeBlue to-blue-500 shadow-lg">
        <Navbar onShopClick={() => setShowProducts(true)} />
      </header>

      {/* ===== Main Section ===== */}
      <main
        className="flex-grow bg-cover bg-center relative text-gray-800"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-[#ffffffcc] backdrop-blur-[2px]"></div>

        <div className="relative z-10">
          <Hero />
          <section id="products" className="py-16">
            {/* ✅ Use ShopModal here */}
            <ShopModal
              isOpen={showProducts}
              onClose={() => setShowProducts(false)}
            />
          </section>

          <section id="contact" className="pb-16">
            <ContactSection />
          </section>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-morenbeBlue text-white">
        <Footer />
      </footer>
    </div>
  );
}
