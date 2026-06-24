"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Filter, Grid, List, Search } from "lucide-react";
import ProductCard from "@/components/ProductCard";

const allProducts = [
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
    category: "pashmina",
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
    category: "segi-empat",
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
    category: "instan",
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
    category: "pashmina",
  },
  {
    id: 5,
    name: "Segi Empat Maxmara",
    price: 159000,
    originalPrice: 210000,
    image: "◻️",
    colors: ["#E8DFD0", "#D9C9B0", "#C9B08F"],
    rating: 4.8,
    reviews: 89,
    badge: "Popular",
    category: "segi-empat",
  },
  {
    id: 6,
    name: "Instan Plisket Modern",
    price: 139000,
    originalPrice: 179000,
    image: "⚡",
    colors: ["#FAF8F5", "#F5E6E8", "#E8DFD0"],
    rating: 4.7,
    reviews: 64,
    badge: "New",
    category: "instan",
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "Semua Produk" },
    { id: "pashmina", name: "Pashmina" },
    { id: "segi-empat", name: "Segi Empat" },
    { id: "instan", name: "Instan" },
  ];

  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-soft pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">
            Semua Produk
          </h1>
          <p className="text-gray-600 text-lg">
            Temukan hijab premium pilihan Anda
          </p>
        </motion.div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-400"
            />
          </div>

          {/* Category Filters and View Toggle */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.id
                      ? "bg-primary-600 text-white"
                      : "bg-white text-gray-700 hover:bg-primary-50"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg ${
                  viewMode === "grid"
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg ${
                  viewMode === "list"
                    ? "bg-primary-600 text-white"
                    : "bg-white text-gray-700"
                }`}
              >
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div
          className={`grid gap-8 ${
            viewMode === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
              : "grid-cols-1"
          }`}
        >
          {filteredProducts.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              viewMode={viewMode}
            />
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">
              Produk tidak ditemukan
            </h3>
            <p className="text-gray-600">
              Coba kata kunci lain atau ubah filter pencarian
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
