import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";
import siteConfig from "../config/siteConfig";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];

const aboutDropdownLinks = [
  { label: "About Us", to: "/about" },
  { label: "Audience & Distribution", to: "/audience-distribution" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "FAQ", to: "/faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const menuRef = useRef(null);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdownOpen(false);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-navy-900/10">
      <div className="container-lb flex items-center justify-between h-16">
        <NavLink to="/" className="flex items-center gap-2 font-display font-bold text-lg text-navy-900">
          <LogoMark />
          {siteConfig.brandName}
        </NavLink>

        <ul className="hidden lg:flex items-center gap-16 text-sm font-medium text-navy-900/80">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `px-2 transition-colors hover:text-accent ${isActive ? "text-accent" : ""}`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          
          {/* About Dropdown */}
          <li className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className={`flex items-center gap-1.5 transition-colors hover:text-accent ${
                aboutDropdownLinks.some(link => location.pathname === link.to) ? "text-accent" : ""
              }`}
            >
              About
              <ChevronIcon open={dropdownOpen} />
            </button>
            
            {/* Dropdown Menu */}
            <div
              onMouseEnter={() => setDropdownOpen(true)}
              onMouseLeave={() => setDropdownOpen(false)}
              className={`absolute left-0 mt-2 w-56 bg-white border border-navy-900/10 rounded-lg shadow-lg overflow-hidden transition-all duration-200 ${
                dropdownOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible -translate-y-2"
              }`}
            >
              <ul className="py-2">
                {aboutDropdownLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => setDropdownOpen(false)}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 text-sm transition-colors ${
                          isActive
                            ? "bg-navy-900/5 text-accent font-semibold"
                            : "text-navy-900/80 hover:bg-navy-900/5 hover:text-accent"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>

        <div className="hidden lg:block">
          <Button to="/contact" variant="primary">
            Get Started
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-navy-900/15"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <BurgerIcon open={open} />
        </button>
      </div>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out border-t border-navy-900/10 ${
          open ? "max-h-[800px]" : "max-h-0 border-t-0"
        }`}
      >
        <ul className="container-lb py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-3 text-base font-medium transition-colors ${
                    isActive ? "text-accent" : "text-navy-900 hover:text-accent"
                  }`
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          
          {/* Mobile About Dropdown */}
          <li className="py-2">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-2 w-full text-base font-medium transition-colors ${
                aboutDropdownLinks.some(link => location.pathname === link.to) ? "text-accent" : "text-navy-900"
              }`}
            >
              About
              <ChevronIcon open={dropdownOpen} />
            </button>
            
            {/* Mobile Dropdown Menu */}
            <div
              className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
                dropdownOpen ? "max-h-96" : "max-h-0"
              }`}
            >
              <ul className="pl-4 mt-2 flex flex-col gap-1 border-l-2 border-navy-900/10">
                {aboutDropdownLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      end={link.to === "/"}
                      onClick={() => {
                        setOpen(false);
                        setDropdownOpen(false);
                      }}
                      className={({ isActive }) =>
                        `block py-2.5 text-sm transition-colors ${
                          isActive
                            ? "text-accent font-semibold"
                            : "text-navy-900/80 hover:text-accent"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </li>
          
          <li className="pt-3">
            <Button to="/contact" variant="primary" className="w-full" onClick={() => setOpen(false)}>
              Get Started
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect width="32" height="32" rx="7" fill="#0E1B3D" />
      <path d="M8 11L16 17L24 11" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="8" y="11" width="16" height="11" rx="1.6" stroke="white" strokeWidth="1.6" />
      <path d="M16 5V13M16 5L12.5 8.5M16 5L19.5 8.5" stroke="#2F5FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BurgerIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      {open ? (
        <path d="M4 4L16 16M16 4L4 16" stroke="#0E1B3D" strokeWidth="1.8" strokeLinecap="round" />
      ) : (
        <>
          <path d="M2.5 5H17.5" stroke="#0E1B3D" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M2.5 10H17.5" stroke="#0E1B3D" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M2.5 15H17.5" stroke="#0E1B3D" strokeWidth="1.8" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
