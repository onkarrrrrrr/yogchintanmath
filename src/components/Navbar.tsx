import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useI18n, Language } from "@/lib/i18n";
import logo from "@/assets/logo.jpeg";

const langLabels: Record<Language, string> = { en: "EN", mr: "मराठी", hi: "हिंदी", te: "తెలుగు", kn: "ಕನ್ನಡ" };

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useI18n();
  const location = useLocation();

  const links = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/rooms", label: t("nav.rooms") },
    { to: "/gallery", label: t("nav.gallery") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src={logo} alt="Math Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-gold" />
          <span className="font-display text-sm md:text-base font-bold text-foreground leading-tight max-w-[200px] md:max-w-none">
            Shri Nrusinh Saraswati<br className="md:hidden" /> Yog Chintan Math
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === l.to ? "text-primary border-b-2 border-primary pb-1" : "text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 ml-2 border border-border rounded-lg overflow-hidden">
            {(["en", "mr", "hi", "te", "kn"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2 py-1 text-xs font-medium transition-colors ${
                  lang === l ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>
          <a
            href="tel:+919969324544"
            className="flex items-center gap-2 bg-gradient-saffron text-primary-foreground px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone className="w-4 h-4" />
            {t("hero.callBooking")}
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`py-2 text-base font-medium ${
                  location.pathname === l.to ? "text-primary" : "text-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-2">
              {(["en", "mr", "hi", "te", "kn"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1.5 text-sm rounded-md ${
                    lang === l ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {langLabels[l]}
                </button>
              ))}
            </div>
            <a
              href="tel:+919969324544"
              className="flex items-center justify-center gap-2 bg-gradient-saffron text-primary-foreground px-4 py-3 rounded-lg font-semibold mt-2"
            >
              <Phone className="w-4 h-4" />
              {t("hero.callBooking")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
