import { useState, useEffect, useCallback } from "react";
import { Phone, BookOpen, Home as HomeIcon } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const heroImages = [hero1, hero2, hero3];

const HomePage = () => {
  const { t } = useI18n();
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % heroImages.length), []);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [next]);

  const highlights = [
    { icon: BookOpen, title: t("home.highlight1"), desc: "Sacred Gurucharitra readings in a divine atmosphere" },
    { icon: HomeIcon, title: t("home.highlight2"), desc: "Comfortable accommodation for spiritual seekers" },
    { icon: HomeIcon, title: t("home.highlight3"), desc: "Comfortable rooms for spiritual retreats" },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[85vh] md:h-screen overflow-hidden">
        {heroImages.map((img, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{ opacity: i === current ? 1 : 0 }}
          >
            <img
              src={img}
              alt="Temple"
              className="w-full h-full object-cover"
              {...(i === 0 ? {} : { loading: "lazy" as const })}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in-up max-w-4xl leading-tight drop-shadow-lg">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-fade-in-up stagger-2 max-w-2xl">
            {t("hero.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up stagger-3">
            <a
              href="tel:+919969324544"
              className="flex items-center justify-center gap-2 bg-gradient-saffron text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {t("hero.callBooking")}
            </a>
            <a
              href="#about-section"
              className="flex items-center justify-center gap-2 border-2 border-primary-foreground/80 text-primary-foreground px-8 py-3 rounded-lg font-semibold text-lg hover:bg-primary-foreground/10 transition-colors"
            >
              {t("hero.knowMore")}
            </a>
          </div>
          {/* Slide indicators */}
          <div className="flex gap-2 mt-8">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === current ? "bg-gold w-8" : "bg-primary-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About intro */}
      <section id="about-section" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("home.introTitle")} />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed">
            {t("home.introText")}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="bg-background rounded-xl p-8 text-center shadow-md hover:shadow-xl transition-shadow border border-border group"
              >
                <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                  <h.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{h.title}</h3>
                <p className="text-muted-foreground">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-gradient-saffron text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{t("home.contactTitle")}</h2>
          <p className="text-lg mb-8 opacity-90">{t("home.contactText")}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+919969324544"
              className="inline-flex items-center justify-center gap-2 bg-background text-primary px-8 py-3 rounded-lg font-semibold hover:bg-background/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +91-9969324544
            </a>
            <a
              href="mailto:nrusinhmathtrust@gmail.com"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              nrusinhmathtrust@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
