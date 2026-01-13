"use client";

import { useState } from "react";
import Link from "next/link";
import { CheckCircle, ArrowLeft, ChevronRight } from "lucide-react";

export default function MedicalEquipmentPage() {
  const [activeCategory, setActiveCategory] = useState("Semua Produk");

  const categories = [
    "Semua Produk",
    "Diagnostic Imaging",
    "Patient Monitoring",
    "Surgical Equipment",
    "Hospital Furniture",
    "Therapeutic"
  ];

  const products = [
    { name: "Patient Monitor", category: "Patient Monitoring", image: "https://images.unsplash.com/photo-1551076805-e1869033e561?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "USG 4D Color Doppler", category: "Diagnostic Imaging", image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Operating Lamp LED", category: "Surgical Equipment", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Hospital Bed Electric", category: "Hospital Furniture", image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "ECG Machine", category: "Diagnostic Imaging", image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Infusion Pump", category: "Therapeutic", image: "https://images.unsplash.com/photo-1583912267670-6575ad43263d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "X-Ray Machine Portable", category: "Diagnostic Imaging", image: "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
    { name: "Electrosurgical Unit", category: "Surgical Equipment", image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60" },
  ];

  const filteredProducts = activeCategory === "Semua Produk" 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-orange-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/produk" className="inline-flex items-center text-gray-500 hover:text-secondary mb-6 text-sm transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Kembali ke Katalog
          </Link>
          <h1 className="text-4xl font-bold text-secondary mb-4">Medical Equipment</h1>
          <p className="text-gray-600 max-w-2xl">
            Meningkatkan standar pelayanan kesehatan dengan peralatan medis yang handal, canggih, dan mudah dioperasikan.
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
                          ? "bg-secondary text-white shadow-md transform translate-x-1" 
                          : "bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-secondary"}
                      `}
                    >
                      {cat}
                      {activeCategory === cat && <ChevronRight className="h-4 w-4 hidden md:block" />}
                    </button>
                  ))}
                </div>
                
                <div className="mt-8 bg-orange-50 p-6 rounded-xl border border-orange-100 hidden md:block">
                  <h4 className="font-bold text-sm mb-2 text-secondary">Layanan Teknis</h4>
                  <p className="text-sm text-gray-600 mb-4">Kami menyediakan instalasi dan training penggunaan alat secara profesional.</p>
                  <Link href="/kontak" className="text-sm font-bold text-secondary hover:text-secondary-dark underline">
                    Hubungi Teknisi
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
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold text-secondary shadow-sm">
                          {product.category}
                        </div>
                      </div>
                      <div className="p-5">
                        <h3 className="text-lg font-bold text-neutral mb-2 line-clamp-2 min-h-[3.5rem]">{product.name}</h3>
                        <Link 
                          href="/kontak" 
                          className="w-full mt-2 inline-flex justify-center items-center px-4 py-2 border border-secondary text-secondary hover:bg-secondary hover:text-white rounded-lg text-sm font-medium transition-colors"
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
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">AKL Registered</h3>
              <p className="text-gray-400 text-sm">Semua alat terdaftar di Kemenkes RI.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Sparepart Ready</h3>
              <p className="text-gray-400 text-sm">Jaminan ketersediaan suku cadang minimal 5 tahun.</p>
            </div>
            <div className="p-6 rounded-lg bg-white/5 backdrop-blur-sm">
              <CheckCircle className="h-10 w-10 text-secondary mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">User Training</h3>
              <p className="text-gray-400 text-sm">Pelatihan intensif untuk operator medis.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
