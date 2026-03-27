import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import hero2 from "@/assets/hero-2.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const AboutPage = () => {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      {/* Hero banner */}
      <div className="relative h-[40vh] overflow-hidden">
        <img src={hero2} alt="Temple Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("about.title")}</h1>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                Shri Nrusinh Saraswati Swami Maharaj
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-4">{t("about.swami")}</p>
            </div>
            <img src={gallery5} alt="Deity" className="rounded-xl shadow-lg w-full h-80 object-cover" loading="lazy" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <img src={gallery6} alt="Math complex" className="rounded-xl shadow-lg w-full h-80 object-cover order-2 md:order-1" loading="lazy" />
            <div className="order-1 md:order-2">
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Built According to Vastu Shastra</h3>
              <p className="text-muted-foreground leading-relaxed">{t("about.vastu")}</p>
            </div>
          </div>

          <div className="bg-secondary rounded-xl p-8 md:p-12 text-center max-w-3xl mx-auto">
            <h3 className="font-display text-2xl font-bold text-foreground mb-4">Multiple Temples Within</h3>
            <p className="text-muted-foreground leading-relaxed">{t("about.temples")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
