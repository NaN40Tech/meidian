"use client";

import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

/* ----------------- Data ----------------- */
const menus = [
  {
    name: "Shumai",
    img: "/menu/shumai.webp",
    desc: "Shumai ayam lembut dengan topping wortel segar. Dibuat fresh setiap hari tanpa pengawet.",
    waText: "Halo Kak Dian, apakah Shumai ready ya?",
  },
  {
    name: "Gyoza",
    img: "/menu/gyoza.webp",
    desc: "Gyoza isi ayam & sayur, kulit tipis lembut dengan isian melimpah. Cocok digoreng atau dikukus.",
    waText: "Halo Kak Dian, apakah Gyoza ready ya?",
  },
  {
    name: "Mi Bayam",
    img: "/menu/mibayam.webp",
    desc: "Mi sehat berwarna hijau alami dari bayam. Teksturnya kenyal, cocok untuk anak-anak.",
    waText: "Halo Kak Dian, apakah Mi Bayam ready ya?",
  },
  {
    name: "Chili Oil",
    img: "/menu/chili.webp",
    desc: "Saus cabai homemade dengan rasa gurih, pedas, dan aromatik. Pas banget buat semua menu.",
    waText: "Halo Kak Dian, apakah Chili Oil ready ya?",
  },
  {
    name: "Donat",
    img: "/menu/donat.webp",
    desc: "Donat lembut dengan taburan gula halus. Manis pas, cocok untuk camilan keluarga.",
    waText: "Halo Kak Dian, apakah Donat ready ya?",
  },
  {
    name: "Dimsum Hampers",
    img: "/menu/hampers.webp",
    desc: "Paket elegan berisi dimsum pilihan. Cocok untuk hadiah & bingkisan spesial.",
    waText: "Halo Kak Dian, apakah Dimsum Hampers ready ya?",
  },
  {
    name: "Dimsum Party Size",
    img: "/menu/party.webp",
    desc: "Porsi besar cukup untuk 8–10 orang. Pas untuk arisan, ulang tahun, dan acara keluarga.",
    waText: "Halo Kak Dian, apakah Dimsum Party Size ready ya?",
  },
  {
    name: "Frozen Dimsum",
    img: "/menu/frozen.webp",
    desc: "Dimsum beku praktis, tinggal kukus di rumah. Tetap fresh & tanpa pengawet.",
    waText: "Halo Kak Dian, apakah Frozen Dimsum ready ya?",
  },
];

const features = [
  { title: "Homemade Fresh", desc: "Dibuat setiap hari tanpa pengawet.", icon: "🥟" },
  { title: "Harga Terjangkau", desc: "Mulai Rp2.000-an aja!", icon: "💸" },
  { title: "Varian Lengkap", desc: "Shumai, Gyoza, Mi Bayam, Donat, Chili Oil.", icon: "🍜" },
  { title: "Bisa Order Online", desc: "GoFood, GrabFood, ShopeeFood & WhatsApp.", icon: "📱" },
];

