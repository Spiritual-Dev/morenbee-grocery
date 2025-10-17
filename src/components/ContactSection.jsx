import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-morenbeBlue mb-4">Contact Us</h2>
        <p className="mb-6 text-gray-700">
          19, Olowora Street, Mafoluku, Oshodi, Lagos. • Call: 08125015031 • Pickup & Delivery available within Lagos.
        </p>

        <form onSubmit={(e) => { e.preventDefault(); alert("This is frontend-only. Hook a backend or emailing service to send messages."); }} className="grid gap-4">
          <input className="px-4 py-3 border rounded" placeholder="Your name" />
          <input className="px-4 py-3 border rounded" placeholder="Your email" />
          <textarea className="px-4 py-3 border rounded" rows="4" placeholder="Message / order details"></textarea>
          <button type="submit" className="bg-morenbeBlue text-white px-6 py-3 rounded-full font-semibold">Send Message</button>
        </form>
      </div>
    </section>
  );
}
