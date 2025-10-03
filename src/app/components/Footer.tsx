"use client";

export default function Footer() {
  return (
    <footer className="bg-[#E63946] text-white pt-12 pb-6 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold mb-3">Mei Dian</h3>
          <p className="text-red-100 text-sm leading-relaxed">
            Dimsum homemade fresh setiap hari, sehat & tanpa pengawet.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-3">Menu Cepat</h4>
          <ul className="space-y-2 text-red-100 text-sm">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
            <li><a href="#order" className="hover:text-white transition">Pesan</a></li>
          </ul>
        </div>

        {/* Sosial Media */}
        <div>
          <h4 className="font-semibold mb-3">Ikuti Kami</h4>
          <ul className="space-y-2 text-red-100 text-sm">
            <li><a href="https://www.instagram.com/meidian.id/" target="_blank" className="hover:text-white transition">Instagram</a></li>
            <li><a href="https://www.tiktok.com/@meidian.id" target="_blank" className="hover:text-white transition">TikTok</a></li>
            <li><a href="https://maps.app.goo.gl/S3p4n1L5KgcxrQTa8" target="_blank" className="hover:text-white transition">Google Maps</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-red-300 mt-10 pt-6 text-center text-red-100 text-sm">
        © {new Date().getFullYear()} Mei Dian - All rights reserved.
      </div>
    </footer>
  );
}
