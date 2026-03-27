import { Link } from "react-router-dom";
import { Phone, Mail, BookOpen, Home as HomeIcon, Sun, Users } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const { t } = useI18n();

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Math Logo" className="w-12 h-12 rounded-full object-cover border-2 border-gold" />
              <span className="font-display text-lg font-bold text-foreground">
                Shri Nrusinh Saraswati<br />Yog Chintan Math
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              A sacred spiritual center dedicated to the worship of Shri Nrusinh Saraswati Swami Maharaj,
              offering Gurucharitra Parayan, meditation, yoga, and peaceful accommodation for spiritual seekers.
            </p>
            <div className="flex gap-4">
              <a
                href="tel:+919969324544"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">+91 99693 24544</span>
              </a>
              <a
                href="mailto:nrusinhmathtrust@gmail.com"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">nrusinhmathtrust@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">{t("nav.services").toUpperCase()}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t("services.parayan")}
                </Link>
              </li>
              <li>
                <Link to="/rooms" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t("services.rooms")}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t("services.puja")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">RESOURCES</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t("nav.about")}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t("nav.gallery")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {t("nav.contact")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Shri Nrusinh Saraswati Yog Chintan Math Trust. {t("footer.designedWith")}
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
