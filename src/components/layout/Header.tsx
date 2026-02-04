"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, Container } from "@/components/ui";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/constants";
import { formatPhone, telLink } from "@/lib/utils";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      {/* Top Bar */}
      <div className="bg-navy-900 text-white py-2 text-sm hidden md:block">
        <Container size="wide">
          <div className="flex justify-between items-center">
            <span>{SITE_CONFIG.hours}</span>
            <a
              href={telLink(SITE_CONFIG.phone)}
              className="hover:text-gold-400 transition-colors"
            >
              Call Today: {formatPhone(SITE_CONFIG.phone)}
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navigation */}
      <Container size="wide">
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy-800 rounded-lg flex items-center justify-center">
              <span className="text-gold-500 font-bold text-xl">O</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-xl text-navy-900">Odio</span>
              <span className="text-neutral-600 text-sm block -mt-1">
                Custom Builders
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.children && setActiveDropdown(item.label)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "text-neutral-700 hover:text-navy-800 font-medium transition-colors py-2",
                    item.children && "flex items-center gap-1"
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-lg shadow-xl border border-neutral-200 py-2 min-w-[240px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-neutral-700 hover:bg-neutral-50 hover:text-navy-800 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button href="/contact" className="hidden sm:inline-flex">
              Get a Quote
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-neutral-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200">
          <Container>
            <div className="py-4 space-y-4">
              {NAV_ITEMS.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block py-2 text-neutral-700 font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block py-1 text-neutral-500 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-neutral-200">
                <a
                  href={telLink(SITE_CONFIG.phone)}
                  className="block py-2 text-navy-800 font-semibold"
                >
                  {formatPhone(SITE_CONFIG.phone)}
                </a>
                <Button href="/contact" className="w-full mt-2">
                  Get a Quote
                </Button>
              </div>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
