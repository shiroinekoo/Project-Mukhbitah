"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const categories = [
  {
    name: "Pashmina",
    description: "Elegan dan serbaguna",
    image: "🧣",
    color: "from-primary-200 to-primary-300",
    href: "/categories/pashmina",
  },
  {
    name: "Segi Empat",
    description: "Klasik dan timeless",
    image: "◻️",
    color: "from-softPink to-primary-200",
    href: "/categories/segi-empat",
  },
  {
    name: "Instan",
    description: "Praktis dan stylish",
    image: "⚡",
    color: "from-primary-300 to-softPink",
    href: "/categories/instan",
  },
];

export default function CategorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">
            Kategori Pilihan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Temukan hijab yang sesuai dengan gaya dan kebutuhan Anda
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Link href={category.href}>
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group relative overflow-hidden rounded-3xl shadow-soft hover:shadow-soft-lg transition-all duration-300"
                >
                  <div
                    className={`bg-gradient-to-br ${category.color} p-8 h-80 flex flex-col items-center justify-center text-center`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="text-8xl mb-6"
                    >
                      {category.image}
                    </motion.div>
                    <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-2">
                      {category.name}
                    </h3>
                    <p className="text-primary-700">{category.description}</p>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-primary-900/10 backdrop-blur-sm flex items-center justify-center"
                    >
                      <span className="text-white font-semibold bg-primary-700 px-6 py-3 rounded-full">
                        Lihat Koleksi
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
