"use client";

import { motion } from "framer-motion";
import { ShoppingCart, Heart, Eye } from "lucide-react";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  colors: string[];
  rating: number;
  reviews: number;
  badge: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
  viewMode?: "grid" | "list";
}

export default function ProductCard({
  product,
  index,
  viewMode = "grid",
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  if (viewMode === "list") {
    return (
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: index * 0.1 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="glass-card rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300"
      >
        <div className="flex flex-col md:flex-row">
          {/* Image */}
          <div className="relative bg-gradient-to-br from-primary-100 to-softPink w-full md:w-64 h-64 flex items-center justify-center">
            <motion.div
              animate={{
                scale: isHovered ? 1.1 : 1,
                rotate: isHovered ? 5 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="text-8xl"
            >
              {product.image}
            </motion.div>
            <div className="absolute top-4 left-4">
              <span className="bg-gold text-white text-xs font-semibold px-3 py-1 rounded-full">
                {product.badge}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <div>
              <h3 className="font-semibold text-xl text-primary-900 mb-2">
                {product.name}
              </h3>
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
              <div className="flex space-x-2 mb-4">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    className="w-6 h-6 rounded-full border-2 border-gray-200 hover:border-primary-400 transition-colors"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-primary-700">
                  {formatPrice(product.price)}
                </div>
                {product.originalPrice > product.price && (
                  <div className="text-sm text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </div>
                )}
              </div>
              <div className="flex space-x-2">
                <button className="w-10 h-10 bg-primary-50 hover:bg-gold hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-primary-50 hover:bg-gold hover:text-white rounded-full flex items-center justify-center transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
                <button className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-2 rounded-lg font-medium flex items-center space-x-2 transition-colors">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Tambah</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group"
    >
      <div className="glass-card rounded-2xl overflow-hidden hover:shadow-soft-lg transition-all duration-300">
        {/* Product Image */}
        <div className="relative bg-gradient-to-br from-primary-100 to-softPink h-64 flex items-center justify-center overflow-hidden">
          <motion.div
            animate={{
              scale: isHovered ? 1.1 : 1,
              rotate: isHovered ? 5 : 0,
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
            animate={{ opacity: isHovered ? 1 : 0 }}
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
  );
}
