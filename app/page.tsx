"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Home as HomeIcon,
  Layers3,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Ruler,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const phoneDisplay = "0543 423 95 28";
const phoneHref = "+905434239528";

const whatsappUrl =
  "https://wa.me/905434239528?text=Merhaba%20Modern%20Parke%2C%20parke%20modelleri%20ve%20uygulama%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";

const callUrl = `tel:${phoneHref}`;

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Modern%20Parke%20Sultangazi%20%C4%B0stanbul";

const parkeCesitleri = [
  {
    no: "01",
    ad: "Açık Meşe Laminat Parke",
    kategori: "Ferah yaşam alanları",
    aciklama:
      "Açık meşe tonları, özellikle küçük ve orta büyüklükteki alanlarda daha geniş, temiz ve modern bir görünüm sağlar. Salon, yatak odası ve ofislerde sık tercih edilir.",
    ozellikler: ["Ferah görünüm", "Modern çizgi", "Kolay uyum"],
    resim: "/resim2.jpg",
  },
  {
    no: "02",
    ad: "Doğal Ahşap Görünümlü Parke",
    kategori: "Sıcak ve doğal atmosfer",
    aciklama:
      "Doğal ahşap dokusu, evin içinde daha sıcak ve davetkâr bir his oluşturur. Klasik ve modern mobilyalarla kolay uyum sağlar.",
    ozellikler: ["Doğal doku", "Sıcak renk", "Zamansız görünüm"],
    resim: "/resim3.jpg",
  },
  {
    no: "03",
    ad: "Balıksırtı Parke",
    kategori: "Premium dekoratif tercih",
    aciklama:
      "Balıksırtı parke, mekâna daha özel ve mimari bir görünüm kazandırır. Şık salonlar, ofisler ve dekoratif alanlar için güçlü bir seçenektir.",
    ozellikler: ["Şık desen", "Premium görünüm", "Dekoratif etki"],
    resim: "/resim4.jpg",
  },
  {
    no: "04",
    ad: "Koyu Ton Laminat Parke",
    kategori: "Güçlü ve karakterli zemin",
    aciklama:
      "Koyu ton parkeler, daha güçlü ve dikkat çekici bir atmosfer isteyen alanlarda tercih edilir. Açık renk mobilyalarla çok şık bir kontrast oluşturur.",
    ozellikler: ["Tok görünüm", "Kontrast etki", "Güçlü karakter"],
    resim: "/resim5.jpg",
  },
];

const hizmetler = [
  "Laminat parke satışı",
  "Parke döşeme uygulaması",
  "Süpürgelik uygulaması",
  "Zemin yenileme",
  "Model ve renk seçimi desteği",
  "Ev, ofis ve iş yeri uygulamaları",
  "Sultangazi ve çevresine hizmet",
  "WhatsApp üzerinden hızlı teklif",
];

const nedenBiz = [
  {
    icon: Ruler,
    baslik: "Alanınıza göre seçim",
    aciklama:
      "Parke seçimi sadece beğeniyle yapılmaz. Alanın ışığı, mobilya rengi, kullanım yoğunluğu ve zemin durumu birlikte değerlendirilir.",
  },
  {
    icon: Layers3,
    baslik: "Model çeşitliliği",
    aciklama:
      "Açık ton, koyu ton, doğal ahşap görünümlü ve dekoratif parke seçenekleriyle farklı zevklere uygun çözümler sunulur.",
  },
  {
    icon: ShieldCheck,
    baslik: "Net süreç",
    aciklama:
      "Ürün, metraj, uygulama ve fiyat bilgisi mümkün olduğunca net paylaşılır. Müşterinin kafasında soru işareti kalmaması hedeflenir.",
  },
];

const surec = [
  {
    baslik: "İhtiyacınızı anlatın",
    aciklama:
      "WhatsApp üzerinden alan ölçüsünü, istediğiniz parke tarzını veya mevcut zeminin fotoğrafını gönderebilirsiniz.",
  },
  {
    baslik: "Model önerisi yapılsın",
    aciklama:
      "Alanınıza ve kullanım şeklinize göre uygun renk, desen ve parke seçenekleri belirlenir.",
  },
  {
    baslik: "Teklif netleşsin",
    aciklama:
      "Metraj, ürün ve uygulama detayına göre size net fiyat ve süreç bilgisi verilir.",
  },
  {
    baslik: "Uygulama tamamlansın",
    aciklama:
      "Parke uygulaması planlı, temiz ve düzenli şekilde tamamlanır.",
  },
];

