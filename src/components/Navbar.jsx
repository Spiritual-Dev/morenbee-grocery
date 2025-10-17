import React from "react";

export default function Navbar({ onShopClick }) {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-morenbeBlue text-white flex items-center justify-center font-bold">M</div>
          <div>
            <h1 className="text-lg font-semibold text-morenbeBlue">Morenbe Grocery</h1>
            <p className="text-xs text-gray-500">Packaged foods & essentials</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button onClick={() => document.getElementById("products")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="hidden md:inline text-sm text-gray-700 hover:text-morenbeBlue">Products</button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" })} className="hidden md:inline text-sm text-gray-700 hover:text-morenbeBlue">Contact</button>
          <button onClick={onShopClick} className="px-4 py-2 rounded-full bg-morenbeBlue text-white text-sm font-semibold shadow">Shop Now</button>
        </div>
      </div>
    </nav>
  );
}
