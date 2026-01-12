'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  {
    name: 'About Us',
    href: '/about',
    dropdown: [
      { name: 'About Us', href: '/about' },
      { name: 'Mission & Goals', href: '/mission-goals' },
      { name: "Chairman's Message", href: '/chairman-message' },
      { name: "Vice Chairperson's Message", href: '/vice-chairperson-message' },
    ],
  },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Infrastructure', href: '/infrastructure' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const pathname = usePathname()
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/60 backdrop-blur-2xl shadow-md py-3'
          : 'bg-white/95 backdrop-blur-sm py-4'
      }`}
      suppressHydrationWarning
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0">
              <Image
                src="/logo.png"
                alt="Mount Florence G School Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-serif font-bold text-navy-950 group-hover:text-gold-600 transition-colors">
                Mount Florence G School
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(subItem => pathname === subItem.href))
              const isDropdownOpen = openDropdown === item.name

              if (item.dropdown) {
                return (
                  <div
                    key={item.name}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.name)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      onClick={() => setOpenDropdown(isDropdownOpen ? null : item.name)}
                      className={`relative font-medium transition-colors duration-200 flex items-center ${
                        isActive
                          ? 'text-gold-600'
                          : 'text-navy-700 hover:text-gold-600'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                      {isActive && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500" />
                      )}
                    </button>
                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
                        {item.dropdown.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isSubActive
                                  ? 'bg-gold-50 text-gold-600 font-semibold'
                                  : 'text-navy-700 hover:bg-gray-50 hover:text-gold-600'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium transition-colors duration-200 ${
                    isActive
                      ? 'text-gold-600'
                      : 'text-navy-700 hover:text-gold-600'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gold-500" />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-navy-700 hover:text-gold-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-3 fade-in">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.dropdown && item.dropdown.some(subItem => pathname === subItem.href))
              const isMobileDropdownOpen = openDropdown === item.name

              if (item.dropdown) {
                return (
                  <div key={item.name}>
                    <button
                      onClick={() => setOpenDropdown(isMobileDropdownOpen ? null : item.name)}
                      className={`w-full flex items-center justify-between py-2 font-medium transition-colors ${
                        isActive
                          ? 'text-gold-600 border-l-4 border-gold-500 pl-4'
                          : 'text-navy-700 hover:text-gold-600 pl-4'
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform ${isMobileDropdownOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isMobileDropdownOpen && (
                      <div className="pl-8 mt-2 space-y-2">
                        {item.dropdown.map((subItem) => {
                          const isSubActive = pathname === subItem.href
                          return (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => {
                                setIsMobileMenuOpen(false)
                                setOpenDropdown(null)
                              }}
                              className={`block py-2 text-sm transition-colors ${
                                isSubActive
                                  ? 'text-gold-600 font-semibold'
                                  : 'text-navy-600 hover:text-gold-600'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-2 font-medium transition-colors ${
                    isActive
                      ? 'text-gold-600 border-l-4 border-gold-500 pl-4'
                      : 'text-navy-700 hover:text-gold-600 pl-4'
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        )}
      </nav>
    </header>
  )
}
