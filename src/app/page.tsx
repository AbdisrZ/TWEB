import Link from "next/link";
import { ArrowRight, CheckCircle, FlaskConical, Stethoscope, Briefcase, ShieldCheck, Award, FileCheck } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-primary text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark to-primary opacity-90 z-0"></div>
        {/* Updated Background Image: Medical Laboratory */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Solusi Terpercaya Kebutuhan <br className="hidden md:block" />
            <span className="text-secondary">Medis & Laboratorium</span> Anda
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mb-10 leading-relaxed">
            PT Trisna Wiratama menyediakan peralatan medis, suplai laboratorium, dan layanan general trade berkualitas tinggi untuk rumah sakit, klinik, dan institusi penelitian di seluruh Indonesia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/produk"
              className="bg-secondary hover:bg-secondary-dark text-white font-semibold py-3 px-8 rounded-md transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
            >
              Lihat Produk Kami
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/kontak"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-md transition-all flex items-center justify-center"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Trust & Certification Banner */}
      <section className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-center">
              <div className="flex items-center gap-3 group">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                   <ShieldCheck className="h-8 w-8 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Terlisensi</p>
                  <p className="text-sm font-bold text-neutral">IDAK (Izin Distribusi Alat Kesehatan)</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                   <Award className="h-8 w-8 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Tersertifikasi</p>
                  <p className="text-sm font-bold text-neutral">CDAKB (Cara Distribusi Alkes yang Baik)</p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:shadow-md transition-shadow">
                   <FileCheck className="h-8 w-8 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-semibold uppercase">Terintegrasi</p>
                  <p className="text-sm font-bold text-neutral">INAPROC / LPSE Ready</p>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-secondary font-bold uppercase tracking-wider text-sm mb-2">Tentang Kami</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-neutral mb-6">
                Mitra Profesional untuk Kemajuan Fasilitas Kesehatan Anda
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                PT Trisna Wiratama hadir sebagai jawaban atas kebutuhan peralatan medis dan laboratorium yang berkualitas. Dengan pengalaman dan jaringan distribusi yang luas, kami berkomitmen untuk memberikan produk terbaik dengan layanan purna jual yang memuaskan.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Produk tersertifikasi IDAK & CDAKB</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Layanan purna jual dan dukungan teknis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-primary mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Pengiriman cepat dan aman ke seluruh Indonesia</span>
                </li>
              </ul>
              <Link
                href="/tentang-kami"
                className="text-primary font-semibold hover:text-secondary transition-colors inline-flex items-center"
              >
                Pelajari Lebih Lanjut <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/10 rounded-xl transform rotate-3"></div>
              {/* Updated Intro Image: High quality medical equipment shot */}
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Medical Equipment" 
                className="relative rounded-lg shadow-xl w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services/Products Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-neutral mb-4">Solusi Lengkap Bisnis Anda</h2>
            <p className="text-gray-600">
              Kami menyediakan berbagai kategori produk untuk memenuhi kebutuhan operasional fasilitas kesehatan dan laboratorium Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-primary group">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <FlaskConical className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-neutral mb-3">Laboratory Supply</h3>
              <p className="text-gray-600 mb-6">
                Menyediakan berbagai reagen, glassware, dan instrumen laboratorium presisi tinggi untuk kebutuhan riset dan diagnostik.
              </p>
              <Link href="/produk/laboratory-supply" className="text-primary font-medium hover:text-secondary flex items-center">
                Lihat Katalog <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-secondary group">
              <div className="bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary transition-colors">
                <Stethoscope className="h-8 w-8 text-secondary group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-neutral mb-3">Medical Equipment</h3>
              <p className="text-gray-600 mb-6">
                Peralatan medis canggih untuk rumah sakit dan klinik, mulai dari alat diagnostik hingga perlengkapan ruang operasi.
              </p>
              <Link href="/produk/medical-equipment" className="text-secondary font-medium hover:text-primary flex items-center">
                Lihat Katalog <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-8 border-t-4 border-neutral group">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-neutral transition-colors">
                <Briefcase className="h-8 w-8 text-neutral group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-neutral mb-3">General Trade</h3>
              <p className="text-gray-600 mb-6">
                Layanan pengadaan umum untuk mendukung operasional bisnis dan institusi Anda dengan efisiensi tinggi.
              </p>
              <Link href="/produk/general-trade" className="text-neutral font-medium hover:text-secondary flex items-center">
                Lihat Layanan <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Siap Meningkatkan Standar Fasilitas Anda?
          </h2>
          <p className="text-blue-100 text-lg mb-10">
            Hubungi tim ahli kami untuk konsultasi gratis dan penawaran terbaik sesuai kebutuhan spesifik institusi Anda.
          </p>
          <Link
            href="/kontak"
            className="inline-block bg-secondary hover:bg-secondary-dark text-white font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
          >
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>
    </div>
  );
}
