"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Pashmina Silk Premium",
    price: 189000,
    originalPrice: 250000,
    image: "🧣",
    colors: ["#E8DFD0", "#F5E6E8", "#D9C9B0", "#C9B08F"],
    rating: 4.9,
    reviews: 128,
    badge: "Best Seller",
  },
  {
    id: 2,
    name: "Segi Empat Voal Luxury",
    price: 149000,
    originalPrice: 199000,
    image: "◻️",
    colors: ["#FAF8F5", "#E8DFD0", "#F5E6E8"],
    rating: 4.8,
    reviews: 95,
    badge: "New",
  },
  {
    id: 3,
    name: "Instan Ceruti Elegant",
    price: 129000,
    originalPrice: 169000,
    image: "⚡",
    colors: ["#D9C9B0", "#C9B08F", "#B89770"],
    rating: 4.7,
    reviews: 76,
    badge: "Popular",
  },
  {
    id: 4,
    name: "Pashmina Cotton Premium",
    price: 169000,
    originalPrice: 220000,
    image: "🧣",
    colors: ["#FAF8F5", "#E8DFD0", "#D9C9B0"],
    rating: 4.9,
    reviews: 142,
    badge: "Best Seller",
  },
];

export default function FeaturedProducts() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <section className="py-20 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">
            Produk Pilihan
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Koleksi terbaik kami dengan kualitas premium dan desain elegan
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group"
            >
              <div className="glass-card rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300">
                {/* Product Image */}
                <div className="relative bg-gradient-to-br from-primary-100 to-softPink h-64 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      scale: hoveredProduct === product.id ? 1.1 : 1,
                      rotate: hoveredProduct === product.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-8xl"
                  >
                    {product.image}
                  </motion.div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProduct === product.id ? 1 : 0,
                    }}
                    className="absolute top-4 right-4 flex flex-col space-y-2"
                  >
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft hover:bg-gold hover:text-white transition-colors">
                      <Heart className="w-5 h-5" />
                    </button>
                    <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-soft hover:bg-gold hover:text-white transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                  </motion.div>

                  {/* Discount Badge */}
                  {product.originalPrice > product.price && (
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
                        -
                        {Math.round(
                          ((product.originalPrice - product.price) /
                            product.originalPrice) *
                            100
                        )}
                        %
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <h3 className="font-semibold text-lg text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex items-center">
                      <span className="text-gold text-sm">★</span>
                      <span className="text-sm font-medium text-gray-700 ml-1">
                        {product.rating}
                      </span>
                    </div>
                    <span className="text-gray-400 text-sm">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Colors */}
                  <div className="flex space-x-2 mb-4">
                    {product.colors.map((color, idx) => (
                      <button
                        key={idx}
                        className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-primary-400 transition-colors"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-xl font-bold text-primary-700">
                        {formatPrice(product.price)}
                      </div>
                      {product.originalPrice > product.price && (
                        <div className="text-sm text-gray-400 line-through">
                          {formatPrice(product.originalPrice)}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    <span>Tambah ke Keranjang</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className="btn-primary inline-flex items-center">
            Lihat Semua Produk
          </button>
        </motion.div>
      </div>
    </section>
  );
}
