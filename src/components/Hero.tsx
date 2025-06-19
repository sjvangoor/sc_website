'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center text-center gap-6 bg-[url('https://images.unsplash.com/photo-1531497865147-6c6e17ef7280?auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center"
      id="hero"
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl font-bold text-white drop-shadow"
      >
        Student Consultant
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-lg md:text-2xl text-white drop-shadow"
      >
        Jouw partner voor slimme oplossingen
      </motion.p>
      <motion.a
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        href="#contact"
        className="bg-accent text-black font-semibold px-6 py-3 rounded-full hover:brightness-110 transition"
      >
        Vraag gratis voorstel aan
      </motion.a>
    </section>
  );
}
