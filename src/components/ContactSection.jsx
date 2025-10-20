import React from "react";

export default function ContactSection() {
  return (
    <section id="contact" className="py-10 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-morenbeBlue mb-2">Contact Us</h2>
        <p className="mb-4 text-gray-700 text-sm">
          19, Olowora Street, Mafoluku, Oshodi, Lagos. • Call: 08125015031 • Pickup & Delivery within Lagos.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(
              "This is frontend-only. Hook a backend or emailing service to send messages."
            );
          }}
          className="grid gap-3"
        >
          <input className="px-4 py-2 border rounded text-sm" placeholder="Your name" />
          <input className="px-4 py-2 border rounded text-sm" placeholder="Your email" />
          <textarea
            className="px-4 py-2 border rounded text-sm"
            rows="3"
            placeholder="Message / order details"
          ></textarea>
          <button
            type="submit"
            className="bg-morenbeBlue text-white px-6 py-2 rounded-full font-semibold text-sm"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
