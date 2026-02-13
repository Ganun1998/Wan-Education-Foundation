import { Link } from "react-router-dom";
import {Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-secondary-foreground font-serif font-bold text-sm">W</span>
              </div>
              <span className="font-serif font-bold text-lg">Wan Education Foundation</span>
            </div>
            <p className="text-primary-foreground/80 text-lg leading-relaxed">
              Supporting South Sudanese children and youth to access education, develop skills, and build brighter futures.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-base mb-4">Quick Links</h4>
            <ul className="space-y-2 text-lg text-primary-foreground/80">
              {[
                { label: "About Us", to: "/about" },
                { label: "Programs", to: "/programs" },
                { label: "Get Involved", to: "/get-involved" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-secondary transition-colors">
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
            <h4 className="font-serif font-semibold text-base mb-4">Support Our Work</h4>
            <p className="text-lg text-primary-foreground/80 mb-4">
              Every contribution helps a child access quality education in South Sudan.
            </p>
            <Link
              to="/get-involved"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-secondary/90 transition-colors"
            >
              Donate Now
            </Link>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} Wan Education Foundation. All rights reserved.</p>
          <p>Nonprofit Organization — South Sudan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
