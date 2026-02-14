import { Link } from "react-router-dom";
import {Mail, MapPin } from "lucide-react";
import WEF_LOGO from "@/assets/WEF_LOGO.png"

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-3">
                <img
                  src={WEF_LOGO}
                  alt="Wan Education Foundation Logo"
                  className="h-65 w-full object-cover left-0"
                />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-lg text-primary-foreground/80">
              {[
                { label: "About Us", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Get Involved", to: "/get-involved" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Contact</h4>
            <ul className="space-y-3 text-lg text-primary-foreground/80">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Juba, South Sudan</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 shrink-0" />
                <span>info@waneducation.org</span>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">
              Support Our Work
            </h4>
            <p className="text-lg text-primary-foreground/80 mb-4">
              Every contribution helps a child access quality education in South
              Sudan.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-lg text-primary-foreground/60">
          <p>
            © {new Date().getFullYear()} Wan Education Foundation. All rights
            reserved.
          </p>
          <p>Nonprofit Organization — South Sudan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
