'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';

const sectors = {
  Technologie: ['Software', 'AI', 'Cloud'],
  Financieel: ['Banken', 'FinTech'],
  Zorg: ['Ziekenhuizen', 'MedTech'],
};

export default function Sectors() {
  const [active, setActive] = useState<keyof typeof sectors>('Technologie');
  return (
    <section id="sectors" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Sectoren</h2>
        <div className="flex justify-center mb-6 gap-4">
          {(Object.keys(sectors) as Array<keyof typeof sectors>).map((name) => (
            <button
              key={name}
              onClick={() => setActive(name)}
              className={`px-4 py-2 rounded-full border transition ${active === name ? 'bg-accent text-black' : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
            >
              {name}
            </button>
          ))}
        </div>
        <motion.ul
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-3 gap-4"
        >
          {sectors[active].map((item) => (
            <li key={item} className="p-4 border rounded-lg bg-white dark:bg-gray-800">
              {item}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
