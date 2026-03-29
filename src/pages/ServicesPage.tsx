import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import { api } from "@/lib/api";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import whatsappImage1 from "@/assets/WhatsApp Image 2026-03-25 at 12.22.58 AM (1).jpeg";

const ServicesPage = () => {
  const { t } = useI18n();

  const serviceImages = [gallery5, gallery3, whatsappImage1];

  const { data: services, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: api.getServices,
  });

  if (isLoading) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 animate-spin" />
          <span>Loading services...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">Failed to load services.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-lg"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!services) return null;

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden">
        <img src={gallery1} alt="Aarti" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("services.title")}</h1>
        </div>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-16">
          {services.map((s, i) => (
            <div key={s.id} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center text-xl">
                    {s.icon}
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{s.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-lg mb-4">{s.description}</p>
                <ul className="space-y-2">
                  {s.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`rounded-xl shadow-lg w-full h-80 overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <img 
                  src={serviceImages[i]} 
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
