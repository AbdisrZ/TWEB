"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";

export default function GeneralTradePage() {
  const [activeCategory, setActiveCategory] = useState("Semua Produk");

  const categories = [
    "Semua Produk",
    "Safety Equipment",
    "Office Supplies",
    "Industrial Tools",
    "Hygiene & Cleaning",
    "Technology"
  ];

  const products = [
    { name: "APD Set Lengkap", category: "Safety Equipment", image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Office Furniture", category: "Office Supplies", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Cleaning Supplies", category: "Hygiene & Cleaning", image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Industrial Tools", category: "Industrial Tools", image: "https://images.unsplash.com/photo-1581092921461-eab62e97a782?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "IT Equipment", category: "Technology", image: "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Chemical Supplies", category: "Industrial Tools", image: "https://images.unsplash.com/photo-1605557202138-097824c3f550?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Safety Helmets", category: "Safety Equipment", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Stationery Set", category: "Office Supplies", image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  ];

  const filteredProducts = activeCategory === "Semua Produk" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/produk" className="inline-flex items-center text-gray-500 hover:text-neutral mb-6 text-sm transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Katalog
          </Link>
          <h1 className="text-4xl font-bold text-neutral mb-4">General Trade</h1>
          <p className="text-gray-600 max-w-2xl">
            Solusi pengadaan barang yang fleksibel dan efisien untuk mendukung operasional harian kantor dan industri Anda.
          </p>
        </div>
      </div>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Sidebar / Categories Tabs */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <h3 className="font-bold text-lg mb-4 text-neutral px-4 md:px-0">Kategori</h3>
                <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible space-x-2 md:space-x-0 md:space-y-2 pb-4 md:pb-0 scrollbar-hide">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`
                        whitespace-nowrap px-4 py-3 rounded-lg text-sm font-medium text-left transition-all duration-200 flex items-center justify-between
                        ${activeCategory === cat 
                          ? "bg-neutral text-white shadow-md transform translate-x-1" 
                          : "bg-gray-50 text-gray-600 hover:bg-gray-200 hover:text-neutral"}
                      `}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight className="h-4 w-4 hidden md:block" />}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 bg-gray-50 p-6 rounded-xl border border-gray-200 hidden md:block">
                  <h4 className="font-bold text-sm mb-2 text-neutral">Custom Procurement</h4>
                  <p className="text-sm text-gray-600 mb-4">Butuh barang spesifik? Kami carikan untuk Anda.</p>
                  <Link href="/kontak" className="text-sm font-bold text-neutral hover:text-neutral-600 underline">
                    Hubungi Procurement
                  </Link>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="md:col-span-3">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-neutral">{activeCategory}</h2>
                <span className="text-sm text-gray-500">{filteredProducts.length} Produk ditampilkan</span>
              </div>
              
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                  {filteredProducts.map((product, idx) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group">
                      <div className="h-48 overflow-hidden bg-gray-100 relative">
                        <img 
                          src={product.image} 
                          alt={product.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-neutral shadow-sm">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-neutral mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
                        <Link 
                          href="/kontak" 
                          className="w-full mt-2 inline-flex justify-center items-center px-4 py-2 border border-neutral text-neutral hover:bg-neutral hover:text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          Minta Penawaran
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20 bg-gray-50 rounded-xl border-dashed border-2 border-gray-200">
                  <p className="text-gray-500">Belum ada produk untuk kategori ini.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Competitive Price</h3>
              <p className="text-gray-400 text-sm">Penawaran harga terbaik untuk pengadaan jumlah besar.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">On-Time Delivery</h3>
              <p className="text-gray-400 text-sm">Pengiriman tepat waktu sesuai jadwal proyek Anda.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-gray-400 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Quality Check</h3>
              <p className="text-gray-400 text-sm">Pemeriksaan kualitas ketat sebelum barang dikirim.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
