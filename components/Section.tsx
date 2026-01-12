'use client'

import { ReactNode, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
  title?: string
  subtitle?: string
  sectionNumber?: string
  label?: string
  description?: string
}

export default function Section({
  children,
  className = '',
  id,
  title,
  subtitle,
  sectionNumber,
  label,
  description,
}: SectionProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section
      id={id}
      className={`section-padding ${className}`}
      suppressHydrationWarning
    >
      <div className="container-custom">
        {(title || subtitle) && (
          <motion.div
            initial={isMounted ? { opacity: 0, y: 30, scale: 0.95 } : { opacity: 1, y: 0, scale: 1 }}
            whileInView={isMounted ? { opacity: 1, y: 0, scale: 1 } : undefined}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            className="text-center mb-12 md:mb-16 relative"
            suppressHydrationWarning
          >
            {subtitle && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-teal-400 font-semibold uppercase tracking-wider text-sm mb-3"
              >
                {subtitle}
              </motion.p>
            )}
            {title && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="relative inline-block"
              >
                {title}
                {/* Decorative underline */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-gold-500 to-transparent"
                />
              </motion.h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  )
}
