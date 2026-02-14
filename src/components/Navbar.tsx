import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import WEF_LOGO from "@/assets/WEF_LOGO.png"

const navLinks = [
  { label: "Home", to: "/" },
  {
    label: "Who We Are",
    children: [
      { label: "About", to: "/about" },
      { label: "Core Values", to: "/vision-mission" },
      { label: "Team", to: "/team" },
      { label: "Accountability", to: "/accountability" },
    ],
  },
  { label: "What We Do", to: "/programs" },
  { label: "Events", to: "/events" },
  { label: "Get Involved", to: "/get-involved" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-8 border-primary">
      {/* ================= TOP BAR ================= */}
      <div className="border-b bg-primary">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between text-xs">
          {/* Left – Contact */}
          <div className="flex items-center gap-4 text-white/80">
            <span className="items-center gap-1 text-lg font-bold hidden md:flex">
              <Mail size={18} /> info@waneducation.org
            </span>
            <span className="hidden md:flex items-center gap-1 text-lg font-bold">
              <Phone size={18} /> +211 000 000 000
            </span>
          </div>

          {/* Center – Social */}
          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href="#"
              className="text-white p-2 hover:text-primary"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="text-white p-2 hover:text-primary"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className=" text-white p-2 hover:text-primary"
            >
              <Instagram size={18} />
            </a>
          </div>

          {/* Right – Language */}
          <div className="relative bg-primary rounded-md">
            <button
              onClick={() => setLanguageOpen(!languageOpen)}
              className="flex items-center text-lg gap-1 p-3 text-white hover:text-white"
            >
              EN <ChevronDown size={25} />
            </button>

            {languageOpen && (
              <div className="absolute right-0 mt-2 w-24 bg-background border rounded-md shadow-md">
                <button className="block w-full text-left px-5 py-1 hover:bg-muted">
                  English
                </button>
                <button className="block w-full text-left px-5 py-1 hover:bg-muted">
                  Arabic
                </button>
                <button className="block w-full text-left px-5 py-1 hover:bg-muted">
                  Nuer
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ================= MAIN NAV ================= */}
      <div className="container mx-auto px-0 flex items-center justify-between h-24">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={WEF_LOGO}
            alt="Wan Education Foundation Logo"
            className="h-48 w-full object-contain"
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className="relative group">
                <button className="px-3 py-2 text-lg font-medium rounded-md flex items-center gap-1 text-muted-foreground hover:text-foreground hover:bg-muted">
                  {link.label}
                  <ChevronDown size={16} />
                </button>

                <div className="absolute left-0 mt-2 w-48 rounded-md bg-background border shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  {link.children.map((child) => (
                    <Link
                      key={child.to}
                      to={child.to}
                      className={`block px-4 py-2 text-sm transition-colors ${
                        location.pathname === child.to
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 py-2 text-lg font-medium rounded-md transition-colors ${
                  location.pathname === link.to
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ),
          )}

          <Link to="/get-involved">
            <Button
              size="sm"
              className="ml-2 bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              Donate
            </Button>
          </Link>
        </div>

        {/* ================= MOBILE TOGGLE ================= */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.label}>
                  <button
                    onClick={() => setAboutOpen(!aboutOpen)}
                    className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                  >
                    {link.label}
                    <ChevronDown
                      size={16}
                      className={`transition-transform ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {aboutOpen && (
                    <div className="ml-4 mt-1 flex flex-col">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={() => setMobileOpen(false)}
                          className="px-3 py-2 text-sm rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2 text-sm font-medium rounded-md text-muted-foreground hover:text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ),
            )}

            <Link to="/get-involved" onClick={() => setMobileOpen(false)}>
              <Button
                size="sm"
                className="mt-2 w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
              >
                Donate
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
