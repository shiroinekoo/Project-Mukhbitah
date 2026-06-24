"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Kami mencintai apa yang kami lakukan dan berkomitmen memberikan yang terbaik",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality",
      description: "Hanya bahan premium dan craftsmanship terbaik untuk setiap produk",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "Membangun komunitas muslimah yang saling mendukung dan menginspirasi",
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Innovation",
      description: "Terus berinovasi dalam desain dan teknologi untuk pengalaman terbaik",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-soft pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary-900 mb-6">
            Tentang Mukhbitah
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lebih dari sekadar hijab, kami menghadirkan elegance, comfort, dan
            confidence untuk setiap muslimah modern.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-playfair font-bold text-primary-900">
              Cerita Kami
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Mukhbitah lahir dari keinginan sederhana: memberikan hijab berkualitas
              premium yang tidak hanya indah dipandang, tetapi juga nyaman dipakai
              sepanjang hari.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dimulai pada tahun 2020, kami telah melayani lebih dari 10,000
              muslimah di seluruh Indonesia. Setiap hijab kami dibuat dengan
              perhatian detail dan menggunakan bahan pilihan terbaik.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kami percaya bahwa setiap muslimah berhak merasakan kombinasi
              sempurna antara style, comfort, dan quality. Itulah mengapa kami
              terus berinovasi dan mendengarkan feedback dari komunitas kami.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass-card rounded-3xl p-8 h-full flex items-center justify-center">
              <div className="text-center space-y-6">
                <div className="text-8xl">🧕</div>
                <h3 className="text-2xl font-playfair font-bold text-primary-900">
                  Elegance in Every Layer
                </h3>
                <p className="text-gray-600">
                  Tagline kami bukan hanya kata-kata, tapi komitmen kami untuk
                  setiap produk yang kami ciptakan.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-playfair font-bold text-primary-900 text-center mb-12">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-200 to-softPink rounded-full flex items-center justify-center mx-auto mb-4 text-primary-700">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-200 to-softPink rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-primary-900 mb-2">Kualitas Terbaik</div>
              <div className="text-gray-600 text-sm">Bahan pilihan untuk kenyamanan maksimal</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-200 to-softPink rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <div className="font-semibold text-primary-900 mb-2">Beragam Pilihan</div>
              <div className="text-gray-600 text-sm">Berbagai model dan warna menarik</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-200 to-softPink rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-primary-900 mb-2">Pelayanan Ramah</div>
              <div className="text-gray-600 text-sm">Siap membantu Anda menemukan kerudung yang tepat</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
