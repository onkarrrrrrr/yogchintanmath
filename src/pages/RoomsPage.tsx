import { Phone, IndianRupee, CheckCircle2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import gallery3 from "@/assets/gallery-3.jpg";
import hero3 from "@/assets/hero-3.jpg";

const RoomsPage = () => {
  const { t } = useI18n();

  const steps = [t("rooms.step1"), t("rooms.step2"), t("rooms.step3")];

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden">
        <img src={gallery3} alt="Room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("rooms.title")}</h1>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Price card */}
          <div className="bg-gradient-saffron text-primary-foreground rounded-2xl p-8 md:p-12 text-center max-w-2xl mx-auto mb-16 shadow-xl">
            <IndianRupee className="w-12 h-12 mx-auto mb-4" />
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">{t("rooms.price")}</h2>
            <p className="text-lg opacity-90">{t("rooms.purpose")}</p>
          </div>

          {/* Booking process */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">{t("rooms.bookingTitle")}</h3>
              <div className="space-y-4">
                {steps.map((step, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-saffron rounded-full flex items-center justify-center shrink-0 text-primary-foreground font-bold">
                      {i + 1}
                    </div>
                    <p className="text-muted-foreground text-lg pt-1.5">{step}</p>
                  </div>
                ))}
              </div>
              <a
                href="tel:+919969324544"
                className="inline-flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-8 py-3 rounded-lg font-semibold mt-8 hover:opacity-90 transition-opacity"
              >
                <Phone className="w-5 h-5" />
                {t("hero.callBooking")}
              </a>
            </div>
            <img src={hero3} alt="Ashram" className="rounded-xl shadow-lg w-full h-80 object-cover" loading="lazy" />
          </div>

          {/* Note */}
          <div className="bg-secondary rounded-xl p-6 flex items-start gap-4 max-w-2xl mx-auto">
            <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
            <p className="text-foreground font-medium">{t("rooms.note")}</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;