export default function Home() {
  const [menuAcik, setMenuAcik] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F8F3EA] text-[#2B2118]">
      <header className="fixed left-0 top-0 z-50 w-full border-b border-[#2B2118]/10 bg-[#FFFDF8]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="flex items-center gap-3">
            <span className="text-2xl font-black tracking-tight">
              Modern Parke
            </span>
            <span className="hidden h-1.5 w-1.5 rounded-full bg-[#B98245] sm:block" />
            <span className="hidden text-sm font-semibold text-[#7A6A58] sm:block">
              Sultangazi / İstanbul
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-bold text-[#4B3A2A] lg:flex">
            <a href="#katalog" className="transition hover:text-[#B98245]">
              Katalog
            </a>
            <a href="#hakkimizda" className="transition hover:text-[#B98245]">
              Hakkımızda
            </a>
            <a href="#hizmetler" className="transition hover:text-[#B98245]">
              Hizmetler
            </a>
            <a href="#surec" className="transition hover:text-[#B98245]">
              Süreç
            </a>
            <a href="#iletisim" className="transition hover:text-[#B98245]">
              İletişim
            </a>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={callUrl}
              className="inline-flex items-center gap-2 rounded-full bg-[#2B2118] px-5 py-3 text-sm font-black text-white transition hover:bg-[#B98245]"
            >
              <Phone size={16} />
              Ara
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-black text-white transition hover:brightness-95"
            >
              <MessageCircle size={17} />
              WhatsApp
            </a>
          </div>

          <button
            onClick={() => setMenuAcik(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2B2118] text-white lg:hidden"
            aria-label="Menüyü aç"
          >
            <Menu />
          </button>
        </div>
      </header>

      {menuAcik && (
        <div className="fixed inset-0 z-[80] bg-[#FFFDF8] px-5 py-5 text-[#2B2118] lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black">Modern Parke</span>

            <button
              onClick={() => setMenuAcik(false)}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2B2118] text-white"
              aria-label="Menüyü kapat"
            >
              <X />
            </button>
          </div>

          <nav className="mt-12 grid gap-6 text-3xl font-black">
            <a onClick={() => setMenuAcik(false)} href="#katalog">
              Katalog
            </a>
            <a onClick={() => setMenuAcik(false)} href="#hakkimizda">
              Hakkımızda
            </a>
            <a onClick={() => setMenuAcik(false)} href="#hizmetler">
              Hizmetler
            </a>
            <a onClick={() => setMenuAcik(false)} href="#surec">
              Süreç
            </a>
            <a onClick={() => setMenuAcik(false)} href="#iletisim">
              İletişim
            </a>
          </nav>

          <div className="mt-12 grid gap-3">
            <a
              href={whatsappUrl}
              target="_blank"
              className="rounded-full bg-[#25D366] px-6 py-4 text-center font-black text-white"
            >
              WhatsApp’tan Fiyat Al
            </a>

            <a
              href={callUrl}
              className="rounded-full bg-[#2B2118] px-6 py-4 text-center font-black text-white"
            >
              Hemen Ara
            </a>
          </div>
        </div>
      )}

      <section className="relative min-h-screen px-5 pt-32 lg:px-8 lg:pt-36">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FFFDF8] via-[#F8F3EA] to-[#EAD7BC]" />
        <div className="absolute right-0 top-24 -z-10 hidden h-[560px] w-[560px] rounded-full bg-[#D8A768]/25 blur-3xl lg:block" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
            className="pb-10 lg:pb-20"
          >
            <div className="mb-6 flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-[#B98245]">
              <Sparkles size={17} />
              Parke katalog ve uygulama
            </div>

            <h1 className="max-w-3xl text-5xl font-black leading-[0.96] tracking-tight md:text-7xl">
              Yaşam alanınıza uygun parke modelini kolayca seçin.
            </h1>

            <p className="mt-7 max-w-2xl text-lg font-medium leading-8 text-[#6F5D4A] md:text-xl">
              Modern Parke; İstanbul Sultangazi’de laminat parke satışı,
              model seçimi ve uygulama hizmeti sunar. Açık meşe, doğal ahşap,
              balıksırtı ve farklı parke seçenekleriyle evinizi veya iş yerinizi
              daha şık bir görünüme kavuşturabilirsiniz.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#katalog"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2118] px-7 py-4 text-base font-black text-white transition hover:bg-[#B98245]"
              >
                Parke Çeşitlerini İncele
                <ArrowRight size={18} />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 text-base font-black text-white transition hover:brightness-95"
              >
                WhatsApp’tan Fiyat Al
                <MessageCircle size={18} />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-9 gap-y-5 border-t border-[#2B2118]/10 pt-8">
              <div>
                <strong className="block text-3xl font-black">Katalog</strong>
                <span className="mt-1 block text-sm font-semibold text-[#7A6A58]">
                  model inceleme
                </span>
              </div>

              <div>
                <strong className="block text-3xl font-black">Net</strong>
                <span className="mt-1 block text-sm font-semibold text-[#7A6A58]">
                  ürün yönlendirme
                </span>
              </div>

              <div>
                <strong className="block text-3xl font-black">Hızlı</strong>
                <span className="mt-1 block text-sm font-semibold text-[#7A6A58]">
                  teklif alma
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="relative pb-14 lg:pb-20"
          >
            <div className="relative h-[430px] overflow-hidden rounded-[2.2rem] shadow-2xl shadow-[#7A4F22]/20 md:h-[650px]">
              <Image
                src="/resim1.jpg"
                alt="Modern Parke ana görsel"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />
            </div>

            <a
              href="#katalog"
              className="absolute bottom-20 right-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-black text-[#2B2118] shadow-lg"
            >
              Kataloğa Git
              <ChevronDown size={17} />
            </a>
          </motion.div>
        </div>
      </section>

     <section id="katalog" className="px-5 py-24 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
      <div>
        <span className="mb-4 block text-sm font-black uppercase tracking-[0.24em] text-[#B98245]">
          Parke Kataloğu
        </span>

        <h2 className="text-4xl font-black tracking-tight md:text-6xl">
          Model model inceleyin, alanınıza uygun olanı seçin.
        </h2>
      </div>

      <p className="max-w-2xl text-lg font-medium leading-8 text-[#7A6A58]">
        Aşağıdaki katalog yapısında her parke modeli ayrı ayrı listelenir.
        Müşteri görseli, kullanım alanını ve öne çıkan özellikleri hızlıca
        görebilir. Beğendiği model için doğrudan WhatsApp üzerinden bilgi alır.
      </p>
    </div>

    <div className="mt-10 flex flex-wrap gap-3 border-y border-[#2B2118]/10 py-5">
      <a
        href="#model-01"
        className="rounded-full bg-[#2B2118] px-5 py-3 text-sm font-black text-white"
      >
        Açık Meşe
      </a>

      <a
        href="#model-02"
        className="rounded-full border border-[#2B2118]/15 px-5 py-3 text-sm font-black text-[#2B2118]"
      >
        Doğal Ahşap
      </a>

      <a
        href="#model-03"
        className="rounded-full border border-[#2B2118]/15 px-5 py-3 text-sm font-black text-[#2B2118]"
      >
        Balıksırtı
      </a>

      <a
        href="#model-04"
        className="rounded-full border border-[#2B2118]/15 px-5 py-3 text-sm font-black text-[#2B2118]"
      >
        Koyu Ton
      </a>
    </div>

    <div className="mt-16 border-t border-[#2B2118]/12">
      {parkeCesitleri.map((urun, index) => (
        <motion.div
          id={`model-${String(index + 1).padStart(2, "0")}`}
          key={urun.ad}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="grid gap-8 border-b border-[#2B2118]/12 py-12 lg:grid-cols-[120px_0.95fr_1.05fr]"
        >
          <div>
            <span className="block text-5xl font-black text-[#B98245]">
              {urun.no}
            </span>
          </div>

          <div className="relative h-[300px] overflow-hidden rounded-[1.8rem] shadow-xl shadow-[#7A4F22]/12 md:h-[430px]">
            <Image
              src={urun.resim}
              alt={urun.ad}
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <span className="mb-4 block text-sm font-black uppercase tracking-[0.2em] text-[#B98245]">
              {urun.kategori}
            </span>

            <h3 className="text-3xl font-black tracking-tight md:text-5xl">
              {urun.ad}
            </h3>

            <p className="mt-5 text-lg font-medium leading-8 text-[#7A6A58]">
              {urun.aciklama}
            </p>

            <div className="mt-7">
              <span className="mb-3 block text-sm font-black uppercase tracking-[0.18em] text-[#2B2118]">
                Öne çıkan özellikler
              </span>

              <div className="grid gap-3 sm:grid-cols-3">
                {urun.ozellikler.map((ozellik) => (
                  <div
                    key={ozellik}
                    className="border-t border-[#2B2118]/12 pt-3"
                  >
                    <CheckCircle2 size={18} className="mb-2 text-[#B98245]" />
                    <span className="text-sm font-black text-[#6F5D4A]">
                      {ozellik}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-4 font-black text-white transition hover:brightness-95"
              >
                Bu model için fiyat al
                <MessageCircle size={18} />
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2118] px-7 py-4 font-black text-white transition hover:bg-[#B98245]"
              >
                Telefonla Sor
                <Phone size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section id="hakkimizda" className="relative px-5 py-24 lg:px-8">
        <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-[#EFE2CF]" />

        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#7A4F22]/15 md:h-[650px]">
            <Image
              src="/resim.jpg"
              alt="Modern Parke hakkında görsel"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          <div>
            <span className="mb-4 block text-sm font-black uppercase tracking-[0.24em] text-[#B98245]">
              Modern Parke Kimdir?
            </span>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Parke seçimini daha anlaşılır ve güvenli hale getiriyoruz.
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-[#7A6A58]">
              Modern Parke, İstanbul Sultangazi’de parke ihtiyacı olan
              müşterilere ürün seçimi, model karşılaştırması ve uygulama
              konusunda destek veren bir parke hizmetidir. Amacımız, müşterinin
              sadece güzel görünen değil; evine, iş yerine ve kullanım şekline
              gerçekten uygun parke modelini seçmesini sağlamaktır.
            </p>

            <p className="mt-5 text-lg font-medium leading-8 text-[#7A6A58]">
              Katalog yapımız sayesinde farklı parke türlerini inceleyebilir,
              renk ve tarz konusunda fikir alabilir, ardından WhatsApp üzerinden
              ölçü ve model bilgisi paylaşarak hızlıca teklif isteyebilirsiniz.
            </p>

            <div className="mt-9 grid gap-5">
              {nedenBiz.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.baslik}
                    className="grid gap-4 border-t border-[#2B2118]/12 pt-5 sm:grid-cols-[42px_1fr]"
                  >
                    <Icon size={30} className="text-[#B98245]" />

                    <div>
                      <h3 className="text-xl font-black">{item.baslik}</h3>
                      <p className="mt-2 text-base font-medium leading-7 text-[#7A6A58]">
                        {item.aciklama}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="hizmetler" className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-4 block text-sm font-black uppercase tracking-[0.24em] text-[#B98245]">
                Hizmetler
              </span>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Parke ihtiyacınız için satıştan uygulamaya destek.
              </h2>
            </div>

            <p className="max-w-2xl text-lg font-medium leading-8 text-[#7A6A58]">
              Ürün seçimi, renk önerisi, uygulama süreci ve fiyat bilgisiyle
              müşterinin daha rahat karar vermesi sağlanır. Katalog yapısı
              sayesinde önce model incelenir, ardından teklif süreci başlar.
            </p>
          </div>

          <div className="mt-14 grid gap-0 border-t border-[#2B2118]/12">
            {hizmetler.map((hizmet, index) => (
              <div
                key={hizmet}
                className="grid gap-4 border-b border-[#2B2118]/12 py-6 md:grid-cols-[120px_1fr]"
              >
                <span className="text-2xl font-black text-[#B98245]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="flex items-center justify-between gap-5">
                  <h3 className="text-2xl font-black">{hizmet}</h3>
                  <CheckCircle2 className="hidden shrink-0 text-[#B98245] sm:block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[680px] overflow-hidden px-5 py-24 text-white lg:px-8">
        <Image
          src="/resim7.jpg"
          alt="Modern parke dekorasyon görseli"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#2B2118]/88 via-[#2B2118]/62 to-[#2B2118]/18" />

        <div className="relative mx-auto flex min-h-[500px] max-w-7xl items-center">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-black uppercase tracking-[0.22em] text-[#F1D7B4]">
              <Star size={17} fill="currentColor" />
              Karar vermeden önce
            </div>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Parke modelini seçmeden önce alanınıza uygun tonu birlikte belirleyelim.
            </h2>

            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-white/78">
              Aynı parke modeli her evde aynı etkiyi vermez. Işık, mobilya,
              duvar rengi ve kullanım alanı doğru değerlendirilirse sonuç daha
              şık ve uyumlu olur.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-black text-white"
              >
                WhatsApp’tan Danış
                <MessageCircle size={18} />
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-black text-[#2B2118]"
              >
                Hemen Ara
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="surec" className="bg-[#EFE2CF] px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <span className="mb-4 block text-sm font-black uppercase tracking-[0.24em] text-[#9B6932]">
                Çalışma Süreci
              </span>

              <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                Katalogdan seç, WhatsApp’tan sor, net teklif al.
              </h2>
            </div>

            <p className="max-w-2xl text-lg font-semibold leading-8 text-[#6F5D4A]">
              Site, müşterinin önce modelleri incelemesi, sonra WhatsApp
              üzerinden kolayca iletişime geçmesi için tasarlandı. Karar süreci
              uzamadan hızlı aksiyon alınır.
            </p>
          </div>

          <div className="mt-16 grid gap-0 border-t border-[#2B2118]/15">
            {surec.map((item, index) => (
              <div
                key={item.baslik}
                className="grid gap-5 border-b border-[#2B2118]/15 py-8 md:grid-cols-[160px_1fr_1.2fr]"
              >
                <span className="text-4xl font-black text-[#B98245]">
                  0{index + 1}
                </span>

                <h3 className="text-2xl font-black">{item.baslik}</h3>

                <p className="text-base font-medium leading-7 text-[#6F5D4A]">
                  {item.aciklama}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <span className="mb-4 block text-sm font-black uppercase tracking-[0.24em] text-[#B98245]">
              Ölçü ve Teklif
            </span>

            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Ölçünüzü veya zemin fotoğrafınızı gönderin.
            </h2>

            <p className="mt-6 text-lg font-medium leading-8 text-[#7A6A58]">
              Alan ölçüsünü, mevcut zeminin fotoğrafını veya beğendiğiniz parke
              modelini WhatsApp üzerinden paylaşabilirsiniz. Size uygun ürün ve
              uygulama bilgisiyle dönüş yapılır.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl}
                target="_blank"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 font-black text-white"
              >
                WhatsApp’tan Teklif Al
                <ArrowRight size={18} />
              </a>

              <a
                href={callUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2B2118] px-8 py-4 font-black text-white"
              >
                Hemen Ara
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div className="relative h-[420px] overflow-hidden rounded-[2rem] shadow-2xl shadow-[#7A4F22]/15 md:h-[620px]">
            <Image
              src="/resim8.jpg"
              alt="Parke ölçü ve teklif görseli"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <footer id="iletisim" className="bg-[#FFFDF8] px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 border-t border-[#2B2118]/10 pt-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-4xl font-black">Modern Parke</h2>

            <p className="mt-4 max-w-xl text-base font-medium leading-7 text-[#7A6A58]">
              İstanbul Sultangazi’de laminat parke satışı, parke uygulaması,
              model seçimi ve zemin yenileme ihtiyaçlarınız için iletişime
              geçebilirsiniz.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <a href={callUrl} className="group border-t border-[#2B2118]/15 pt-6">
              <Phone className="mb-4 text-[#B98245]" />
              <strong className="block text-xl group-hover:text-[#B98245]">
                Telefon
              </strong>
              <span className="mt-2 block text-sm font-semibold text-[#7A6A58]">
                {phoneDisplay}
              </span>
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              className="group border-t border-[#2B2118]/15 pt-6"
            >
              <MessageCircle className="mb-4 text-[#25D366]" />
              <strong className="block text-xl group-hover:text-[#25D366]">
                WhatsApp
              </strong>
              <span className="mt-2 block text-sm font-semibold text-[#7A6A58]">
                Hızlı fiyat al
              </span>
            </a>

            <a
              href={mapsUrl}
              target="_blank"
              className="group border-t border-[#2B2118]/15 pt-6"
            >
              <MapPin className="mb-4 text-[#B98245]" />
              <strong className="block text-xl group-hover:text-[#B98245]">
                Adres
              </strong>
              <span className="mt-2 block text-sm font-semibold text-[#7A6A58]">
                Sultangazi / İstanbul
              </span>
            </a>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col justify-between gap-3 border-t border-[#2B2118]/10 pt-6 text-sm font-medium text-[#7A6A58] md:flex-row">
          <span>© Modern Parke. Tüm hakları saklıdır.</span>
          <span>Parke katalog, satış ve uygulama hizmeti.</span>
        </div>
      </footer>

      <div className="fixed bottom-5 left-5 right-5 z-40 grid grid-cols-2 gap-3 lg:hidden">
        <a
          href={callUrl}
          className="flex items-center justify-center gap-2 rounded-full bg-[#2B2118] px-5 py-4 text-sm font-black text-white shadow-2xl"
        >
          <Phone size={17} />
          Ara
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-4 text-sm font-black text-white shadow-2xl"
        >
          <MessageCircle size={17} />
          Yaz
        </a>
      </div>

      <a
        href={whatsappUrl}
        target="_blank"
        className="fixed bottom-7 right-7 z-40 hidden items-center gap-2 rounded-full bg-[#25D366] px-6 py-4 font-black text-white shadow-2xl shadow-black/20 lg:flex"
      >
        <MessageCircle size={20} />
        WhatsApp’tan Fiyat Al
      </a>
    </main>
  );
}