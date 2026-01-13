import { Metadata } from "next";
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Hubungi Kami - PT Trisna Wiratama",
  description: "Kontak PT Trisna Wiratama. Hubungi kami untuk penawaran harga alat kesehatan, laboratorium, dan general trade.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-neutral text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Hubungi Kami</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Kami siap membantu kebutuhan medis dan laboratorium Anda. Silakan hubungi kami melalui formulir di bawah ini atau melalui kontak langsung.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-neutral mb-6">Kirim Pesan</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    placeholder="email@perusahaan.com"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon / WA</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    placeholder="+62..."
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Perusahaan / Instansi</label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                    placeholder="Nama Instansi"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subjek</label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow bg-white"
                >
                  <option>Permintaan Penawaran (Quotation)</option>
                  <option>Konsultasi Produk</option>
                  <option>Layanan Purna Jual</option>
                  <option>Kerjasama Distributor</option>
                  <option>Lainnya</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Pesan</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-shadow"
                  placeholder="Tuliskan detail kebutuhan Anda..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-secondary hover:bg-secondary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-neutral mb-8">Informasi Kontak</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral text-lg">Alamat Kantor</h3>
                  <p className="text-gray-600 mt-1">
                    Jl. Contoh No. 123, Kel. Suka Maju, Kec. Kebayoran Baru,<br />
                    Jakarta Selatan, DKI Jakarta 12345
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-50 p-3 rounded-full mr-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral text-lg">Telepon</h3>
                  <p className="text-gray-600 mt-1">+62 21 1234 5678 (Office)</p>
                  <p className="text-gray-600">+62 812 3456 7890 (WhatsApp Sales)</p>
                  <a 
                    href="https://wa.me/6281234567890" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center mt-2 text-green-600 font-semibold hover:underline"
                  >
                    <MessageCircle className="h-4 w-4 mr-1" /> Chat WhatsApp
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-neutral" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral text-lg">Email</h3>
                  <p className="text-gray-600 mt-1">info@trisnawiratama.co.id (Umum)</p>
                  <p className="text-gray-600">sales@trisnawiratama.co.id (Penjualan)</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-50 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-neutral text-lg">Jam Operasional</h3>
                  <p className="text-gray-600 mt-1">Senin - Jumat: 08.00 - 17.00 WIB</p>
                  <p className="text-gray-600">Sabtu & Minggu: Tutup</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-12 rounded-xl overflow-hidden shadow-md h-[300px] border border-gray-200 relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.2!2d106.8!3d-6.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTInMDAuMCJTIDEwNsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sid!4v1600000000000!5m2!1sen!2sid" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen={true} 
                 loading="lazy"
                 title="Google Maps"
               ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
