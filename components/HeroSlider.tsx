'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Slide {
  imageUrl: string
  quote: string
  title?: string
  subtitle?: string
}

interface HeroSliderProps {
  slides: Slide[]
  showCTA?: boolean
  ctaText?: string
  ctaLink?: string
}

export default function HeroSlider({
  slides,
  showCTA = false,
  ctaText = 'Learn More',
  ctaLink = '/about',
}: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (slides.length === 0) return

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  if (slides.length === 0) return null

  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden" suppressHydrationWarning>
      {/* Background Image with Fade Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full overflow-hidden">
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-full h-full"
              >
                <Image
                  src={slides[currentSlide].imageUrl}
                  alt={slides[currentSlide].title || `Slide ${currentSlide + 1}`}
                  fill
                  className="object-cover"
                  priority={currentSlide === 0}
                  unoptimized
                  sizes="100vw"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/70 to-navy-950/80" />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content - Left Side */}
      <div className="absolute inset-0 z-10 flex items-center">
        <div className="container-custom w-full pt-40 md:pt-52 lg:pt-64">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50, y: 30 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: -50, y: -30 }}
              transition={{ 
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1]
              }}
              className="text-white text-left max-w-md md:max-w-lg space-y-4"
              suppressHydrationWarning
            >
              {slides[currentSlide].subtitle && (
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xs md:text-sm text-gold-500 font-medium uppercase tracking-wider"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>
              )}
              {slides[currentSlide].title && (
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-lg md:text-xl lg:text-2xl text-white font-semibold drop-shadow-lg"
                >
                  {slides[currentSlide].title}
                </motion.h1>
              )}
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-sm md:text-base lg:text-lg text-gray-200 leading-relaxed font-serif italic drop-shadow-md"
              >
                &ldquo;{slides[currentSlide].quote}&rdquo;
              </motion.p>
              {showCTA && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="pt-4 flex flex-col items-start gap-3"
                >
                  <div className="relative inline-block group">
                    <Link
                      href={ctaLink}
                      className="relative inline-block px-8 py-3 text-sm bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-navy-950 font-semibold rounded transition-all duration-300 shadow-lg hover:shadow-xl overflow-hidden group-hover:scale-105"
                    >
                      <span className="relative z-10">{ctaText}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-gold-400 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Arrows */}
      <motion.button
        onClick={goToPrevious}
        whileHover={{ scale: 1.15, x: -5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg"
        aria-label="Previous slide"
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
          <path d="M15 19l-7-7 7-7" />
        </svg>
      </motion.button>
      <motion.button
        onClick={goToNext}
        whileHover={{ scale: 1.15, x: 5 }}
        whileTap={{ scale: 0.95 }}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 border border-white/30 hover:border-white/50 shadow-lg"
        aria-label="Next slide"
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
          <path d="M9 5l7 7-7 7" />
        </svg>
      </motion.button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3 items-center">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`rounded-full transition-all duration-500 backdrop-blur-sm border border-white/30 ${
              index === currentSlide
                ? 'bg-gold-500 h-3 w-10 shadow-lg shadow-gold-500/50'
                : 'bg-white/50 hover:bg-white/70 h-3 w-3'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  )
}
