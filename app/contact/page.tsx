import ContactSection from '@/components/ContactSection';

export default function KontaktPage() {
  return (
    <main className="relative z-10 px-6 py-24 text-foreground bg-background">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-accent mb-4">Kontakt</h1>
        <p className="text-lg text-muted-foreground">
          Du hast Fragen, Interesse an einer Zusammenarbeit oder möchtest ein
          unverbindliches Erstgespräch? Schreib uns einfach – wir melden uns
          schnellstmöglich bei dir.
        </p>
      </div>

      <ContactSection />
    </main>
  );
}
