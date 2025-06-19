'use client';
import { motion } from 'framer-motion';

const services = [
  { title: 'Strategie', desc: 'Van marktanalyse tot implementatie' },
  { title: 'Marketing', desc: 'Data-gedreven campagnes' },
  { title: 'Operations', desc: 'Procesoptimalisatie en automatisering' },
];

export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Servicedomeinen</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg hover:shadow-lg transition bg-white dark:bg-gray-800"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
