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
    <section id="contact" className="py-20 px-6 bg-background">
      <div className="max-w-3xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold">Jetzt beraten lassen</h2>
        <p className="text-muted-foreground mt-4">
          Lass uns über deine Idee oder dein Projekt sprechen. Wir melden uns
          innerhalb von 24h.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
      >
        {submitted ? (
          <p className="text-center text-green-600 font-semibold text-lg">
            Danke für deine Nachricht! 🎉
          </p>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Dein Name"
                value={form.name}
                onChange={handleChange}
                required
                className="border p-3 rounded bg-background"
              />
              <input
                type="email"
                name="email"
                placeholder="E-Mail Adresse"
                value={form.email}
                onChange={handleChange}
                required
                className="border p-3 rounded bg-background"
              />
            </div>

            <textarea
              name="message"
              placeholder="Worum geht’s?"
              value={form.message}
              onChange={handleChange}
              rows={5}
              required
              className="w-full border p-3 rounded bg-background"
            />

            <Button type="submit" variant="cyan" className="w-full">
              Nachricht senden
            </Button>
          </>
        )}
      </form>
    </section>
  );
}
