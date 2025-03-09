import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importing icons for the mobile menu

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Optimized scroll event handler
  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "For Candidates", href: "#how-it-works" },
    { name: "For Business", href: "#business" },
    { name: "Testimonials", href: "#testimonials" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-expo",
        scrolled ? "glass py-3 shadow-lg" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <span className="text-xl font-medium tracking-tight gradient-text">
              Proba.
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center space-x-10"
          >
            {navLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 relative group"
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-foreground group-hover:w-full transition-all duration-300 ease-out-expo"></span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Sign-in Button & Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center space-x-4"
          >
            <ThemeToggle />

            <Link to="/auth">
            <motion.button
              className="glass-button px-5 py-2 rounded-full text-sm font-medium button-highlight"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              Sign in
            </motion.button>
            </Link>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-16 left-0 w-full bg-gray-900 p-6 flex flex-col items-center space-y-6 md:hidden"
            >
              {navLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-white text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <Link
                to="/auth"
                className="bg-white text-black px-5 py-2 rounded-full text-sm font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign in
              </Link>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
