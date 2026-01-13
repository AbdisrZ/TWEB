import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Artikel & Berita - PT Trisna Wiratama",
  description: "Informasi terbaru seputar teknologi kesehatan, tips laboratorium, dan berita perusahaan.",
};

export default function BlogPage() {
  const articles = [
    {
      title: "Mengenal Pentingnya Kalibrasi Alat Laboratorium",
      excerpt: "Kalibrasi rutin sangat penting untuk menjaga akurasi hasil pemeriksaan laboratorium...",
      date: "12 Jan 2026",
      category: "Edukasi",
      image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Tren Teknologi Medis Tahun 2026",
      excerpt: "Perkembangan AI dan IoT semakin mendominasi perangkat medis modern untuk diagnosis yang lebih cepat...",
      date: "10 Jan 2026",
      category: "Teknologi",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Tips Memilih Mikroskop untuk Laboratorium Klinik",
      excerpt: "Panduan lengkap memilih mikroskop yang tepat sesuai dengan kebutuhan pemeriksaan rutin...",
      date: "05 Jan 2026",
      category: "Tips",
      image: "https://images.unsplash.com/photo-1582719471384-3c6377fe9e61?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-neutral mb-4">Artikel & Berita</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dapatkan wawasan terbaru seputar dunia kesehatan dan laboratorium.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={article.image} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{article.category}</span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h2 className="text-xl font-bold text-neutral mb-3 hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {article.excerpt}
                </p>
                <Link href="#" className="text-primary font-medium hover:text-secondary text-sm">
                  Baca Selengkapnya &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
