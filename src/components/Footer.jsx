import React from "react";

export default function Footer() {
  return (
    <footer className="bg-morenbeBlue text-white py-6 mt-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Morenbee Grocery Store. All rights reserved.</p>
        <p className="text-xs mt-1">Pickup & Delivery within Lagos • 19, Olowora Street, Mafoluku, Oshodi</p>
      </div>
    </footer>
  );
}
