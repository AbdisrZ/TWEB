import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FlaskConical, Stethoscope, Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Produk & Layanan - PT Trisna Wiratama",
  description: "Katalog produk dan layanan PT Trisna Wiratama meliputi Laboratory Supply, Medical Equipment, dan General Trade.",
};

export default function ProductsPage() {
  const categories = [
    {
      title: "Laboratory Supply",
      description: "Solusi lengkap untuk kebutuhan laboratorium riset, klinik, dan industri. Kami menyediakan glassware, reagen, hingga instrumen analitik canggih.",
      icon: <FlaskConical className="h-12 w-12 text-primary" />,
      href: "/produk/laboratory-supply",
      color: "border-primary",
      bg: "bg-blue-50",
      items: ["Reagen Kimia & Klinis", "Glassware & Plasticware", "Mikroskop & Instrumen", "Consumables"]
    },
    {
      title: "Medical Equipment",
      description: "Peralatan medis standar rumah sakit untuk menunjang diagnosis dan perawatan pasien yang optimal. Terjamin kualitas dan ketersediaan suku cadang.",
      icon: <Stethoscope className="h-12 w-12 text-secondary" />,
      href: "/produk/medical-equipment",
      color: "border-secondary",
      bg: "bg-orange-50",
      items: ["Diagnostic Devices", "Patient Monitor", "Hospital Furniture", "Surgical Instruments"]
    },
    {
      title: "General Trade",
      description: "Layanan pengadaan umum untuk mendukung operasional bisnis Anda. Kami menangani pengadaan barang dengan efisien dan transparan.",
      icon: <Briefcase className="h-12 w-12 text-neutral" />,
      href: "/produk/general-trade",
      color: "border-neutral",
      bg: "bg-gray-100",
      items: ["Office Supplies", "Safety Equipment", "Industrial Tools", "Custom Procurement"]
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Produk & Layanan</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Temukan solusi terbaik untuk kebutuhan medis dan laboratorium Anda. Kualitas terjamin dengan dukungan layanan purna jual profesional.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, index) => (
            <div key={index} className={`bg-white rounded-xl shadow-lg overflow-hidden border-t-4 ${cat.color} hover:shadow-2xl transition-all duration-300 group`}>
              <div className={`${cat.bg} p-8 flex justify-center items-center`}>
                <div className="transform group-hover:scale-110 transition-transform duration-300">
                  {cat.icon}
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold text-neutral mb-4">{cat.title}</h2>
                <p className="text-gray-600 mb-6 min-h-[80px]">
                  {cat.description}
                </p>
                <ul className="mb-8 space-y-2">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-500">
                      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href={cat.href}
                  className="inline-flex items-center font-semibold text-primary hover:text-secondary transition-colors"
                >
                  Selengkapnya <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* CTA Download Catalog */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-neutral mb-4">Butuh Katalog Lengkap?</h2>
          <p className="text-gray-600 mb-8">
            Unduh katalog produk kami dalam format PDF atau hubungi tim sales kami untuk penawaran spesifik.
          </p>
          <div className="flex justify-center gap-4">
             <button className="bg-white border border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-md hover:bg-gray-50 transition-colors">
               Download Katalog (PDF)
             </button>
             <Link href="/kontak" className="bg-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-primary-dark transition-colors">
               Hubungi Sales
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
