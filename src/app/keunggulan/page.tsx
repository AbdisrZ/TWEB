import { Metadata } from "next";
import { CheckCircle, Shield, Truck, Users, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Keunggulan Kami - PT Trisna Wiratama",
  description: "Alasan mengapa PT Trisna Wiratama adalah mitra terbaik untuk kebutuhan alat kesehatan dan laboratorium Anda.",
};

export default function AdvantagesPage() {
  const advantages = [
    {
      title: "Kualitas Terjamin",
      desc: "Produk yang kami distribusikan berasal dari prinsipal terkemuka dengan sertifikasi internasional (ISO, CE, FDA).",
      icon: <Award className="h-12 w-12 text-primary" />
    },
    {
      title: "Layanan Purna Jual",
      desc: "Tim teknis kami siap memberikan dukungan instalasi, training, dan maintenance berkala.",
      icon: <Shield className="h-12 w-12 text-secondary" />
    },
    {
      title: "Pengiriman Tepat Waktu",
      desc: "Sistem logistik yang terintegrasi memastikan barang sampai di lokasi Anda dengan aman dan on-time.",
      icon: <Truck className="h-12 w-12 text-neutral" />
    },
    {
      title: "Tim Profesional",
      desc: "Didukung oleh tenaga ahli yang berpengalaman di bidang medis dan laboratorium.",
      icon: <Users className="h-12 w-12 text-primary" />
    },
    {
      title: "Harga Kompetitif",
      desc: "Memberikan penawaran harga terbaik dengan value for money yang tinggi.",
      icon: <CheckCircle className="h-12 w-12 text-secondary" />
    },
    {
      title: "Respon Cepat",
      desc: "Layanan customer service yang responsif untuk menjawab setiap kebutuhan Anda.",
      icon: <Clock className="h-12 w-12 text-neutral" />
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Keunggulan Kami</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan nilai lebih bagi setiap mitra bisnis dan pelanggan.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((adv, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100">
              <div className="mb-6">{adv.icon}</div>
              <h3 className="text-xl font-bold text-neutral mb-3">{adv.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {adv.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
