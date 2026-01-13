import Link from "next/link";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              <span className="text-primary-light">PT TRISNA</span> WIRATAMA
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Mitra terpercaya untuk kebutuhan Laboratory Supply, Medical Equipment, dan General Trade di Indonesia. Kami berkomitmen menyediakan produk berkualitas tinggi dengan standar internasional.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tentang-kami" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/produk" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Produk & Layanan
                </Link>
              </li>
              <li>
                <Link href="/keunggulan" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Keunggulan Kami
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Artikel & Berita
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2 inline-block">
              Layanan Kami
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/produk/laboratory-supply" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Laboratory Supply
                </Link>
              </li>
              <li>
                <Link href="/produk/medical-equipment" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  Medical Equipment
                </Link>
              </li>
              <li>
                <Link href="/produk/general-trade" className="text-gray-400 hover:text-secondary transition-colors text-sm">
                  General Trade
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2 inline-block">
              Hubungi Kami
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-secondary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Jl. Contoh No. 123, Jakarta Selatan, DKI Jakarta, Indonesia 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+62 21 1234 5678</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-secondary mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">info@trisnawiratama.co.id</span>
              </li>
            </ul>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PT Trisna Wiratama. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
