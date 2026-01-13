import { Metadata } from "next";
import { Award, Target, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Tentang Kami - PT Trisna Wiratama",
  description: "Profil perusahaan PT Trisna Wiratama, visi misi, dan komitmen kami dalam penyediaan alat kesehatan dan laboratorium berkualitas.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-neutral mb-4">Tentang Kami</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mengenal lebih dekat PT Trisna Wiratama, mitra strategis Anda dalam pemenuhan kebutuhan medis dan laboratorium.
          </p>
        </div>
      </div>

      {/* Profile Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Office Building"
                className="rounded-lg shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-neutral mb-6">Profil Perusahaan</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-justify">
                <p>
                  <strong>PT TRISNA WIRATAMA</strong> adalah perusahaan yang bergerak di bidang distribusi alat kesehatan, perlengkapan laboratorium, dan perdagangan umum (general trade). Didirikan dengan semangat untuk berkontribusi dalam peningkatan kualitas layanan kesehatan di Indonesia, kami telah tumbuh menjadi mitra terpercaya bagi berbagai rumah sakit, klinik, laboratorium, dan institusi penelitian.
                </p>
                <p>
                  Kami memahami bahwa akurasi dan kualitas adalah hal mutlak dalam dunia medis. Oleh karena itu, kami hanya bekerjasama dengan produsen terkemuka yang memiliki standar kualitas internasional.
                </p>
                <p>
                  Lebih dari sekadar distributor, kami memposisikan diri sebagai konsultan dan mitra yang memberikan solusi end-to-end, mulai dari konsultasi pemilihan produk, instalasi, pelatihan penggunaan, hingga layanan purna jual yang responsif.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Eye className="h-10 w-10 text-secondary mr-4" />
                <h2 className="text-3xl font-bold">Visi Kami</h2>
              </div>
              <p className="text-blue-100 text-lg leading-relaxed">
                "Menjadi perusahaan penyedia alat kesehatan dan laboratorium terdepan di Indonesia yang dikenal karena kualitas produk, keunggulan layanan, dan integritas bisnis."
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Target className="h-10 w-10 text-secondary mr-4" />
                <h2 className="text-3xl font-bold">Misi Kami</h2>
              </div>
              <ul className="space-y-4 text-blue-100">
                <li className="flex items-start">
                  <span className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Menyediakan produk kesehatan dan laboratorium berkualitas tinggi dengan teknologi terkini.
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Memberikan pelayanan prima dan solusi yang tepat guna bagi setiap pelanggan.
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Membangun hubungan kemitraan jangka panjang yang saling menguntungkan.
                </li>
                <li className="flex items-start">
                  <span className="bg-secondary h-2 w-2 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Mengembangkan sumber daya manusia yang profesional dan berintegritas.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-neutral">Nilai-Nilai Perusahaan</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Kualitas Terjamin</h3>
              <p className="text-gray-600">
                Kami menjamin keaslian dan standar mutu setiap produk yang kami distribusikan.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-orange-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Pelayanan Profesional</h3>
              <p className="text-gray-600">
                Tim kami siap membantu Anda dengan respon cepat dan solusi yang solutif.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="mx-auto bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-neutral" />
              </div>
              <h3 className="text-xl font-bold mb-3">Integritas</h3>
              <p className="text-gray-600">
                Kejujuran dan transparansi adalah fondasi bisnis kami dalam membangun kepercayaan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
