'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'

interface HeroProps {
  title: string
  subtitle?: string
  description?: string
  imageUrl?: string
  showCTA?: boolean
  ctaText?: string
  ctaLink?: string
}

export default function Hero({
  title,
  subtitle,
  description,
  imageUrl = '/api/placeholder/1200/600',
  showCTA = false,
  ctaText = 'Learn More',
  ctaLink = '/about',
}: HeroProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: imageUrl
              ? `url(${imageUrl})`
              : 'linear-gradient(135deg, #0E2A47 0%, #1F4E79 100%)',
          }}
        >
          <div className="absolute inset-0 bg-navy-950/70" />
        </div>
      </div>

      {/* Content */}
      <div className="container-custom relative z-10 text-center text-white">
        <motion.div
          initial={isMounted ? { opacity: 0, y: 30 } : { opacity: 1, y: 0 }}
          animate={isMounted ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
          suppressHydrationWarning
        >
          {subtitle && (
            <p className="text-lg md:text-xl text-gold-500 font-medium uppercase tracking-wider">
              {subtitle}
            </p>
          )}
          <h1 className="text-white">{title}</h1>
          {description && (
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              {description}
            </p>
          )}
          {showCTA && (
            <div className="pt-6">
              <Link
                href={ctaLink}
                className="inline-block px-8 py-3 bg-navy-900 hover:bg-navy-800 text-white font-semibold border-2 border-navy-900 hover:border-navy-800 transition-colors duration-300"
              >
                {ctaText}
              </Link>
            </div>
          )}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}
