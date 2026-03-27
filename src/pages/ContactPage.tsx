import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import SectionHeading from "@/components/SectionHeading";
import { toast } from "sonner";
import { api, ContactFormData } from "@/lib/api";

const ContactPage = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const contactMutation = useMutation({
    mutationFn: api.submitContactForm,
    onSuccess: (data) => {
      toast.success(data.message);
      setForm({ name: "", email: "", message: "" });
    },
    onError: (error) => {
      toast.error("Failed to send message. Please try again.");
      console.error("Contact form error:", error);
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    contactMutation.mutate(form);
  };

  return (
    <div className="pt-20">
      <div className="relative h-[40vh] overflow-hidden bg-gradient-saffron flex items-center justify-center">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">{t("contact.title")}</h1>
      </div>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
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

            {/* Contact form */}
            <div>
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 shadow-lg border border-border space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contact.name")}</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contact.email")}</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-shadow"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("contact.message")}</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-ring outline-none transition-shadow resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={contactMutation.isPending}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-saffron text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactMutation.isPending ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                  {contactMutation.isPending ? "Sending..." : t("contact.send")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
