import ContactSection from '@/components/ContactSection';

export default function KontaktPage() {
  return (
    <main className="max-w-4xl bg-zinc-800 mx-auto px-4 py-16 text-white ">
      <h1 className="text-3xl font-bold mb-6 mt-8">Kontakt</h1>
      <p className="mb-8 text-base text-white">
        Du hast Fragen, Interesse an einer Zusammenarbeit oder möchtest ein
        unverbindliches Erstgespräch? Schreib uns einfach – wir melden uns
        schnellstmöglich bei dir.
      </p>

      <ContactSection />
    </main>
  );
}
