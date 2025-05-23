'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function ContactSection() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const error = await res.json();
        alert(`Fehler beim Senden: ${error.error || 'Unbekanntes Problem'}`);
      }
    } catch (err) {
      console.error('Serverfehler:', err);
      alert('Beim Senden der Nachricht ist ein Fehler aufgetreten.');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Hintergrund-Overlay (optional) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-cyan-500/10 via-purple-500/10 to-transparent" />

      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Jetzt beraten lassen</h2>
        <p className="mt-4 text-white/80 text-lg">
          Lass uns über deine Idee oder dein Projekt sprechen. Wir melden uns
          innerhalb von 24 Stunden.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white backdrop-blur-md rounded-2xl shadow-xl p-8 sm:p-10 space-y-6"
      >
        {submitted ? (
          <p className="text-center text-green-400 font-semibold text-lg">
            Danke für deine Nachricht! 🎉
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-black bg-white">
              <input
                type="text"
                name="name"
                placeholder="Dein Name"
                value={form.name}
                onChange={handleChange}
                required
                className="bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 p-3 rounded-md outline-none transition"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail Adresse"
                value={form.email}
                onChange={handleChange}
                required
                className="bg-white text-black placeholder-gray-500 border border-gray-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 p-3 rounded-md outline-none transition"
              />
            </div>

            <textarea
              name="message"
              placeholder="Worum geht’s?"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full bg-transparent border  text-black  focus:border-white/70 border-gray-300  rounded-md outline-none transition"
            />

            <Button
              type="submit"
              variant="cyan"
              className="w-full text-black font-semibold"
            >
              Nachricht senden
            </Button>
          </>
        )}
      </form>
    </section>
  );
}
