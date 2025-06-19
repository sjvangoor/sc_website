'use client';
import { motion } from 'framer-motion';

const reasons = [
  { icon: '💡', text: 'Frisse blik van getalenteerde studenten' },
  { icon: '⚡', text: 'Snelle en flexibele inzet' },
  { icon: '💶', text: 'Hoge kwaliteit voor een scherpe prijs' },
];

export default function Why() {
  return (
    <section id="why" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Waarom Student Consultant</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{r.icon}</div>
              <p>{r.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
