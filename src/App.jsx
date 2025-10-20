import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// Keep the page About section (for SEO, visible page content)
import About from "./components/About";
import AboutModal from "./components/AboutModal"; // the pop-up version you created
import ShopModal from "./components/ShopModal";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import bgImage from "./assets/Images/background.jpg";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  /**
   * Smooth scroll helper with offset to account for fixed navbar.
   * Adjust `offset` if your navbar height changes.
   */
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const offset = 80; // px - matches your header height (adjust if needed)
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* ===== Navbar =====
          The Navbar expects these props:
          - onShopClick: open ShopModal
          - onAboutClick: open AboutModal
          - onContactClick: scroll to contact section
      */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <Navbar
          onShopClick={() => setShowProducts(true)}
          onAboutClick={() => setShowAbout(true)}
          onContactClick={() => scrollToSection("contact")}
        />
      </header>

      {/* ===== Main (shifted down so header doesn't overlap content) ===== */}
      <main
        className="flex-grow bg-cover bg-center relative text-gray-800 pt-[80px]"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundAttachment: "fixed",
        }}
      >
        {/* subtle overlay so text reads well on top of background */}
        <div className="absolute inset-0 bg-[#ffffffcc] backdrop-blur-[2px]" />

        <div className="relative z-10">
          {/* Hero: pass shop open so shop button works */}
          <Hero onShopClick={() => setShowProducts(true)} />
            

          {/* Visible About section on the page (keeps content present) */}
          <section id="about" className="py-12">
            <About />
          </section>

          {/* Products (ShopModal lives at top-level so it overlays entire page) */}
          <section id="products" className="py-8">
            <ShopModal isOpen={showProducts} onClose={() => setShowProducts(false)} />
          </section>

          {/* About modal popup (opened from navbar About) */}
          <AboutModal isOpen={showAbout} onClose={() => setShowAbout(false)} />

          {/* Contact */}
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
