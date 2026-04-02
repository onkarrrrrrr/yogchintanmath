import { Phone, Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";

const ContactPage = () => {
  const { t } = useI18n();

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden bg-gradient-saffron flex items-center justify-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("contact.title")}</h1>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            {/* Contact info */}
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-6">{t("contact.title")}</h3>
              <div className="space-y-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Mobile</p>
                    <a href="tel:+919969324544" className="text-primary hover:underline">+91-9969324544</a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Email</p>
                    <a href="mailto:nrusinhmathtrust@gmail.com" className="text-primary hover:underline">nrusinhmathtrust@gmail.com</a>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+919969324544"
                  className="flex items-center justify-center gap-2 bg-gradient-saffron text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  {t("contact.call")}
                </a>
                <a
                  href="mailto:nrusinhmathtrust@gmail.com"
                  className="flex items-center justify-center gap-2 bg-gradient-gold text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  {t("contact.emailBtn")}
                </a>
              </div>

              {/* Google Map */}
              <div className="rounded-xl overflow-hidden shadow-lg h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3388.959261778044!2d76.52239530645132!3d17.181509562702832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc89f1660555551%3A0x5ec0f5810e0a9158!2sShri%20Nrusinh%20Saraswati%20Yog%20Chintan%20Math%20Trust!5e0!3m2!1sen!2sin!4v1774373926605!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
