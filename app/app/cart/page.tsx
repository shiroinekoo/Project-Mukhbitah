"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react";
import Link from "next/link";

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  color: string;
  quantity: number;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "Pashmina Silk Premium",
      price: 189000,
      image: "🧣",
      color: "#E8DFD0",
      quantity: 2,
    },
    {
      id: 2,
      name: "Segi Empat Voal Luxury",
      price: 149000,
      image: "◻️",
      color: "#FAF8F5",
      quantity: 1,
    },
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 200000 ? 0 : 15000;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-soft pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="text-8xl mb-6">🛒</div>
            <h2 className="text-3xl font-playfair font-bold text-primary-900 mb-4">
              Keranjang Anda Kosong
            </h2>
            <p className="text-gray-600 mb-8">
              Belum ada produk di keranjang. Yuk, mulai belanja!
            </p>
            <Link href="/products" className="btn-primary inline-flex items-center">
              Mulai Belanja
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-soft pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-playfair font-bold text-primary-900 mb-2">
            Keranjang Belanja
          </h1>
          <p className="text-gray-600">{cartItems.length} item dalam keranjang</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6"
              >
                <div className="flex items-center space-x-6">
                  {/* Product Image */}
                  <div
                    className="w-24 h-24 bg-gradient-to-br from-primary-100 to-softPink rounded-xl flex items-center justify-center text-4xl flex-shrink-0"
                  >
                    {item.image}
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-primary-900 mb-2">
                      {item.name}
                    </h3>
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="text-sm text-gray-600">Warna:</span>
                      <div
                        className="w-6 h-6 rounded-full border-2 border-gray-200"
                        style={{ backgroundColor: item.color }}
                      />
                    </div>
                    <div className="text-xl font-bold text-primary-700">
                      {formatPrice(item.price)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="w-8 h-8 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4 text-primary-700" />
                    </button>
                    <span className="text-lg font-semibold w-8 text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="w-8 h-8 bg-primary-100 hover:bg-primary-200 rounded-full flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4 text-primary-700" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <Trash2 className="w-5 h-5 text-red-500" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h2 className="text-2xl font-playfair font-bold text-primary-900 mb-6">
                Ringkasan Pesanan
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span>Pengiriman</span>
                  <span className="font-semibold">
                    {shipping === 0 ? "GRATIS" : formatPrice(shipping)}
                  </span>
                </div>
                {subtotal < 200000 && (
                  <div className="text-sm text-primary-600 bg-primary-50 p-3 rounded-lg">
                    💡 Belanja {formatPrice(200000 - subtotal)} lagi untuk gratis
                    ongkir!
                  </div>
                )}
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between text-xl font-bold text-primary-900">
                    <span>Total</span>
                    <span>{formatPrice(total)}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/checkout"
                className="btn-primary w-full inline-flex items-center justify-center mb-4"
              >
                <ShoppingBag className="w-5 h-5 mr-2" />
                Checkout
              </Link>

              <Link
                href="/products"
                className="btn-secondary w-full inline-flex items-center justify-center"
              >
                Lanjut Belanja
              </Link>

              {/* Trust Badges */}
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span className="text-xl">✓</span>
                  <span>Pembayaran Aman</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span className="text-xl">🚚</span>
                  <span>Pengiriman Cepat</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-gray-600">
                  <span className="text-xl">🔄</span>
                  <span>7 Hari Pengembalian</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
