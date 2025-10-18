import React from "react";
import { motion } from "framer-motion";

/**
 * ProductGrid.jsx
 * - Uses local images from src/assets/Images/<filename>
 * - If local image is missing the browser will fallback to the Unsplash URL below (runtime 404 handled by browser)
 *
 * NOTE:
 * - To use your own image locally, add the file into src/assets/Images/ with the filename used in `localImg`.
 * - Filenames used below are lowercase, dash-separated (example: kullikulli.jpg).
 */

/* helper to reference a local image (works with Vite)
   If the file is missing, the returned URL will 404 at runtime and the browser will display the fallback image.
*/
const local = (filename) => {
  try {
    return new URL(`../assets/Images/${filename}`, import.meta.url).href;
  } catch (err) {
    // new URL should not throw in Vite; keep fallback safety
    return null;
  }
};

const PRODUCTS = [
  { id: 1, name: "Kullikulli", price: "₦-----", localImg: local("kullikulli.jpg"), fallback: "https://source.unsplash.com/600x600/?kuli-kuli,peanut" },
  { id: 2, name: "Measured sugar", price: "₦_____", localImg: local("measured-sugar.jpg"), fallback: "https://source.unsplash.com/600x600/?sugar" },
  { id: 3, name: "Crates of Egg", price: "₦_____", localImg: local("crates-of-egg.jpg"), fallback: "https://source.unsplash.com/600x600/?eggs,crate" },
  { id: 4, name: "Bags of rice", price: "₦_____", localImg: local("bags-of-rice.jpg"), fallback: "https://source.unsplash.com/600x600/?rice,bag" },
  { id: 5, name: "Lactorich milk", price: "₦_____", localImg: local("lactorich-milk.jpg"), fallback: "https://source.unsplash.com/600x600/?milk,sachet" },
  { id: 6, name: "Paints of garri", price: "₦_____", localImg: local("paints-of-garri.jpg"), fallback: "https://source.unsplash.com/600x600/?garri" },
  { id: 7, name: "Classic peanuts", price: "₦_____", localImg: local("classic-peanuts.jpg"), fallback: "https://source.unsplash.com/600x600/?peanuts" },
  { id: 8, name: "Burger peanut", price: "₦_____", localImg: local("burger-peanut.jpg"), fallback: "https://source.unsplash.com/600x600/?peanut,butter" },
  { id: 9, name: "Cowbell chocolate", price: "₦500", localImg: local("cowbell-chocolate.jpg"), fallback: "https://source.unsplash.com/600x600/?chocolate" },
  { id: 10, name: "Viva bar soap", price: "₦350", localImg: local("viva-bar-soap.jpg"), fallback: "https://source.unsplash.com/600x600/?soap,bar" },
  { id: 11, name: "Viva detergent small", price: "₦450", localImg: local("viva-detergent-small.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent" },
  { id: 12, name: "Viva detergent big", price: "₦900", localImg: local("viva-detergent-big.jpg"), fallback: "https://source.unsplash.com/600x600/?laundry,detergent" },
  { id: 13, name: "Magik detergent small", price: "₦400", localImg: local("magik-detergent-small.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent,small" },
  { id: 14, name: "Magik detergent medium", price: "₦700", localImg: local("magik-detergent-medium.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent,medium" },
  { id: 15, name: "Magik detergent big", price: "₦1,200", localImg: local("magik-detergent-big.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent,big" },
  { id: 16, name: "Good mama big", price: "₦1,000", localImg: local("good-mama-big.jpg"), fallback: "https://source.unsplash.com/600x600/?cooking-oil" },
  { id: 17, name: "Good mama detergent medium", price: "₦650", localImg: local("good-mama-medium.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent" },
  { id: 18, name: "Good mama detergent small", price: "₦350", localImg: local("good-mama-small.jpg"), fallback: "https://source.unsplash.com/600x600/?soap" },
  { id: 19, name: "Hypo", price: "₦300", localImg: local("hypo.jpg"), fallback: "https://source.unsplash.com/600x600/?bleach" },
  { id: 20, name: "Top cafe", price: "₦400", localImg: local("top-cafe.jpg"), fallback: "https://source.unsplash.com/600x600/?coffee" },
  { id: 21, name: "Rafa detergent", price: "₦800", localImg: local("rafa-detergent.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent,rafa" },
  { id: 22, name: "Peak milk", price: "₦450", localImg: local("peak-milk.jpg"), fallback: "https://source.unsplash.com/600x600/?milk,can" },
  { id: 23, name: "Cremela", price: "₦350", localImg: local("cremela.jpg"), fallback: "https://source.unsplash.com/600x600/?cream" },
  { id: 24, name: "Good time", price: "₦250", localImg: local("good-time.jpg"), fallback: "https://source.unsplash.com/600x600/?biscuits" },
  { id: 25, name: "Choco Robo", price: "₦350", localImg: local("choco-robo.jpg"), fallback: "https://source.unsplash.com/600x600/?chocolate,pack" },
  { id: 26, name: "Paints of beans", price: "₦2,500", localImg: local("paints-of-beans.jpg"), fallback: "https://source.unsplash.com/600x600/?beans,bag" },
  { id: 27, name: "3 crown milk sachet", price: "₦100", localImg: local("three-crown-milk-sachet.jpg"), fallback: "https://source.unsplash.com/600x600/?milk,sachet" },
  { id: 28, name: "Loyal milk", price: "₦120", localImg: local("loyal-milk.jpg"), fallback: "https://source.unsplash.com/600x600/?milk" },
  { id: 29, name: "TBD Item 29", price: "₦0", localImg: local("tbd-29.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 30, name: "TBD Item 30", price: "₦0", localImg: local("tbd-30.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 31, name: "Top tea", price: "₦300", localImg: local("top-tea.jpg"), fallback: "https://source.unsplash.com/600x600/?tea" },
  { id: 32, name: "TBD Item 32", price: "₦0", localImg: local("tbd-32.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 33, name: "TBD Item 33", price: "₦0", localImg: local("tbd-33.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 34, name: "TBD Item 34", price: "₦0", localImg: local("tbd-34.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 35, name: "Corn snack", price: "₦150", localImg: local("corn-snack.jpg"), fallback: "https://source.unsplash.com/600x600/?corn,snack" },
  { id: 36, name: "Strawberry", price: "₦300", localImg: local("strawberry.jpg"), fallback: "https://source.unsplash.com/600x600/?strawberry" },
  { id: 37, name: "TBD Item 37", price: "₦0", localImg: local("tbd-37.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 38, name: "Sweet bite chi chin", price: "₦700", localImg: local("sweet-bite-chichin.jpg"), fallback: "https://source.unsplash.com/600x600/?chinchin" },
  { id: 39, name: "Klin detergent medium", price: "₦700", localImg: local("klin-detergent-medium.jpg"), fallback: "https://source.unsplash.com/600x600/?detergent,klin" },
  { id: 40, name: "TBD Item 40", price: "₦0", localImg: local("tbd-40.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 41, name: "TBD Item 41", price: "₦0", localImg: local("tbd-41.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 42, name: "Crunchy chinchin", price: "₦650", localImg: local("crunchy-chinchin.jpg"), fallback: "https://source.unsplash.com/600x600/?chin-chin" },
  { id: 43, name: "TBD Item 43", price: "₦0", localImg: local("tbd-43.jpg"), fallback: "https://source.unsplash.com/600x600/?grocery" },
  { id: 44, name: "Cowbell coffee", price: "₦450", localImg: local("cowbell-coffee.jpg"), fallback: "https://source.unsplash.com/600x600/?coffee" },
  { id: 45, name: "Dano milk", price: "₦350", localImg: local("dano-milk.jpg"), fallback: "https://source.unsplash.com/600x600/?dano,milk" },
  { id: 46, name: "Blue cracker", price: "₦200", localImg: local("blue-cracker.jpg"), fallback: "https://source.unsplash.com/600x600/?cracker" },
  { id: 47, name: "Tomato paste", price: "₦150", localImg: local("tomato-paste.jpg"), fallback: "https://source.unsplash.com/600x600/?tomato,paste" },
  { id: 48, name: "Spaghetti", price: "₦300", localImg: local("spaghetti.jpg"), fallback: "https://source.unsplash.com/600x600/?spaghetti" },
  { id: 49, name: "Yellow cracker", price: "₦200", localImg: local("yellow-cracker.jpg"), fallback: "https://source.unsplash.com/600x600/?cracker,yellow" },
  { id: 50, name: "Air freshener", price: "₦700", localImg: local("air-freshener.jpg"), fallback: "https://source.unsplash.com/600x600/?air,freshener" },
  { id: 51, name: "Coastal biscuits", price: "₦350", localImg: local("coastal-biscuits.jpg"), fallback: "https://source.unsplash.com/600x600/?biscuits,coastal" },
  { id: 52, name: "Wakana", price: "₦250", localImg: local("wakana.jpg"), fallback: "https://source.unsplash.com/600x600/?wakana" },
  { id: 53, name: "Family choco", price: "₦400", localImg: local("family-choco.jpg"), fallback: "https://source.unsplash.com/600x600/?chocolate,family" },
];

export default function ProductGrid({ onShopClick }) {
  return (
    <section id="products" className="relative py-16 px-6 max-w-6xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-morenbeBlue">Products</h2>
        <button onClick={onShopClick} className="px-4 py-2 bg-morenbeBlue text-white rounded-full">Open Shop</button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {PRODUCTS.slice(0, 12).map((p) => {
          // choose local image if it exists (browser will attempt to load), otherwise fallback to Unsplash
          const imgSrc = p.localImg ?? p.fallback;
          return (
            <motion.div key={p.id} whileHover={{ scale: 1.03 }} className="bg-white rounded-2xl shadow overflow-hidden">
              <img src={imgSrc} alt={p.name} className="w-full h-44 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.price}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-8 flex justify-center">
        <button onClick={onShopClick} className="px-6 py-3 bg-morenbeBlue text-white rounded-full font-semibold shadow">View All Products</button>
      </div>
    </section>
  );
}