/* ----------------- Reviews Section ----------------- */
function Reviews() {
  const testimonials = [
    {
      name: "Sylvi",
      text: "Enakkk.... pernah pesen gyoza dimana2... menurutku ini Badabest.... Mie nya juga enakk banget.... Pertahanin ya kak... kualitas dan rasa.. mantull",
      rating: 5,
    },
    {
      name: "Nabila",
      text: "enak banget, bumbunya semuanya pas. paling favorit mie bayamnya, dimsumnya endul banget 👍👍👍",
      rating: 5,
    },
    {
      name: "Affan",
      text: "enak banget, berdaging. rasanya gak micin. ada taste ebi nya sama daun bawang. cukup kenyang soalnya berdaging banget, gak bertepung",
      rating: 5,
    },
    {
      name: "khoirul",
      text: "enak dimsum nya ...pas hujan hujan makan yang hangat hangat plus di kasih bonus macaroni scotel terima kasih ...lancar terus",
      rating: 5,
    },
    {
      name: "S* M*******",
      text: "enak banget🥹🫶🏻 jujurr baru ini di ojol nemu harga segini tp tekstur dan rasa daging kerasa. APALAGI CHILI OILNYA sesuai sm lidahku😭",
      rating: 5,
    },
    {
      name: "irfina",
      text: "dimsumnya krenyes krenyees juga lembuut, rasanya pas, porsinya pas, sayangnya sausnya kurang byk pdhl enak loo, plis lain kali tambahin y kak, approve🤍",
      rating: 5,
    },
    {
      name: "A*** D***",
      text: "enak recommended, daging ayam sangt terasa. sepertinya kemasan cocok utk acara di rumah, apa bisa pesan bnyk secara langsung?",
      rating: 5,
    },
    {
      name: "Maya",
      text: "Hampersnya cantik banget, jadi hadiah ulang tahun teman. Semua suka!",
      rating: 5,
    },
    {
      name: "Nana",
      text: "Enak bangettt selalu repeat order, paling suka gyoza sama mie bayamnya, endulita dumdum🥹",
      rating: 5,
    },
  ];

const [start, setStart] = useState(0);
  const [visible, setVisible] = useState(3);

  // Responsif jumlah card
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Reset index kalau jumlah visible berubah
useEffect(() => {
  setStart(0);
}, [visible]);

  // Bagi jadi slide per group
  const slides = Array.from(
    { length: Math.ceil(testimonials.length / visible) },
    (_, i) => testimonials.slice(i * visible, i * visible + visible)
  );

  const prev = () => setStart((s) => Math.max(0, s - 1));
  const next = () => setStart((s) => Math.min(slides.length - 1, s + 1));

  return (
    <section id="testimonials" className="py-20 bg-[#FFF8ED]">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl font-bold mb-10 text-center text-[var(--foreground)]">
          Apa Kata Mereka
        </h2>

        {/* Wrapper */}
<div className="overflow-hidden">
  <div
    className="flex transition-transform duration-700 ease-in-out"
    style={{ transform: `translateX(-${start * 100}%)` }}
  >
    {slides.map((group, gi) => (
<div
  key={gi}
  className={`grid gap-6 w-full flex-shrink-0
    ${visible === 1 ? "grid-cols-1" : visible === 2 ? "grid-cols-2" : "grid-cols-3"}`}
>
  {group.map((t, i) => (
    <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-red-100 flex items-center justify-center text-[var(--primary)] font-bold text-lg">
        {t.name[0]}
      </div>
      <p className="italic text-gray-600 mb-4 line-clamp-4">“{t.text}”</p>
      <div className="flex justify-center text-yellow-400 mb-2">
        {"★".repeat(t.rating)}
      </div>
      <p className="font-semibold text-center">{t.name}</p>
    </div>
  ))}
</div>
    ))}
  </div>
</div>


        {/* Arrows */}
        {start > 0 && (
  <button
    onClick={prev}
    className="absolute top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:bg-gray-100 transition
               left-2 lg:left-[-2.5rem]"
    aria-label="Previous testimonials"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        )}

        {start < slides.length - 1 && (
  <button
    onClick={next}
    className="absolute top-1/2 -translate-y-1/2 bg-white border border-gray-200 rounded-full p-3 shadow-lg hover:bg-gray-100 transition
               right-2 lg:right-[-2.5rem]"
    aria-label="Next testimonials"
  >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        )}

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setStart(i)}
              className={`w-3 h-3 rounded-full transition ${
                start === i ? "bg-[var(--primary)]" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
/* ----------------- Home Page ----------------- */
export default function Home() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <main className="font-sans">
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 pt-24
        bg-gradient-to-b from-[#FFF8ED] to-white overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-radial from-[#FFD6D9]/30 via-transparent to-transparent"></div>
        <div className="absolute top-20 -left-20 w-60 h-60 bg-[var(--primary)]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-72 h-72 bg-[#FFD6D9]/40 rounded-full blur-3xl"></div>

        <div className="flex-1 relative z-10">
          <span className="inline-block bg-[var(--primary)]/10 text-[var(--primary)] font-semibold text-sm px-4 py-1 rounded-full mb-4">
            Fresh Dimsum Every Day
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-[#171717] leading-tight">
            <span className="block">Dimsum Homemade</span>
            <span className="text-[var(--primary)]">Fresh</span> &{" "}
            <span className="text-[var(--primary)]">Tanpa Pengawet</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
            Mulai Rp2.000-an, cocok untuk keluarga, arisan, ulang tahun, hingga bingkisan
          </p>

          <div className="flex gap-3 justify-center md:justify-start">
            <a
              href="#order"
              className="bg-[var(--primary)] text-white px-5 py-3 rounded-lg font-semibold shadow-md hover:bg-[#c92f3d] transition transform hover:scale-105"
            >
              Pesan
            </a>
            <a
              href="#menu"
              className="border-2 border-[var(--primary)] text-[var(--primary)] px-5 py-3 rounded-lg font-medium hover:bg-[var(--primary)] hover:text-white hover:shadow-md transition transform hover:scale-105"
            >
              Menu
            </a>
          </div>
        </div>

        <div className="flex-1 relative mt-10 md:mt-0">
          <Image
            src="/menu/shumai.webp"
            alt="Shumai Dimsum Homemade Mei Dian"
            width={420}
            height={420}
            priority
            className="mx-auto drop-shadow-xl rounded-lg"
          />
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-bold mb-10">Kenapa Harus Mei Dian?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto px-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#FFF8ED] rounded-lg shadow-md p-6 hover:shadow-lg transition transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-3">{f.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 bg-[#FFF8ED]">
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--foreground)]">
          Menu Mei Dian
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
          {menus.map((menu, i) => (
            <FlipCard
              key={i}
              menu={menu}
              index={i}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </section>

      {/* Party Size Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
          <div className="flex-1">
            <Image
            src="/menu/party.webp"
            alt="Dimsum Party Size"
            width={600}
            height={600}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto mx-auto"
            loading="lazy"
          />


          </div>
          <div className="flex-1 text-left">
            <h2 className="text-4xl font-bold text-[var(--foreground)] mb-4">
              Paket Party Size 🎉
            </h2>
            <p className="text-gray-600 mb-6">
              Pilihan tepat untuk arisan, ulang tahun, acara kantor, atau kumpul keluarga.
              Dengan isian melimpah, harga hemat, dan rasa tetap premium!
            </p>
            <ul className="space-y-2 mb-6 text-gray-700">
              <li>✔ Porsi besar (cukup untuk 8–10 orang)</li>
              <li>✔ Bisa mix Shumai & Gyoza</li>
              <li>✔ Fresh & tanpa pengawet</li>
            </ul>
            <a
              href="#order"
              className="bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#c92f3d] transition"
            >
              Pesan Sekarang
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <Reviews />

      {/* Order Section */}
      <section id="order" className="py-20 text-center bg-white border-t border-gray-100">
        <h2 className="text-3xl font-bold mb-4 text-[#171717]">Pesan Sekarang</h2>
        <p className="text-gray-600 mb-10">
          Nikmati dimsum fresh setiap hari, pesan dengan mudah lewat aplikasi favoritmu
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/6285735725784"
            target="_blank"
            className="bg-[#25D366] text-white px-5 py-3 rounded-lg font-semibold shadow-md transition hover:scale-105"
          >
            WhatsApp
          </a>
          <a
            href="https://gofood.link/a/NvMhLas"
            target="_blank"
            className="bg-[#00AA13] text-white px-5 py-3 rounded-lg font-medium shadow-md transition hover:scale-105"
          >
            GoFood
          </a>
          <a
            href="https://r.grab.com/g/2-1-6-C62YVNWWNXUGLT"
            target="_blank"
            className="bg-[#00B14F] text-white px-5 py-3 rounded-lg font-medium shadow-md transition hover:scale-105"
          >
            GrabFood
          </a>
          <a
            href="https://shopee.co.id/universal-link/now-food/shop/21880748?deep_and_deferred=1&shareChannel=copy_link"
            target="_blank"
            className="bg-[#F53D2D] text-white px-5 py-3 rounded-lg font-medium shadow-md transition hover:scale-105"
          >
            ShopeeFood
          </a>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-20 bg-[#FFF8ED]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-stretch">
          <div className="rounded-xl overflow-hidden shadow-lg h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.2273540726327!2d111.482489!3d-7.865707!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79a10cccd8b8e5%3A0xdc813c3851fc8839!2sMei%20Dian%20Dimsum%20Ayam%20Offline%20Store!5e0!3m2!1sen!2sid!4v1696086742000!5m2!1sen!2sid"
              className="w-full h-full min-h-[300px] rounded-xl"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-md flex flex-col justify-between h-full">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-[var(--foreground)]">
                Lokasi Kami
              </h2>
              <div className="w-16 h-1 bg-[var(--primary)] rounded-full mb-6"></div>

              <div className="space-y-4 text-gray-700">
                <p className="flex items-start gap-2">
                  <span className="text-2xl">📍</span>
                  <span>
                    Jl. Menur No.87, Ronowijayan <br />
                    Kec. Siman, Kabupaten Ponorogo <br />
                    Jawa Timur 63491
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span className="text-2xl">🕒</span>
                  <span>
                    Senin – Minggu <br />
                    10.00 – 21.00 WIB
                  </span>
                </p>
              </div>
            </div>

            <a
              href="https://maps.app.goo.gl/S3p4n1L5KgcxrQTa8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-block bg-[var(--primary)] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-[#c92f3d] transition w-fit"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ----------------- FlipCard Component ----------------- */
function FlipCard({
  menu,
  index,
  activeIndex,
  setActiveIndex,
}: {
  menu: (typeof menus)[0];
  index: number;
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
}) {
  const flipped = activeIndex === index;

  const handleClick = () => setActiveIndex(flipped ? null : index);

  return (
    <div
      className="w-full cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-lg rounded-xl"
      style={{ perspective: 1000 }}
      onClick={handleClick}
    >
      <div
        className="relative w-full h-64 transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
<Image
  src={menu.img}
  alt={menu.name}
  width={300}
  height={200}
  className="w-full h-40 object-cover"
  loading="lazy"
  sizes="(max-width: 768px) 100vw, 33vw"
/>
          <div className="p-4 text-center flex-1 flex items-center justify-center">
            <h3 className="text-lg font-semibold text-gray-800">{menu.name}</h3>
          </div>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 bg-[var(--primary)]/10 rounded-xl shadow-md flex flex-col items-center justify-center p-4 text-center"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <p className="text-gray-700 text-sm mb-4">{menu.desc}</p>
          <a
            href={`https://wa.me/6285735725784?text=${encodeURIComponent(menu.waText)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-[#25D366] text-white px-3 py-2 rounded-lg text-sm font-medium shadow hover:shadow-md transition"
          >
            Chat via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
