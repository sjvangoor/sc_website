'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const team = [
  {
    name: 'Anna',
    role: 'Project Manager',
    img: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
    bio: 'Expert in operations',
  },
  {
    name: 'Bram',
    role: 'Consultant',
    img: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=200&q=80',
    bio: 'Strategisch denker',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Over ons</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition"
            >
              <Image src={member.img} alt={member.name} width={200} height={200} className="rounded-full mx-auto" />
              <h3 className="text-xl font-semibold mt-4 text-center">{member.name}</h3>
              <p className="text-center text-gray-600 dark:text-gray-300">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 text-center">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
