"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Siti Nurhaliza",
    role: "Ibu Rumah Tangga",
    image: "👩",
    rating: 5,
    text: "Kualitas hijab dari Mukhbitah benar-benar premium! Bahannya lembut, nyaman dipakai seharian, dan tidak mudah kusut. Sangat puas!",
  },
  {
    id: 2,
    name: "Aisyah Rahman",
    role: "Profesional",
    image: "👩‍💼",
    rating: 5,
    text: "Desainnya elegan dan cocok untuk acara formal maupun casual. Pelayanan customer service juga sangat responsif. Recommended!",
  },
  {
    id: 3,
    name: "Fatimah Zahra",
    role: "Mahasiswi",
    image: "👩‍🎓",
    rating: 5,
    text: "Harganya worth it banget dengan kualitas yang didapat. Warnanya juga cantik-cantik dan sesuai dengan foto. Pasti order lagi!",
  },
];

export default function TestimonialSection() {
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
            Testimoni Pelanggan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Apa kata mereka yang sudah merasakan kualitas produk kami
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-gold text-gold"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-200 to-softPink rounded-full flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-primary-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="text-4xl mb-2">✓</div>
            <div className="font-semibold text-primary-900">100% Original</div>
            <div className="text-sm text-gray-600">Produk Asli</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🚚</div>
            <div className="font-semibold text-primary-900">Free Shipping</div>
            <div className="text-sm text-gray-600">Min. Pembelian 200K</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">🔄</div>
            <div className="font-semibold text-primary-900">Easy Return</div>
            <div className="text-sm text-gray-600">7 Hari Pengembalian</div>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-2">💳</div>
            <div className="font-semibold text-primary-900">Secure Payment</div>
            <div className="text-sm text-gray-600">Pembayaran Aman</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
