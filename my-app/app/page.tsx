'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-4 space-y-24">
      <section className="min-h-screen flex flex-col items-center justify-center text-center" id="hero">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Wij zijn Student Consultant
        </motion.h1>
        <p className="mb-8 text-lg max-w-2xl">
          Moderne studenten leveren frisse inzichten voor jouw organisatie.
        </p>
        <a href="#contact" className="bg-accent text-black font-semibold px-6 py-3 rounded hover:opacity-90 transition">
          Vraag gratis voorstel aan
        </a>
      </section>

      <section id="why" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Waarom Student Consultant</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Betaalbare expertise', 'Frisse blik', 'Flexibele inzet'].map(text => (
            <motion.div key={text} whileHover={{ scale: 1.05 }} className="p-6 rounded shadow bg-white dark:bg-gray-800">
              {text}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Servicedomeinen</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Strategie', 'Marketing', 'Data'].map(text => (
            <motion.div key={text} whileHover={{ scale: 1.05 }} className="p-6 rounded shadow bg-white dark:bg-gray-800">
              {text}
            </motion.div>
          ))}
        </div>
      </section>

      <section id="sectors" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Sectoren</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          {['Tech', 'Finance', 'Overheid'].map(text => (
            <motion.span key={text} whileHover={{ scale: 1.1 }} className="px-4 py-2 bg-primary text-white rounded">
              {text}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="about" className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Over ons</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {['Anna', 'Bram', 'Chris'].map(text => (
            <motion.div key={text} whileHover={{ y: -5 }} className="p-6 rounded shadow bg-white dark:bg-gray-800 text-center">
              <div className="h-24 w-24 bg-gray-300 rounded-full mx-auto mb-2" />
              {text}
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
