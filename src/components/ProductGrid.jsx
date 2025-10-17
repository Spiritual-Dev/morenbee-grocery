import React from "react";
import { motion } from "framer-motion";

/* Full product list provided (53 items). Blank numbers filled with "TBD Item X" so we preserve 1..53 */
const PRODUCTS = [
  { id: 1, name: "Kullikulli", price: "₦500", img: "/src/assets/images/Kullikulli.jpg" },
  { id: 2, name: "Measured sugar", price: "₦900", img: "https://source.unsplash.com/600x600/?sugar" },
  { id: 3, name: "Crates of Egg", price: "₦6,000", img: "https://source.unsplash.com/600x600/?eggs" },
  { id: 4, name: "Bags of rice", price: "₦25,000", img: "https://source.unsplash.com/600x600/?rice,bag" },
  { id: 5, name: "Lactorich milk", price: "₦750", img: "https://source.unsplash.com/600x600/?milk" },
  { id: 6, name: "Paints of garri", price: "₦1,200", img: "https://source.unsplash.com/600x600/?garri" },
  { id: 7, name: "Classic peanuts", price: "₦800", img: "https://source.unsplash.com/600x600/?peanuts,classic" },
  { id: 8, name: "Burger peanut", price: "₦700", img: "https://source.unsplash.com/600x600/?peanut,butter" },
  { id: 9, name: "Cowbell chocolate", price: "₦500", img: "https://source.unsplash.com/600x600/?chocolate" },
  { id: 10, name: "Viva bar soap", price: "₦350", img: "https://source.unsplash.com/600x600/?soap" },
  { id: 11, name: "Viva detergent small", price: "₦450", img: "https://source.unsplash.com/600x600/?detergent" },
  { id: 12, name: "Viva detergent big", price: "₦900", img: "https://source.unsplash.com/600x600/?laundry,detergent" },
  { id: 13, name: "Magik detergent small", price: "₦400", img: "https://source.unsplash.com/600x600/?soap,detergent" },
  { id: 14, name: "Magik detergent medium", price: "₦700", img: "https://source.unsplash.com/600x600/?detergent,medium" },
  { id: 15, name: "Magik detergent big", price: "₦1,200", img: "https://source.unsplash.com/600x600/?detergent,big" },
  { id: 16, name: "Good mama big", price: "₦1,000", img: "https://source.unsplash.com/600x600/?cooking-oil" },
  { id: 17, name: "Good mama detergent medium", price: "₦650", img: "https://source.unsplash.com/600x600/?detergent" },
  { id: 18, name: "Good mama detergent small", price: "₦350", img: "https://source.unsplash.com/600x600/?soap" },
  { id: 19, name: "Hypo", price: "₦300", img: "https://source.unsplash.com/600x600/?bleach" },
  { id: 20, name: "Top cafe", price: "₦400", img: "https://source.unsplash.com/600x600/?coffee" },
  { id: 21, name: "Rafa detergent", price: "₦800", img: "https://source.unsplash.com/600x600/?detergent" },
  { id: 22, name: "Peak milk", price: "₦450", img: "https://source.unsplash.com/600x600/?milk,can" },
  { id: 23, name: "Cremela", price: "₦350", img: "https://source.unsplash.com/600x600/?cream" },
  { id: 24, name: "Good time", price: "₦250", img: "https://source.unsplash.com/600x600/?biscuits" },
  { id: 25, name: "Choco Robo", price: "₦350", img: "https://source.unsplash.com/600x600/?chocolate" },
  { id: 26, name: "Paints of beans", price: "₦2,500", img: "https://source.unsplash.com/600x600/?beans" },
  { id: 27, name: "3 crown milk sachet", price: "₦100", img: "https://source.unsplash.com/600x600/?milk,sachet" },
  { id: 28, name: "Loyal milk", price: "₦120", img: "https://source.unsplash.com/600x600/?milk" },
  { id: 29, name: "TBD Item 29", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 30, name: "TBD Item 30", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 31, name: "Top tea", price: "₦300", img: "https://source.unsplash.com/600x600/?tea" },
  { id: 32, name: "TBD Item 32", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 33, name: "TBD Item 33", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 34, name: "TBD Item 34", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 35, name: "Corn snack", price: "₦150", img: "https://source.unsplash.com/600x600/?corn,snack" },
  { id: 36, name: "Strawberry", price: "₦300", img: "https://source.unsplash.com/600x600/?strawberry" },
  { id: 37, name: "TBD Item 37", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 38, name: "Sweet bite chi chin", price: "₦700", img: "https://source.unsplash.com/600x600/?chinchin" },
  { id: 39, name: "Klin detergent medium", price: "₦700", img: "https://source.unsplash.com/600x600/?detergent,klin" },
  { id: 40, name: "TBD Item 40", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 41, name: "TBD Item 41", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 42, name: "Crunchy chinchin", price: "₦650", img: "https://source.unsplash.com/600x600/?chin-chin" },
  { id: 43, name: "TBD Item 43", price: "₦0", img: "https://source.unsplash.com/600x600/?grocery" },
  { id: 44, name: "Cowbell coffee", price: "₦450", img: "https://source.unsplash.com/600x600/?coffee,cowbell" },
  { id: 45, name: "Dano milk", price: "₦350", img: "https://source.unsplash.com/600x600/?dano,milk" },
  { id: 46, name: "Blue cracker", price: "₦200", img: "https://source.unsplash.com/600x600/?cracker" },
  { id: 47, name: "Tomato paste", price: "₦150", img: "https://source.unsplash.com/600x600/?tomato,paste" },
  { id: 48, name: "Spaghetti", price: "₦300", img: "https://source.unsplash.com/600x600/?spaghetti" },
  { id: 49, name: "Yellow cracker", price: "₦200", img: "https://source.unsplash.com/600x600/?cracker,yellow" },
  { id: 50, name: "Air freshener", price: "₦700", img: "https://source.unsplash.com/600x600/?air,freshener" },
  { id: 51, name: "Coastal biscuits", price: "₦350", img: "https://source.unsplash.com/600x600/?biscuits,coastal" },
  { id: 52, name: "Wakana", price: "₦250", img: "https://source.unsplash.com/600x600/?wakana" },
  { id: 53, name: "Family choco", price: "₦400", img: "https://source.unsplash.com/600x600/?chocolate,family" },
];

export default function ProductGrid({ onShopClick }) {
  return (
    <section id="products" className="py-16 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-morenbeBlue">Products</h2>
        <button onClick={onShopClick} className="px-4 py-2 bg-morenbeBlue text-white rounded-full">Open Shop</button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PRODUCTS.slice(0, 12).map((p) => (
          <motion.div key={p.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow overflow-hidden">
            <img src={p.img} alt={p.name} className="w-full h-44 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{p.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{p.price}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button onClick={onShopClick} className="px-6 py-3 bg-morenbeBlue text-white rounded-full font-semibold shadow">View All Products</button>
      </div>
    </section>
  );
}
