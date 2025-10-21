import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import About from "./components/About";
import AboutModal from "./components/AboutModal";
import ShopModal from "./components/ShopModal";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import bgImage from "./assets/Images/background.jpg";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  // Disable background scroll when modals are open
  useEffect(() => {
    document.body.style.overflow = showProducts || showAbout ? "hidden" : "auto";
  }, [showProducts, showAbout]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const handleOpenShop = () => {
    if (!showAbout) setShowProducts(true);
  };

  const handleOpenAbout = () => {
    if (!showProducts) setShowAbout(true);
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* ===== Global Static Background ===== */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* Layer 1: soft gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-blue-900/40 to-black/70"
          aria-hidden="true"
        ></div>

        {/* Layer 2: vignette around edges */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at center, rgba(0,0,0,0) 60%, rgba(0,0,0,0.55) 100%)",
          }}
          aria-hidden="true"
        ></div>
      </div>

      {/* ===== Navbar ===== */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          onShopClick={handleOpenShop}
          onAboutClick={handleOpenAbout}
          onContactClick={() => scrollToSection("contact")}
        />
      </header>

      {/* ===== Main Content ===== */}
      <main className="flex-grow relative text-gray-100 pt-[80px]">
        <div className="relative z-10">
          <Hero onShopClick={handleOpenShop} />
          <ProductGrid onShopClick={handleOpenShop} />
          <section id="about" className="py-12">
            <About onOpenModal={handleOpenAbout} />
          </section>

          {/* Modals */}
          <ShopModal
            isOpen={showProducts}
            onClose={() => setShowProducts(false)}
          />
          <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />

          {/* Contact Section */}
          <section id="contact" className="pb-16">
            <ContactSection />
          </section>
        </div>
      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-gradient-to-r from-blue-600 via-blue-700 to-morenbeBlue text-white relative z-10">
        <Footer />
      </footer>
    </div>
  );
}
